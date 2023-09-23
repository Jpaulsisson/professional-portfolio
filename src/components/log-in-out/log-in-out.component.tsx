"use client"

import React, { useState } from 'react'
import { useUserContext } from '@/contexts/user.context';
import { supabase } from '@/app/utils/supabase'
import Image from 'next/image';
import GoogleIcon from '@/resources/google.svg';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import ReactModal from 'react-modal';

export default function LogInOrOut() {

  const [modalOpen, setModalOpen] = useState(false);
  const [scale, setScale] = useState('0');
  const { currentSession, appElement } = useUserContext();

  const signOut = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) {
      alert('error signing out user');
      console.log(error)
      return;
    }
  }

  return (
  <> 
  {!currentSession ?
    <div className='absolute p-2 w-1/3 top-0 right-0 flex flex-col items-center justify-center'>
      <button onClick={() => setModalOpen(prev => !prev)} className=''>log in</button>
      <ReactModal 
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel='sign in options'
        closeTimeoutMS={400}
        appElement={appElement}
        style={{
          content: {
            height: '60%', 
            maxWidth: '350px',
            margin: 'auto',
            background: 'var(--primaryBg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems: 'center',
            gap: '1rem',
            padding: '0',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }
        }}
        >
        <span className='text-2xl'>Choose a sign in option:</span>
        <div className='flex flex-col items-center justify-between w-full h-full'>
          <button className='w-1/4 h-1/6 flex items-center justify-center'>
            <Image src={GoogleIcon} alt='google sign in button' />
          </button>  
          <button  className='w-1/4 h-1/6 flex items-center justify-center'>
            <FaGithub className='w-full h-full' fill='var(--primaryFont)'/>  
          </button>
          <button className='w-1/4 h-1/6 flex items-center justify-center'>
            <FaFacebook className='w-full h-full' stroke='var(--primaryFont)' strokeWidth={10} fill='var(--accentBlue)'/>
          </button>
          <button onClick={() => setModalOpen(prev => !prev)} className='w-full text-3xl p-2 text-accentOrange'><span className='text-primaryFont '>&#60;</span>/close<span className='text-primaryFont'>&#62;</span></button>
        </div>
        </ReactModal>  
      </div> 
    
    :
    <div className='absolute p-2 w-1/3 top-0 right-0 text-center'>
      <button onClick={signOut}>log out</button>
    </div>
    }
  </> 
  )
}
