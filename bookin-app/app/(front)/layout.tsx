import Navbar from '@/components/Frontend/Navbar';
import React from 'react'
import {ReactNode} from 'react';


export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}
