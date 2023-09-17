"use client"

import Image from 'next/image'
import Hello from '../resources/hello-sign.png'
import Wifey from '../resources/wifey.jpg'
import KidOne from '../resources/kid-one.jpg'
import KidTwo from '../resources/kid-two.jpg'
import Bday from '../resources/muhbday.jpeg'
import { supabase } from '../app/utils/supabase.js'

import { useState, useEffect } from 'react'
import Footer from '@/components/footer/footer.component'


export default function Home() {

  useEffect(() => {
    const fetchComments = async() => {
      const { data: messages, error } = await supabase.from('messages').select('*').order('id', {ascending: false})

      if (error){
        console.log('error', error)
      } else {
        if (messages) {
          console.log(messages);
        setComments(messages);
        }
      } 
    }

    fetchComments();
  }, [])

  useEffect(() => {
    const getUser = async() => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) console.log(user);
    }

    getUser();
  }, [])

  const [currentUser, setCurrentUser] = useState<any[]>([])
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

  return (
    <main className='w-full max-w-cutoff flex flex-col items-center justify-center'>

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
      
      <section className='photo-grid w-4/5 mb-10 grid items-center justify-center grid-cols-12 grid-rows-5 rounded-md'>
        <div className=" col-start-2 col-span-6 row-start-1 row-span-3">
          <Image className='rounded-sm' src={Wifey} alt='my hot wife' />
        </div>
        <div className=" col-start-9 col-span-3 row-start-1 row-span-3">
          <Image className='rounded-sm' src={KidOne} alt='my son' />
        </div>
        <div className=' col-start-8 col-span-3 row-start-3 row-span-2' >
          <Image className='rounded-sm' src={KidTwo} alt='my daughter' />
        </div>
        <div className=' col-start-3 col-span-4 row-start-3 row-span-3'>
          <Image className='rounded-sm ' src={Bday} alt='my birthday' />
        </div>      
      </section>

      {/* leave a message */}

      <section className='w-3/4 my-10 border-thin border-accentGreen rounded-sm p-1'>
        <div className='p-4 bg-primaryFont rounded-sm text-primaryBg'>
          <h3 className='text-3xl text-right font-medium text-accentBlue'>Leave me a message</h3>
          <div className="comments-wrapper grid grid-cols-4 gap-4">
            {comments.map((comment) => {
            const {id, created_at, message, user_id } = comment;
            const {formattedDate, formattedTime} = formatTimestamp(created_at);
            return (
              <div key={id} className=' col-span-3 flex flex-col '>
                <h6 className='font-bold text-accentOrange text-sm'>{user_id} said:</h6>
                <p className='comment relative z-10 text-lg'>{message}</p>
                <span className='text-xs p-1'>{formattedDate} @{formattedTime}</span>
              </div>
            )
          })}
          </div>
        </div>
      </section>

        

      {/* footer */}

      <Footer />
    </main>
  );
}

// Icons by <a href='https://iconpacks.net/?utm_source=link-attribution&utm_content=142'>Iconpacks</a>