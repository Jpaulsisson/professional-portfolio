"use client"

import Image from 'next/image'
import Hello from '../resources/hello-sign.png'
import GoogleIcon from '../resources/google.svg'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { supabase } from '../app/utils/supabase.js'
import { signInWithThirdParty } from '../app/utils/sign-in'
import { useState, useEffect } from 'react'
import Footer from '@/components/footer/footer.component'
import LogOut from '@/components/log-out/log-out.component'
import PhotoGrid from '@/components/photo-grid/photo-grid.component'

export default function Home() {

  useEffect(() => {
    const fetchComments = async() => {
      const { data: messages, error } = await supabase.from('messages').select('*').order('id', {ascending: false}).range(0, 4)

      if (error){
        console.log('error', error)
      } else {
        if (messages) {
        setComments(messages);
        }
      } 
    }

    fetchComments();
  }, [])

  useEffect(() => {
    const getUser = async() => {
        const loginStatus = localStorage.getItem('isLoggedIn');
        if (loginStatus === 'true') {
          const username = localStorage.getItem('username');
          const user_id = localStorage.getItem('user_id');
          if (username) setCurrentUsername(username);
          if (user_id) setCurrentUserId(user_id);
        } 
        if (!loginStatus) {
          localStorage.setItem('isLoggedIn', 'false');
        } 
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          const user_id = user.id;
          localStorage.setItem('user_id', user_id);
          localStorage.setItem('isLoggedIn', 'true');
          setCurrentUserId(user_id);
        }
        if (user?.identities) {
          if (user.identities.length > 0) {
            if (user.identities[0].identity_data) {
              const username = user.identities[0].identity_data.name;
              setCurrentUsername(username);
            }
          }
        }
    }

    getUser();
  }, [])
  
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if( loginStatus !== null) setLoginStatus(loginStatus);
  }, [])

  const [currentUsername, setCurrentUsername] = useState('')
  const [currentUserId, setCurrentUserId] = useState('')
  const [userComment, setUserComment] = useState('')
  const [loginStatus, setLoginStatus] = useState('')
  const [comments, setComments] = useState<any[]>([]);

  function formatTimestamp(timestamp: string) {
    const date = new Date(timestamp);
    const time = new Date(timestamp);
    const formattedDate =  date.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: '2-digit'});
    const formattedTime = time.toLocaleTimeString('en-US')
    return {
      formattedDate: formattedDate,
      formattedTime: formattedTime
    };
  }

  async function addUserComment(userComment: string) {
    const message = userComment.trim();
    if (message.length) {
      const { data, error } = await supabase
    .from('messages')
    .insert([
      { name: currentUsername, user_id: currentUserId, message: message },
    ])
    .select()
    .single()
    }
    setComments((prev) => [...prev, {id: `${currentUsername}${Math.random() * 1234567890}`, name: currentUsername, user_id: currentUserId, message: message, created_at: new Date() }]);
    setUserComment('');
  }

  return (
    <main className='w-full max-w-cutoff flex flex-col items-center justify-center relative'>
      
      {loginStatus === 'true' &&
      <LogOut />}
      
      {/* nav bar */}

      <nav className='py-10 relative w-1/2 flex items-center justify-evenly gap-4 text-2xl md:text-4xl'>
        <a className='text-accentOrange' href="/">home</a>
        <a href="/works">works</a>
        <a href="/contact">contact</a>
      </nav>

      {/* intro text */}

      <section className='my-10 flex flex-col items-center justify-center gap-4 text-center'>
        <h1 className='flex items-center justify-center gap-2 tracking-wide text-3xl md:text-5xl'><Image src={Hello} alt='Hello sign' width={75}/> I&apos;m Paul,</h1>
        <p className='w-3/5 text-lg tracking-wide md:text-2xl'>I&apos;m a frontend software engineer from Birmingham, AL. Let me save a few thousand words <sub className='text-accentGreen text-2xl md:text-4xl'>&#10549;</sub></p>
      </section>

      {/* photo grid */}
      
      <PhotoGrid />

      {/* leave a message */}

      <section className='w-3/4 my-10'>
        <fieldset className='p-4 bg-primaryBg rounded-sm text-primaryFont border-thin border-accentGreen'>
            <legend className='text-xl md:text-3xl text-right font-medium text-accentBlue p-2'>
            {loginStatus === 'false' ?
              `sign in, leave a message`
              :
              ` leave a message `}
            </legend>
            {loginStatus === 'false' &&
              <div className='flex w-1/2 md:w-1/4 ml-auto gap-x-2'>
                <button onClick={() => signInWithThirdParty('google')} className='w-1/3 aspect-square border-thin border-primaryFont rounded-full bg-primaryFont'>
                  <Image src={GoogleIcon} alt='google logo' />
                </button>
                <button onClick={() => signInWithThirdParty('github')} className='w-1/3 aspect-square rounded-full'>
                  <FaGithub className='w-full h-full items-center' fill={`var(--primaryFont)`}  />
                </button>
                <button onClick={() => signInWithThirdParty('facebook')} className='w-1/3 aspect-square rounded-full'>
                  <FaFacebook className='w-full h-full items-center' stroke='var(--primaryFont)' strokeWidth={15} fill='var(--accentBlue)' />
                </button>
                {/* <button onClick={() => signInWithThirdParty('linkedin')} className='w-1/3 aspect-square rounded-full'>
                  <FaLinkedin className='w-full h-full items-center' stroke='var(--primaryFont)' strokeWidth={10} fill='var(--accentBlue)' />
                </button> */}
              </div>}
          <div id='messages' className="comments-wrapper grid grid-cols-4 gap-4">
            {comments.map((comment) => {
            const {id, created_at, message, name } = comment;
            const {formattedDate, formattedTime} = formatTimestamp(created_at);
            return (
              <div key={id} className=' col-span-3 flex flex-col '>
                <h6 className='font-bold text-accentOrange text-sm'>{name} said:</h6>
                <p className='comment relative z-10 text-lg'>{message}</p>
                <span className='text-xs p-1'>{formattedDate} {formattedTime}</span>
              </div>
            )
          })}
          </div>
          
        </fieldset>
        {loginStatus === 'true' &&
          <form onSubmit={(e) => {
            e.preventDefault()
            addUserComment(userComment)}}
            className='w-full p-4 flex items-center justify-center gap-4'>
            <input value={userComment} onChange={(e) => setUserComment(e.target.value)} className='w-3/4 bg-primaryFont outline-accentGreen placeholder:text-primaryBg placeholder:text-sm placeholder:p-1 text-primaryBg' type="text" placeholder='your message...' />
            <button type='submit' className='border-thin border-accentOrange rounded-sm px-2' >Send</button>
          </form> }

      </section>

      {/* footer */}

      <Footer />
    </main>
  );
}

// Icons by <a href='https://iconpacks.net/?utm_source=link-attribution&utm_content=142'>Iconpacks</a>