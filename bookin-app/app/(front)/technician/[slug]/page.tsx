"use client"
import React from 'react';
import Image from "next/image"
import TechDetails from '@/components/TechDetails';
import FixedBookButton from '@/components/FixedBookButton';



export default function page() {
  return (
    <div className="bg-slate-50  min-h-screen">
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-md rounded-md">
        <div className="py-8 px-6">
          <div className="flex items-center justify-between">
            <div className="">
            <div className="flex flex-col">
            <h2 className="uppercase font-bold text-2xl tracking-widest">Kevin Daugherty</h2>
            <p className="text-gray-500 text-xs uppercase">Service Tech</p>
          </div>
          
          <div className="py-3"><p>Saint Louis, MO, 63031</p></div>
            </div>
              <Image src="" width={243} height={207} alt="Technician" className="w-36 h-36 rounded-full object-cover" />
          </div>
          
        </div>
        <div className="">
        <TechDetails/>
        </div>
      </div>
      <FixedBookButton/>
    </div>
  )
}
