"use client"

import React, { useEffect, useState } from 'react'

export default function Page() {
    const [loading ,setLoading] = useState<boolean>(true)

    const fetchPosts = async ()=> {
        try {
            setLoading(true);
        const response =await fetch("/api/image")
        const data =  await response.json();
        console.log(data);
        } catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
       };

    useEffect(()=> {
       fetchPosts();
    },[])
  return (
    <div className='w-full min-h-dvh border border-pink-400 flex justify-center items-center p-3 pt-[72px]'>
     {loading ? "loading" : "Page"}
    </div>
  )
}
