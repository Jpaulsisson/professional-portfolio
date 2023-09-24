"use client"

import React from 'react'
import LogInOrOut from '@/components/log-in-out/log-in-out.component';
import { usePathname } from 'next/navigation'

export default function Navbar() {

  const currentPath = usePathname();

  const navItems = [
    {
      name: 'home',
      href: '/'
    },
    {
      name: 'works',
      href: '/works'
    },
    {
      name: 'contact',
      href: '/contact'
    }
  ]

  return (
    <div className='max-w-cutoff w-full flex items-center justify-center relative'>
      <LogInOrOut />
      <nav className='mt-10 w-1/2 flex items-center justify-evenly gap-4 text-2xl md:text-4xl'>
        {navItems.map(({name, href}) => {
          return (
          <a key={href} href={href} data-active={currentPath === href}>{name}</a>
          )
        })}
      </nav>
    </div>
    
  )
}

