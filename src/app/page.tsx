"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="">
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
          className="text-4xl sm:text-6xl font-extrabold"
        >
          Aesthetix
        </motion.h1>
      </div>
    </div>
  );
}
