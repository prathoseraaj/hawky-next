"use client";
import Authform from "@/components/Authform";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  const handleSignIn = () => {
    console.log("Sign in sucessfully.");
    router.push("/");
  };

  return (
    <Authform type="signin" 
              onsumbit={handleSignIn} 
              showForgotPassword={true} 
    />
  );
};

export default page;
