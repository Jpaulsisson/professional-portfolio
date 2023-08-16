"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import Modal from 'react-modal'
import Image, { StaticImageData } from 'next/image'
import Email from '../../resources/email.svg'
import Phone from '../../resources/phone.svg'
import LinkedIn from '../../resources/linkedin.svg'
import GitHub from '../../resources/github.svg'
import StyledModal from '../styled-modal/styled-modal.component';

function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(modalOpen);
  }, [modalOpen])

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <footer className="mb-10 w-1/2 flex justify-between">
      {/* modal */}

      <StyledModal
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        active={active}
      />

      {/* footer content */}

      <button className=" cursor-pointer" onClick={toggleModal}>
        <Image className="w-10 md:w-16" src={Email} alt="envelope" />
      </button>

      <button className="cursor-pointer" onClick={toggleModal}>
        <Image className="w-10 md:w-16" src={Phone} alt="phone" />
      </button>
      <a
        className=""
        href="https://www.linkedin.com/in/jpaulsisson/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image className="w-10 md:w-16" src={LinkedIn} alt="LinkedIn logo" />
      </a>
      <a
        href="https://github.com/Jpaulsisson"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image className="w-10 md:w-16" src={GitHub} alt="GitHub logo" />
      </a>
      
    </footer>
  );
}

export default Footer
