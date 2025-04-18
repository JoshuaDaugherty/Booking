import Navbar from '@/components/Dashboard/Navbar'
import Sidebar from '@/components/Dashboard/Sidebar'
import {getServerSession } from "next-auth"
import React, { ReactNode } from 'react'
import {authOptions} from "@/lib/auth";
import { redirect } from 'next/navigation';
// import { redirect } from 'next/dist/server/api-utils';

export default async function Layout({children}: {children: ReactNode}) {
  const session = await getServerSession(authOptions);
  if(!session){
    redirect("/login")
  }
  // const user = session.user
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar/>
      <div className="flex flex-col">
        <Navbar session = {session}/>
        <div className="flex min-h-screen w-full flex-col">{children}</div>
      </div>
    </div>
  )
}


