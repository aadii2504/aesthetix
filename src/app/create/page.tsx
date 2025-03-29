import { Input } from '@/components/ui/input'
import React from 'react'

const page = () => {
  return (
    <div className='w-full p-3 h-dvh flex  items-center justify-start pt-[72px] flex-col'>
       <div className='w-full border border-red-500 p-3' >
             <h1 className='text-center font-bold text-white text-3xl'>Create</h1>
             <p>Say hello to ImagiCrea the glow-up your ideas deserve! 🌈💥 Turn plain words into jaw-dropping visuals with our dope AI. Just drop a vibe, describe your scene, and BOOM magic happens. From dreamy aesthetics to crazy cool art, we've got you covered. Let’s flex your creativity and make some scroll-stopping content! 🚀🎨</p>
       </div>
       <div className='flex border border-purple-300 w-full gap-3 h-full'>
          <div className="__form flex-[2] border border-blue-300 flex justify-start items-center flex-col">
            <p className='text-left'>Drop your vibe and let the magic flow turn your words into stunning visuals!</p>
            <Input placeholder='Cat Sitting On A Sofa.....'/>
          </div>
          <div className="__output flex-[1] border border-b-amber-400"></div>
       </div>
    </div>
  )
}

export default page
