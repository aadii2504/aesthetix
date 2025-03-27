"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";
import { Avatar ,AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
  const { data: session } = useSession();
  return (
    <div className="fixed top-0 w-full h-[60px] bg-black border-b border-white/60  p-3 flex justify-between items-center z-10">
      <Link href="/">
        <h2 className="font-bold text-2xl">ImagiCrea</h2>
      </Link>
      {!session ? (
        <div className="__menu">
          <Button onClick={() => signIn("google")}>Login</Button>
        </div>
      ) : (
        <Avatar>
          <AvatarImage src={session.user?.image || ""} /> 
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
