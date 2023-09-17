"use client"

import Image from 'next/image'
import Hello from '../resources/hello-sign.png'
import Wifey from '../resources/wifey.jpg'
import KidOne from '../resources/kid-one.jpg'
import KidTwo from '../resources/kid-two.jpg'
import Bday from '../resources/muhbday.jpeg'

import { useState } from 'react'
import Footer from '@/components/footer/footer.component'


export default function Home() {

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
      
      <section className='photo-grid w-4/5 mb-10 grid items-center justify-center grid-cols-12 grid-rows-5 rounded-xl'>
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

      {/* short */}
      <section className='w-3/4 my-10'>
        <p className='p-4 text-lg text-center border-b-[1px] border-solid border-accentOrange md:text-2xl'>
        I love <b className='text-accentGreen '>people</b> and <b className='text-accentGreen '>problem</b> solving.
        <br/>
        <a className='p-[1px] text-base border-solid border-b-[1px] border-accentBlue md:text-xl' href='/works'>Want to know more?</a>
        </p>        
      </section>

      {/* footer */}

      <Footer />
    </main>
  );
}

// Icons by <a href='https://iconpacks.net/?utm_source=link-attribution&utm_content=142'>Iconpacks</a>