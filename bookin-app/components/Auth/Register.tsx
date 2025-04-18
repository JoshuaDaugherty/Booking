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
import { useRouter } from "next/navigation";


export default function RegisterWithBg({role = "USER"}:{role?:UserRole}) {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
     reset,
    formState: {errors},
  } = useForm<RegisterInputsProps>();
  const router = useRouter()
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
        router.push(`/verify-account/${user.data?.id}`)
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
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>

     

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your information to create an account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
            <TextInput label="Full Name" register={register} name="fullName" errors={errors} placeholder="eg John Doe"/>
          
        </div>

        <div className="grid gap-2">
            <TextInput label="Email Address" register={register} name="email" errors={errors} placeholder="JohnDoe@google.com"/>
          
        </div>

        <div className="grid gap-2">
            <TextInput label="Phone Number" register={register} type="tel" name="phone" errors={errors} placeholder=""/>
          
        </div>

        <div className="grid gap-2">
         
          <TextInput label="Password" register={register} name="password" type="password" errors={errors} placeholder="*****" />
        </div>
        <SubmitButton  title="Login" isLoading={isLoading} loadingTitle="Creating your account in please wait..."/>
       
       
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Register
        </Link>
      </div>
      
    </form>
  )
}
