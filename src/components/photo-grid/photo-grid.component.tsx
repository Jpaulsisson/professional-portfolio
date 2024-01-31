import React from 'react'
import Image from 'next/image'
import Wifey from '../../resources/wifey.jpg'
import KidOne from '../../resources/kid-one.jpg'
import KidTwo from '../../resources/kid-two.jpg'
import Bday from '../../resources/muhbday.jpeg'

export default async function PhotoGrid() {
  return (
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
  )
}
