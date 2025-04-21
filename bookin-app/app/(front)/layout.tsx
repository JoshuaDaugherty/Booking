// import MegaMenu from '@/components/Frontend/MegaMenu';
import Footer from '@/components/Frontend/Footer';
import { SiteHeader } from '@/components/site-header';
import React from 'react'
import {ReactNode} from 'react';
import {authOptions} from "@/lib/auth"
import {getServerSession} from "next-auth"


export default async function Layout({children}:{children:ReactNode}) {
  const session = await getServerSession(authOptions)

  return (
    <div className="">
      <SiteHeader session = {session} />
      {/* <div className="bg-white mx-auto py-4 fixed top-20 w-full left-0 right-0 border-t border-gray-400/30 z-50">
        <MegaMenu/>
      </div> */}
      
      {children}
      <Footer/>
    </div>
  )
}
