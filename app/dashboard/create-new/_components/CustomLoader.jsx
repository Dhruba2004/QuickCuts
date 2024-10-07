import React from 'react'
import Image from 'next/image'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

function CustomLoader({loading}) {
  return (
    <AlertDialog open={loading}>
  <AlertDialogContent className="bg-white">
    <div className='bg-white flex flex-col items-center my-2 justify-center '>
      <Image src={'/progress.gif'} width={100} height={100}/>
      <h2 className='text-black'>Generating your video... Do not refresh</h2>
    </div>
  </AlertDialogContent>
</AlertDialog>

    
  )
}

export default CustomLoader