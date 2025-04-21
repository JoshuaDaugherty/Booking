import React from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

export default function FixedBookButton() {
  return (
    <div className="fixed bottom-0 bg-white dark:bg-slate-700 z-50 w-full shadow-2xl py-8 px-6   mx-auto">
      <div className="max-w-4xl mx-auto flex gap-4 items-center justify-between">
      <div className="w-full">
          <p className="text-xl font-bold">$25</p>
          <p className="font-semibold text-sm">Book your session today!</p>
         
        </div>
        <Button
                variant="outline"
                className="px-6 py-3"
              >
                <Plus className="w-5 h-5 mr-1" />
                Book
        </Button>
      </div>
       
      </div>
  )
}
