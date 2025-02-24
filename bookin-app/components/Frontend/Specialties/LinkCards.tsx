import React from 'react';
import Link from 'next/link';

export default function LinkCards({className}:{className?:string}) {
  return (
   <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-6">
     <Link href="#" className={`rounded-md py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
      <h2>Dirty air filters</h2>
      <span aria-hidden="true">&rarr;</span>
    </Link>

    <Link href="#" className={`rounded-md py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
      <h2>Dirty air filters</h2>
      <span aria-hidden="true">&rarr;</span>
    </Link>

    <Link href="#" className={`rounded-md py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
      <h2>Refrigerant leaks</h2>
      <span aria-hidden="true">&rarr;</span>
    </Link>

    <Link href="#" className={`rounded-md py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
      <h2>Thermostat issues</h2>
      <span aria-hidden="true">&rarr;</span>
    </Link>

    <Link href="#" className={`rounded-md py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
      <h2>Leaky pipes</h2>
      <span aria-hidden="true">&rarr;</span>
    </Link>

    <Link href="#" className={`rounded-md py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
      <h2>Inadequate venting</h2>
      <span aria-hidden="true">&rarr;</span>
    </Link>

    <Link href="#" className={`rounded-md py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
      <h2>Dripping faucets</h2>
      <span aria-hidden="true">&rarr;</span>
    </Link>
   </div>
  )
}
