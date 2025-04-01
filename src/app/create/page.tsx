"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { toast } from "sonner"


const formSchema = z.object({
  prompt: z.string().min(7, {
    message: "Prompt must  be atleast 7 characterrs long! try again :)",
  }),
});

export default function Page() {
  const [outputImg, setOutputImg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true)
      const response = await fetch("/api/image", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if(response.status === 200) {
        setOutputImg(data.url);
      } else {
        console.log(data.error);
        toast(data.error)

      }
    } catch (error) {
      console.error(error);
    } finally{
      setLoading(false)
    }
  }

  return (
    <div className="w-full p-3 min-h-dvh flex  items-center justify-start pt-[72px] flex-col">
      <div className="w-full p-3">
        <h1 className="text-center font-bold text-white text-3xl">Create</h1>
        <p>
          Say hello to ImagiCrea the glow-up your ideas deserve! 🌈💥 Turn plain
          words into jaw-dropping visuals with our dope AI. Just drop a vibe,
          describe your scene, and BOOM magic happens. From dreamy aesthetics to
          crazy cool art, we've got you covered. Lets flex your creativity and
          make some scroll-stopping content! 🚀🎨
        </p>
      </div>
      <div className="flex w-full gap-3 h-[calc(100dvh-200px)] md:flex-row flex-col">
        <div className="__form flex-[2] gap-3 flex justify-center items-center flex-col">
          <p className="text-center text-sm text-white/80 w-full">
            Drop your vibe and let the magic flow turn your words into stunning
            visuals!
          </p>
          <div className="flex gap-2 w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex gap-3 justify-center"
              >
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className=" w-full max-w-full items-center flex justify-center lg:max-w-[70%]">
                      <FormControl>
                        <Input
                          placeholder="Cat Sitting On A Sofa....."
                          className="w-full transition-all border-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button loading={loading} type="submit" className="cursor-pointer">Generate</Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="__output min-h-[300px] lg:min-h-full lg:h-full flex-[1] borders bg-white/7 rounded-lg relative overflow-hidden">
          {outputImg ? (
            <Image
              alt="output"
              className="w-full h-full object-contain"
              src={outputImg}
              width={300}
              height={300}
            />
          ) : <><div className="w-full h-full flex justify-center items-center text-white/70 text-center p-3">
                Enter Your prompt and hit Generate 
            </div></>}
        </div>
      </div>
    </div>
  );
}
