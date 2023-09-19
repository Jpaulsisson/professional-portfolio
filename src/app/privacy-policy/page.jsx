import Footer from '@/components/footer/footer.component'
import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-20 gap-3'>
      <a href='/' className='border-accentBlue border-thin p-3 underline underline-offset-4 mb-8 rounded-sm'>Go back home</a>
      <blockquote className='w-full md:w-1/2 text-5xl'>We are not going to use your data in any way, shape, or form that benefits us monetarily or otherwise. 
      </blockquote>
      <h2 className='text-accentOrange text-3xl m-4'>We ask for your:</h2>
      <ul className='text-2xl text-accentGreen'>
        <li className='underline underline-offset-4'>Name</li>
          <p className='mb-3 text-xl text-primaryFont indent-4'>&#10026; To add your name to your comments</p>
        <li className='underline underline-offset-4'>Email</li>
          <p className='mb-3 text-xl text-primaryFont indent-4'>&#10026; To identify the unique YOU in a scenario where two people have the same name</p> 
      </ul>

      <h3 className='text-2xl text-accentOrange mt-24 mb-8'><sub className='text-primaryFont'>&#10553;</sub> Any questions at all can be asked at one of these sources below <sub className='text-primaryFont'>&#10549;</sub></h3>

      <Footer />
      <a href='/' className='mt-4 border-accentBlue border-thin p-3 underline underline-offset-4 rounded-sm'>Go back home</a>
    </div>
  )
}
