"use client"
import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
import SubmitButton from "../FormInputs/SubmitButton"
import {useState} from "react"

import TextInput from "../FormInputs/TextInput";
import {useForm} from "react-hook-form"
import { LoginInputsProps } from "@/types/types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {signIn} from "next-auth/react"
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import Link from "next/link"

export default function Login({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
     const [isLoading, setIsLoading] = useState(false)

     const [showNotification, setShowNotification] = useState(false);
     const router = useRouter()
      const {
        register,
        handleSubmit,
         reset,
        formState: {errors},
      } = useForm<LoginInputsProps>();
      async function onSubmit (data: LoginInputsProps){
        try {
          setIsLoading(true);
          console.log("Attempting to sign in with credentials:", data);
          const loginData = await signIn("credentials", {
            ...data,
            redirect: false,
          });
          console.log("SignIn response:", loginData);
          if (loginData?.error) {
            setIsLoading(false);
            toast.error("Sign-in error: Check your credentials");
            setShowNotification(true);
          } else {
            // Sign-in was successful
            setShowNotification(false);
            reset();
            setIsLoading(false);
            toast.success("Login Successful");
            router.push("/Dashboard");
          }
        } catch (error) {
          setIsLoading(false);
          console.error("Network Error:", error);
          toast.error("Its seems something is wrong with your Network");
        }
      }
  
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit(onSubmit)}>

      {showNotification && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="font-medium">Sign-in error!</span> Please Check
              your credentials
            </Alert>
          )}

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <TextInput label="Email Address" register={register} name="email" type="email" errors={errors} placeholder="Eg johndoe@gmail.com"/>
          
        </div>
        <div className="grid gap-2">
         
          <TextInput label="Password" register={register} page="login" name="password" type="password" errors={errors} placeholder="*****" />
        </div>
        <SubmitButton  title="Login" isLoading={isLoading} loadingTitle="Logging in please wait..."/>
       
       
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/register " className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
      
    </form>
  )
}
