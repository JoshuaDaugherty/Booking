"use client"
import { type RegisterInputsProps } from "@/types/types";
import Link from "next/link";
import {useForm} from "react-hook-form"
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import {useState} from "react";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";


export default function RegisterForm({role = "USER"}:{role?:UserRole}) {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
     reset,
    formState: {errors},
  } = useForm<RegisterInputsProps>();
  async function onSubmit (data: RegisterInputsProps){
    // console.log(data)
    setIsLoading(true);
    
    setIsLoading(false)
    
    data.role= role;
    try {
      const user = await createUser(data);
      if(user && user.status===200) {
        console.log("User Created Successfully")
        reset();
        setIsLoading(false);
        toast.success("User Created Successfully");
        console.log(user.data)
        
      } 
      else{
        console.log(user.error)
      }
    } catch(error){
      console.log(error)
    }
  }



  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create New Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <TextInput label="Full Name" register={register} name="fullName" errors={errors}/>

           <TextInput label="Email Address" register={register} name="email" type="email" errors={errors}/>

           <TextInput label="Phone Number" register={register} name="phone" type="tel" errors={errors}/>

           <TextInput label="Password" register={register} name="password" type="password" errors={errors}/>


            <div>
            <SubmitButton title="Create Account" isLoading={isLoading} loadingTitle="Creating please wait..."/>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already Have an Account?{' '}
            <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
  )
}
