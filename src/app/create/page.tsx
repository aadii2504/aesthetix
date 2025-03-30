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

const formSchema = z.object({
  prompt: z.string().min(7, {message: "Prompt must  be atleast 7 characterrs long! try again :)"}),
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
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
                    <FormItem className=" w-full items-center flex justify-center max-w-[70%]">
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
                <Button type="submit">Generate</Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="__output flex-[1] borders bg-white/7 rounded-lg"></div>
      </div>
    </div>
  );
}
