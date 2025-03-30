"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Page = () => {
  const [outputImg , setOutputImg] = useState<string|null>(null)
  const [inputPrompt , setInputPrompt] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <div className="w-full p-3 h-dvh flex  items-center justify-start pt-[72px] flex-col">
      <div className="w-full border border-red-500 p-3">
        <h1 className="text-center font-bold text-white text-3xl">Create</h1>
        <p>
          Say hello to ImagiCrea the glow-up your ideas deserve! 🌈💥 Turn plain
          words into jaw-dropping visuals with our dope AI. Just drop a vibe,
          describe your scene, and BOOM magic happens. From dreamy aesthetics to
          crazy cool art, we've got you covered. Let’s flex your creativity and
          make some scroll-stopping content! 🚀🎨
        </p>
      </div>
      <div className="flex border border-purple-300 w-full gap-3 h-full">
        <div className="__form flex-[2] gap-3 border border-blue-300 flex justify-center items-center flex-col">
          <p className="text-left text-sm text-white/80">
            Drop your vibe and let the magic flow turn your words into stunning
            visuals!
          </p>
          <div className="flex gap-2"></div>
          <Input
            placeholder="Cat Sitting On A Sofa....."
            className="max-w-[70%] transition-all"
          />
          <Button>Generate</Button>
        </div>
        <div className="__output flex-[1] borders bg-white/7 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Page;
