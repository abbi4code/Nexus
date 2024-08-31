"use client"
import React from 'react'

interface FileUploadprops {
  onChange: (url: string) => void;
  value: string;
  endpoint: "imageUploader" | "messageFile";
}

const FileUpload = ({onChange,value,endpoint}:FileUploadprops) => {
  return (
    <div>
      hi there
    </div>
  )
}

export default FileUpload
