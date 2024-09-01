"use client"
import React from 'react'
import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css"
import { X } from 'lucide-react';
import Image from 'next/image';

interface FileUploadprops {
  onChange: (url: string) => void;
  value: string;
  endpoint: "imageUploader" | "messageFile";
}

const FileUpload = ({endpoint,value,onChange}:FileUploadprops) => {
  // console.log("value",value)
  //pop will take the last element of arr created by split
  //this value is the uploaded image url 
  const filetype = value?.split(".").pop()
  if(value && filetype !== "pdf"){
    return (
      <div className='relative h-20 w-20'>
        <Image fill src={value} alt="Upload" className='rounded-full'/>
        {/* creating a button to remove the image */}
        <button onClick={()=>onChange("")} type="button" className='bg-red-500 rounded-full absolute top-0 right-0  shadow-sm p-1'><X className='h-3 w-3'/></button>
      </div>
    )
  }
  return (
    <UploadDropzone endpoint={endpoint} onClientUploadComplete={(res)=>{
      onChange(res?.[0].url)   }} onUploadError={(error:Error)=> console.log(error)}/>
  )
}

export default FileUpload
