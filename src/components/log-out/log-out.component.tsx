import React from 'react'
import { supabase } from '@/app/utils/supabase'

export default function LogOut() {

  const signOut = async () => {
    let { error } = await supabase.auth.signOut();
    localStorage.setItem('isLoggedIn', 'false');
    location.reload();
    console.log('user signed out');
  }

  return (
    <div>
      <button onClick={signOut} className='absolute p-2 w-1/4 top-0 right-0'>log out</button>
    </div>
  )
}
