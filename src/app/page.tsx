"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <BackgroundBeamsWithCollision>
      <div className="flex justify-center items-center flex-col">
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.95,
            filter:"blur(10px)",
          }}
          animate={{
            opacity:1,
            scale:1,
            filter:"blur(0px)",
          }}
          transition={{duration:0.5, delay:0.1}}
          className="text-4xl sm:text-6xl font-extrabold text-purple-600"
        >
          Imagi<span className="text-white">Crea</span>
        </motion.h1>
        <motion.p
        initial={{
          opacity: 0,
          scale: 0.95,
          filter:"blur(10px)",
        }}
        animate={{
          opacity:1,
          scale:1,
          filter:"blur(0px)",
        }}
        transition={{duration:0.5, delay:0.35}} className=" p-1 text-center text-white/50 ">
        Turn your text into images with our free AI-powered too
        </motion.p>
        <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          filter:"blur(10px)",
        }}
        animate={{
          opacity:1,
          scale:1,
          filter:"blur(0px)",
        }}
        transition={{duration:0.5, delay:0.55}}>
        <Link href="/create">
        <Button className="mt-3 font-bold p-5 cursor-pointer">Start Creating</Button>
        </Link>
        </motion.div>
      </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
