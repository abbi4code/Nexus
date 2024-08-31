"use client"
import zod from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
// import {}from "@/components/ui/"

const formSchema = zod.object({
    name: zod.string().min(1, {message: "Server name is req"}),
    imageUrl: zod.string().min(1, {message: "Server image is req"})
})


const InitialModal = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
             name:"",
             imageUrl:""
        }
    })

    const idLoading = form.formState.isSubmitting
    const onSubmit = async (values: zod.infer<typeof formSchema>)=>{
        console.log(values)
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
            
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default InitialModal
