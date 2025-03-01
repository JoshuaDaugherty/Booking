import React from 'react'

type TextInputProps = {
  label:string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  name:string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
  type?:string;
};

export default function TextInput({label,register, name, errors,type="text"}: TextInputProps) {
  return (
    <div>
    <label htmlFor={`${name}`} className="block text-sm/6 font-medium text-gray-900">
      {label}
    </label>
    <div className="mt-2">
      <input
      {...register(`${name}`,{required:true})}
        id={`${name}`}
        name={`${name}`}
        type={type}
        
        autoComplete="name"
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
      {errors[`${name}`] && <span className="text-red-600 text-sm">{label} is required</span>}
    </div>
  </div>
  )
}
