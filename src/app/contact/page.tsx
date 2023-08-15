"use client"

import Image from 'next/image'
import Email from '../../resources/email.svg'
import Phone from '../../resources/phone.svg'
import LinkedIn from '../../resources/linkedin.svg'
import GitHub from '../../resources/github.svg'
import { useState, useEffect } from 'react'
import StyledModal from '@/components/styled-modal/styled-modal.component'

function Contact() {

  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(modalOpen);
  }, [modalOpen])

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <main className='w-full min-h-screen max-w-cutoff flex flex-col items-center'>
  
      {/* nav bar */}

      <nav className='py-10 w-1/2 flex items-center justify-evenly gap-4 text-2xl md:text-4xl'>
        <a href="/">home</a>
        <a  href="/works">works</a>
        <a className='text-accentOrange' href="/contact">contact</a>
      </nav>
      
      {/* contact info */}

      <section className=' flex flex-col gap-8 md:gap-12'>
      <a className='' onClick={toggleModal} >
        <Image className='w-28 md:w-40 ' src={Email} alt='envelope' />
      </a>
      <StyledModal modalOpen={modalOpen} toggleModal={toggleModal} active={active} />
        <a className='' onClick={toggleModal}>
        <Image className='w-28 md:w-40 ' src={Phone} alt='phone' />
        </a>
        <a className='' href='https://www.linkedin.com/in/jpaulsisson/' rel='noopener noreferrer' target='_blank'>
        <Image className='w-28 md:w-40 ' src={LinkedIn} alt='LinkedIn logo' />
        </a>
        <a href="https://github.com/Jpaulsisson" rel='noopener noreferrer' target='_blank'>
        <Image className='w-28 md:w-40 ' src={GitHub} alt='GitHub logo' />
        </a>
      </section>
    </main>
  )
}

export default Contact
