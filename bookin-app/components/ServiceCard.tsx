import Link from "next/link"
import React from 'react'
import Image from "next/image"
import { HardHatIcon, Phone } from "lucide-react"


export default function ServiceCard() {
  const timeStamps =[
    {
    time: "7:00",
    period: "am"
    },
    {
      time: "10:00",
      period: "am"
    },
    {
      time: "1:00",
      period: "pm"
    },
    {
      time: "4:00",
      period: "pm"
    },
    {
      time: "7:00",
      period: "pm"
    }
]
  return (
    <div className="border border-gray-200 bg-white inline-flex flex-col py-8 px-6 rounded-md hover:border-gray-400 duration-300 transition-all">
      <Link href="/technician/slug">
      <h2 className="uppercase font-bold text-2xl tracking-widest"> Kevin Daugherty, Technician</h2>
      <p className="py-3">Saint Louis MO, 63031</p>
      <div className="flex items-center gap-4 py-4">
        <div className="relative">
        <Image src="/BlackmanHVAC.jpg" width={243} height={207} alt="Technician" className="w-24 h-24 rounded-full object-cover" />
        <p className="absolute bottom-0 right-2 bg-blue-200 w-10 h-10 flex items-center justify-center rounded-full text-blue-700">
          <Phone className="w-6 h-6"/>
        </p>
        </div>

      <div className="flex flex-col gap-2">
        <p className="flex items-center">
          <HardHatIcon className="w-4 h-4 mr-2 flex-shrink-0"/>
          <span>Gas Engineer</span>
        </p>
        <p className="bg-green-200 py-3 px-6 uppercase">
          Available Today
        </p>
      </div>
      </div>
      </Link>
      <div className="pt-6 border-t border-gray-400">
        <h3 className="flex gap-4 justify-between items-center"><span className="text-gray-600">Monday, February 19</span> <span className="font-bold">$25</span>
       
          </h3>
          <div className="py-3 grid grid-cols-3 gap-4">
          {
            timeStamps.slice(0,4).map((item,i)=>{
              return <Link className="bg-blue-600 text-white py-2 px-3 text-center " key={i} href="#" >
                {item.time}{item.period}
              </Link>
            })
          
          }
          <Link className="bg-blue-900 text-white py-2 px-3 text-center truncate" href="/technician/slug">More times</Link>
        </div>
      </div>
    </div>
  )
}
