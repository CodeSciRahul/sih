"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {SubmitHandler, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { z} from 'zod'


const schema=z.object({
  name:z.string().min(1,{message: "Name is Required"}).max(20),
  email:z.string().email(),
  password:z.string().min(8),
})

type FormFields=z.infer<typeof schema>;

// type FormFields={
//   name:String
//   email:String
//   password:String
// }

const Register = () => {
  const [showPassowrd, setshowPassowrd] = useState(true);
  const {register,handleSubmit,formState:{errors,isSubmitting} }=useForm<FormFields>({resolver: zodResolver(schema),});

const onSubmit:SubmitHandler<FormFields>= async (data)=>{
  await new Promise((resolve)=>setTimeout(resolve,2000));
  console.log(data);
  
}
  return (
    <>
      <div id="container" className="flex flex-col items-center  w-full ">
        <h1 className="font-bold mb-7">Sign Up</h1>

        <form action=""  onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-7">
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="name" className="text-base">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              
              {...register('name')}
              placeholder="Enter Name"
              className="w-[400px] text-lg placeholder:text-base"
            />
            {errors.name && <div className="text-red-700 text-lg">{errors.name.message} </div>}
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="email" className="text-base">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              {...register('email')}
              placeholder="Email"
              className="w-[400px] text-lg placeholder:text-base"
            />
            {errors.email && <div className="text-red-700 text-lg">{errors.email.message}</div>}
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="password" className="text-base">Password</Label>
            <div className="flex">
              <Input
                type={showPassowrd ? "password" : "text"}
                id="password"
                {...register('password')}
                placeholder="password "
                className=" text-lg placeholder:text-base "
              />

              <Button
                onClick={(e) => {
                  setshowPassowrd(!showPassowrd);
                  e.preventDefault();
                }}
                className="bg-blue-600 hover:bg-blue-600  w-10 p-1 flex items-center justify-center rounded-r text-white font-bold"
                >
                {showPassowrd ?  <EyeOffIcon />: <EyeIcon /> }
              </Button>
            </div>
                {errors.password && <div className="text-red-700 text-lg">{errors.password.message}</div>}
          </div>

          <Button
          type="submit"
            className="bg-blue-600 hover:bg-blue-700 w-full text-lg mt-7 font-semibold
              "
              disabled={isSubmitting}
          >
          {isSubmitting?"...Loading":"Sign Up"}  
          </Button>
          <Button
            variant={"outline"}
            className="w-full text-lg  mb-5 font-semibold"
          >
            Sign Up using Google{" "}
          </Button>
        </form>
        <p className="text-lg italic">
          Already Have an Account ?
          <Link href="/auth/login" className="underline">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
