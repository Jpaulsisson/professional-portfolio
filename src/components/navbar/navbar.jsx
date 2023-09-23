import React, { useState } from 'react'

export default function Navbar() {

  const currentPath = window.location.href;

  return (
    <nav className='py-10 relative w-1/2 flex items-center justify-evenly gap-4 text-2xl md:text-4xl'>
      <button onClick={() => console.log(currentPath)}>path log</button>
      <a href="/">home</a>
      <a href="/works">works</a>
      <a href="/contact">contact</a>
    </nav>
  )
}


