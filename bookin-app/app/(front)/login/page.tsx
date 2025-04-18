import Login from '@/components/Auth/Login'
// import LoginForm from '@/components/Auth/LoginForm'
import React from 'react'

export default function page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex justify-center gap-2 md:justify-start">
        <a href="#" className="flex items-center gap-2 font-medium">
          
          
        </a>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <Login/>
        </div>
      </div>
    </div>
    <div className="relative hidden bg-muted lg:block h-screen">
      <img
        src="/bg.jpg"
        alt="Image"
        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
  )
}
