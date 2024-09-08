"use client"

import { useEffect, useState } from "react"
import CreateServerModal from "../modals/createServerModal"

export const ModalProvider= ({children}:{children: React.ReactNode}) =>{
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted){
        return null;
    }
    return (
        <>
        <CreateServerModal/>
        </>
    )

}