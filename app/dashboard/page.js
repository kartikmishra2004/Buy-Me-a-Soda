"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"

const page = () => {
    
    const {data: session} = useSession();

    if(!session){
        const router = useRouter();
        router.push('/login')
    }

    return (
        <div className="h-screen w-full bg-slate-950">
            <div className="h-screen absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_60px]">
                <div className="w-full h-80 flex justify-center items-center text-gray-300">Dashboard</div>
            </div>
        </div>
    )
}

export default page
