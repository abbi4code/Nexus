import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server";

//go for docs actually 
const f = createUploadthing();
// there there will be our own auth from clerk
// const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function
const authHandler = ()=>{
    //this userid will contains a obj info about the user
    const {userId }= auth();
    if(!userId) throw new Error("Unauthorized")
    return {userId: userId}

}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  //take it as server image
  //imageuploader and msgfile are the fileroutes that you can visit
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
   .middleware(()=> authHandler())
   .onUploadComplete(()=>{}),
   //creating file system for msg (like what type msg we want to accept)
   messageFile: f(["image","pdf"])
   .middleware(()=>authHandler())
   .onUploadComplete(()=>{})
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
