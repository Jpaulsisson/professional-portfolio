"use client"

import './works.css';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Travel from '@/resources/travel.jpeg';
import { projects, skills, current } from './works.info';
import { useState } from 'react';
import Footer from '@/components/footer/footer.component';

export default function Works() {

  const [openRecent, setOpenRecent] = useState('h-0');
  const [openCurrent, setOpenCurrent] = useState('h-0');
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleToggleRecent() {
    openRecent === 'h-full' ? setOpenRecent('h-0') : setOpenRecent('h-full');
  }

  function handleToggleCurrent() {
    openCurrent === 'h-full' ? setOpenCurrent('h-0') : setOpenCurrent('h-full');
  }

  function handlePrev() {
    currentSlide === 0 ? setCurrentSlide(projects.length - 1) : setCurrentSlide((currentSlide) => currentSlide -= 1);
  }

  function handleNext() {
    currentSlide === projects.length - 1 ? setCurrentSlide(0) : setCurrentSlide((currentSlide) => currentSlide += 1);
  }

  return (
    <main className='w-full max-w-cutoff flex flex-col items-center justify-center relative'>

      {/* skills */}

      <section className='my-10 w-full flex flex-col items-center justify-center'>
        <h2 className='text-3xl text-center my-4 md:text-5xl'>proficiencies</h2>
        <ul className='skills w-3/4 gap-2 text-lg md:text-2xl'>
          {skills.map(({name, color}, i) => {
            return <li key={i} className={`${color}`}>{name}</li>
          })}
        </ul>
      </section>

      {/* recent projects header */}

      <h2 className='mb-10 text-center text-3xl md:text-5xl'>recent</h2>

      {/* recent projects carousel */}

      <section aria-label="my recent projects">

          {/* carousel start */}
        <div className="carousel-container relative">
          
          {/* prev and next buttons */}

          <button onClick={handlePrev} className=" carousel-button z-10 p-2 absolute top-1/2 left-2 text-2xl opacity-50 bg-primaryBg rounded-full">
            <FaArrowLeft />
          </button>
          <button onClick={handleNext} className=" carousel-button z-10 p-2 absolute top-1/2 right-2 text-2xl opacity-50 bg-primaryBg rounded-full">
            <FaArrowRight />
          </button>

          {/* carousel cards */}

          <ul className='list-none'>
            {projects.map(({name, href, img, tags, repo }, index) => {
              return (
              <li key={index} className={`car-slide ${currentSlide === index ? 'opacity-100' : 'opacity-0'} absolute inset-0 transition-opacity-[5000ms]`}>
                <Link href={href} aria-label={name + ' live site'} rel="noopener noreferrer" target="_blank" className="absolute z-40 bg-transparent w-8/12 h-3/4 inset-0 m-auto"> </Link>
                <Image src={img} alt={name} className="rounded-md" />
                
                {/* more info content */}

                <div className={`more-info overflow-hidden w-full inset-0 absolute ${openRecent} bg-primaryBg opacity-95 flex flex-col items-center justify-center`}>
                  <h3 className='flex items-center justify-center text-accentGreen text-xl md:text-3xl'>{name}</h3>
                  <p className='text-xl md:text-2xl' >Tech stack:</p>
                  <div className='flex items-center justify-around gap-2 md:gap-6'>
                    {tags.map((tag, index) => {
                      return <Image priority={true} key={index} src={tag} alt={name} className=' w-10 md:w-[10%]'/>
                    })}
                  </div>
                  <a className='flex justify-center items-center text-xl md:text-2xl' target="_blank" rel="noopener noreferrer" href={repo}><span className='text-accentGreen text-2xl' >&#60;</span>github repo<span className='text-accentGreen text-2xl'>&#62;</span>
                  </a>
                </div>
              </li>
              )
            })}
          </ul>

      {/* end carousel cards */}
          
        </div>
      </section>

      {/* more info button */}

      <button onClick={handleToggleRecent} className='mb-20 mt-4 rounded-md text-primaryFont w-1/4 border-thin border-accentOrange md:text-2xl'>More info</button>

      {/* current project header */}

      <h2 className='mb-10 text-center text-3xl md:text-5xl'>current</h2>

      {/* current project card */}

      <div className='w-4/5 relative'>
          <div>
            <Image src={Travel} alt='travel photo' className="w-full" />
            <div className={`more-info w-full inset-0 absolute ${openCurrent} overflow-hidden bg-primaryBg opacity-90 flex flex-col items-center justify-center`}>
              <h3 className='flex items-center justify-center text-accentGreen text-xl md:text-3xl'>Travel Planner</h3>
              <p className='text-xl md:text-2xl' >Tech stack:</p>
              <div className='flex items-center justify-evenly'>
                {current.tags.map((tag, index) => {
                return <Image className='w-1/6' key={index} src={tag} alt='programming language icon'/>
                })}
              </div>
              <a className='flex justify-center items-center text-xl md:text-2xl' href='/contact'><span className='text-accentGreen text-2xl' >&#60;</span>collaborate<span className='text-accentGreen text-2xl'>&#62;</span>
              </a>
            </div>
            
          </div>
      </div>

      {/* more info button */}

      <button onClick={handleToggleCurrent} className='mb-20 mt-4 rounded-md text-white w-1/4 border-solid border-thin border-accentOrange md:text-2xl'>More info</button>

      {/* mini-nav */}

      <div className=' brightness-75 flex items-center justify-evenly w-1/2 mb-8 text-md text-accentOrange md:text-xl md:mb-16'>
        <a className='text-primaryFont' href='/'>
          home
        </a>
        || 
        <a className='text-primaryFont' href='/contact'>
          contact
        </a>
      </div>
      
       {/* footer */}
      
      <Footer />
    
    </main>
  )
}
