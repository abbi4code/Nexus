"use client"
import zod from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';

import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FileUpload from "../fileUpload";
// import {}from "@/components/ui/"

const formSchema = zod.object({
    name: zod.string().min(1, {message: "Server name is req"}),
    imageUrl: zod.string().min(1, {message: "Server image is req"})
})


const InitialModal = () => {
    //err
    const [isMounted,setIsMounted] = useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])
    
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
             name:"",
             imageUrl:""
        }
    })

    const isLoading = form.formState.isSubmitting
    const onSubmit = async (values: zod.infer<typeof formSchema>)=>{
        console.log(values)
    }
    if (!isMounted) {
      return null;
    }
  return (
    <Dialog open>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogHeader className="font-bold text-2xl text-center">
            Helllo from server
          </DialogHeader>
          <DialogDescription className="text-center text-zinc-500">
            you can change it anytime give this a name and a image
          </DialogDescription>
        </DialogHeader>
        {/* we pass that above form as a props to this  */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <div className="flex items-center justify-center text-center">
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FileUpload
                          endpoint={"imageUploader"}
                          onChange={field.onChange}
                          value={field.value}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Server name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 "
                        placeholder="Enter Server Name"
                        {...field}
                      />
                    </FormControl>
                    {/* This will show msg error from zodschema */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button variant={"primary"} disabled={isLoading}>
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default InitialModal
