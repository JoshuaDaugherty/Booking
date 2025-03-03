// import MegaMenu from '@/components/Frontend/MegaMenu';
import Navbar from '@/components/Frontend/Navbar';
import React from 'react'
import {ReactNode} from 'react';


export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className="bg-white">
      <Navbar/>
      {/* <div className="bg-white mx-auto py-4 fixed top-20 w-full left-0 right-0 border-t border-gray-400/30 z-50">
        <MegaMenu/>
      </div> */}
      
      <div className="mt-[60px]">
      {children}
      </div>
    </div>
  )
}
