import React from 'react'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import Link from 'next/link'
import {Map} from 'lucide-react';

export default function TechnicianList({title="Service Technician"}:{title?:string}) {
  return (
    <div className="bg-pink-100 dark:bg-blue-800 py-8 lg:py-24">
      <div className="max-w-6xl mx-auto">
      <SectionHeading title={title}/>
      <div className="py-4 flex items-center justify-between">
        <Link href="#" className="text-sm flex items-center text-blue-700 font-semibold">
        <Map className="mr-2 flex-shrink-0 w-4 h-4 dark:text-white"/>
          <span className="dark:text-white">Map View</span>
        </Link>
      </div>
      <div className="py-6">
        <ServiceCard/>
      </div>
      </div>
    </div>
  )
}
