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
    <main className="w-full h-[80vh] max-w-cutoff flex flex-col items-center justify-center relative">
      
      {/* contact info */}

      <section className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">

        {/* modal */}

        <StyledModal
          modalOpen={modalOpen}
          toggleModal={toggleModal}
          active={active}
        />

        {/* contact links/buttons */}

        <button className="" onClick={toggleModal}>
          <Image className="w-28 md:w-36 " src={Email} alt="envelope" />
        </button>
        <button className="" onClick={toggleModal}>
          <Image className="w-28 md:w-36" src={Phone} alt="phone" />
        </button>
        <a
          className=""
          href="https://www.linkedin.com/in/jpaulsisson/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image className="w-28 md:w-36 " src={LinkedIn} alt="LinkedIn logo" />
        </a>
        <a
          href="https://github.com/Jpaulsisson"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image className="w-28 md:w-36 " src={GitHub} alt="GitHub logo" />
        </a>

      </section>

    </main>
  );
}

export default Contact
