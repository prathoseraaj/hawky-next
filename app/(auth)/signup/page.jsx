"use client";
import Authform from "@/components/Authform";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const handleSignUp = () => {
    console.log("SignUp sucessfully.");
  };

  return (
    <Authform
      type="signup"
      onsumbit={handleSignUp}
      showForgotPassword={false}
    />
  );
};

export default page;
