"use client"

import './works.css';
import Image, { StaticImageData } from 'next/image'
import CirclePainter  from '../../resources/circle-painter.png'
import Blackjack  from '../../resources/blackjack.png'
import AgeCalc  from '../../resources/age-calc.png'
import Counter  from '../../resources/counter.png'
import Retrofolio from '../../resources/retrofolio.png'
import Travel from '../../resources/travel.jpeg'
import HTMLIcon from '../../resources/HTML-icon.svg'
import CSSIcon from '../../resources/CSS-icon.svg'
import JSIcon from '../../resources/JS-icon.svg'
import ReactIcon from '../../resources/React-icon.svg'
import SassIcon from '../../resources/Sass-icon.svg'
import GitIcon from '../../resources/Git-icon.svg'
import OpenBox from '../../resources/open-box.svg'
import { useState } from 'react';
import Footer from '@/components/footer/footer.component';


type Project = {
  name: string,
  href: string,
  img: StaticImageData,
  tags: StaticImageData[],
  repo: string,
  status?: string
}

function Works() {

  const [openRecent, setOpenRecent] = useState('h-0');
  const [openCurrent, setOpenCurrent] = useState('h-0');

  const projects:Project[] = [
    {
      name: 'Retrofolio',
      href: 'https://jpaulsisson.netlify.app/',
      img: Retrofolio,
      tags: [HTMLIcon, SassIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/portfolio-site'
    },
    {
      name: 'Circle Painter',
      href: 'https://circle-paint.netlify.app/',
      img: CirclePainter,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/circle-generator-app',
    },
    {
      name: 'Blackjack',
      href: 'https://jpaulsisson-blackjack.netlify.app/',
      img: Blackjack,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/blackjack',
    },
    {
      name: 'Age Calculator',
      href: 'https://calculate-age-fem.netlify.app',
      img: AgeCalc,
      tags: [HTMLIcon, SassIcon, JSIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/age-calculator-app',
    },
    {
      name: 'Customizable Counter',
      href: 'https://customizable-counter.netlify.app',
      img: Counter,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/wds-react-hooks-course/tree/main',
    },
  ]

  const current:Project = {
      name: 'Travel Planner',
      href: '#',
      img: Travel,
      tags: [HTMLIcon, SassIcon, JSIcon, ReactIcon, GitIcon],
      repo: '#',
      status: 'Gathering API keys and wireframing'
    };

  function handleToggleRecent() {
    openRecent === 'h-full' ? setOpenRecent('h-0') : setOpenRecent('h-full');
  }
  function handleToggleCurrent() {
    openCurrent === 'h-full' ? setOpenCurrent('h-0') : setOpenCurrent('h-full');
  }

  return (
    <main className='w-full max-w-cutoff flex flex-col items-center justify-center'>

      {/* nav bar */}

      <nav className='py-10 w-1/2 flex items-center justify-evenly gap-4 text-2xl md:text-4xl'>
        <a href="/">home</a>
        <a className='text-accentOrange' href="/works">works</a>
        <a href="/contact">contact</a>
      </nav>

      {/* skills */}

      <section className='my-10'>
        <h2 className='text-3xl text-center my-4 md:text-5xl'>proficiencies</h2>
        <ul className=' grid grid-cols-2 text-xl md:text-2xl'>
          <li className='p-3 text-accentOrange'>HTML</li>
          <li className='p-3 text-accentBlue'>CSS</li>
          <li className='p-3 text-blue-300'>React</li>
          <li className='p-3 text-pink-500'>Sass</li>
          <li className='p-3 text-yellow-300'>Javascript</li>
          <li className='p-3 text-accentGreen'>Tailwind</li>
          <li className='p-3 text-accentOrange'>Git</li>
          <li className='p-3 text-accentBlue'>Typescript</li>
        </ul>
      </section>

      {/* recent projects */}

      <h2 className='mb-10 text-center text-3xl md:text-5xl'>recent</h2>
      <div className='w-4/5 carousel rounded-md relative'>
        
        {projects.map((project, index) => {
          return (
          <div id={`slide${index}`} key={project.name} className="carousel-item relative w-full p-1">
            <a href={project.href} rel='noopener noreferrer' target='_blank' className='w-9/12 h-full min-w-[50%] min-h-full absolute inset-0 mx-auto bg-transparent z-10'> </a>
            <Image src={project.img} alt={`screenshot of ${project.name}`} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide${index - 1}`} className="btn w-7 bg-opacity-50 border-primaryFont text-lg text-accentGreen p-0">❮</a> 
              <a href={`#slide${index + 1}`} className="btn w-7 bg-opacity-50 border-primaryFont text-lg text-accentGreen p-0">❯</a>
            </div>
            <div className={`more-info w-full inset-0 absolute ${openRecent} overflow-hidden bg-primaryBg opacity-90 flex flex-col items-center justify-center z-20`}>
              <a className='flex items-center justify-center text-accentGreen text-xl md:text-3xl' href={project.href} rel='noopener noreferrer' target='_blank'>{project.name}<Image src={OpenBox} alt='box with arrow' className='w-5 md:w-10' /></a>
              <p className='text-xl md:text-2xl' >Tech stack:</p>
              <div className='flex items-center justify-evenly'>
                {project.tags.map((tag, index) => {
                return <Image className='w-1/6' key={index} src={tag} alt={project.name}/>
                })}
              </div>
              <a className='flex justify-center items-center text-xl md:text-2xl' href={project.repo} rel='noopener noreferrer' target='_blank'><span className='text-accentGreen text-2xl' >&#60;</span>github repo<span className='text-accentGreen text-2xl'>&#62;</span>
              </a>
            </div>
          </div>
          
          )
        })}
      </div>
      <button onClick={handleToggleRecent} className='mb-20 mt-4 rounded-md text-white w-1/4 border-solid border-[1px] border-accentOrange md:text-2xl'>More info</button>

      {/* current projects */}

      <h2 className='mb-10 text-center text-3xl md:text-5xl'>current</h2>
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
      <button onClick={handleToggleCurrent} className='mb-20 mt-4 rounded-md text-white w-1/4 border-solid border-[1px] border-accentOrange md:text-2xl'>More info</button>

      {/* footer */}

      <Footer />
    </main>
  )
}

export default Works
