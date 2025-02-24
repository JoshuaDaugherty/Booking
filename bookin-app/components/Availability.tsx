"use client"
import React, { useState, useEffect } from 'react'
import { Calendar } from "@/components/ui/calendar"

export default function Availability() {

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

  const [bookDate, setBookDate] = useState<Date | undefined>(undefined);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = bookDate ? 
    `${bookDate.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })} - ${currentTime}` : 
    '';

  console.log(formattedDate)

  return (
    <div className="mb-[200px]">
      <h2 className="font-bold py-4 text-xl uppercase text-slate-500 tracking-wider">Select a Date and Time</h2>
      <div className="grid grid-cols-2 gap-4 lg:gap-0">
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            mode="single"
            selected={bookDate}
            onSelect={setBookDate}
            className="rounded-md border"
          />
        </div>
        <div className="sm:col-span-1 col-span-full">
          <div className="px-4">
            <h2 className="pb-4  text-blue-700 text-center py-3 px-4 border border-blue-500">
              {formattedDate}
            </h2><div className="py-3 grid grid-cols-3 gap-4">
          {
            timeStamps.slice(0,4).map((item,i)=>{
              return <button className="bg-blue-600 text-white py-2 px-3 text-center " key={i}  >
                {item.time}{item.period}
              </button>
            })
          
          }
          <button className="bg-blue-900 text-white py-2 px-3 text-center truncate" >More times</button>
        </div>


          </div>
        </div>
      </div>
      {/* Calender */}
      {/* Availability */}
    </div>
  )
}