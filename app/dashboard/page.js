"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"

const page = () => {

    const { data: session } = useSession();

    if (!session) {
        const router = useRouter();
        router.push('/login')
    }

    return (
        <div className="h-[125vh] w-full bg-slate-950">
            <div className="h-[125vh] absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_60px]">
                <div className="w-full h-80 flex flex-col items-center mt-[7rem] text-gray-300">
                    <h1 className='md:text-2xl pb-10 text-lg tracking-wide font-semibold'>Wellcome to your Dashboard</h1>
                    <div className="flex w-[40vw] mt-2">
                        <div className="w-full flex flex-col">
                            <label className="font-semibold leading-none text-gray-300">Name</label>
                            <input placeholder='Enter your name' type="text" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                            <label className="font-semibold mt-3 leading-none text-gray-300">Username</label>
                            <input placeholder='Enter your username' type="text" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                            <label className="font-semibold mt-3 leading-none text-gray-300">Email</label>
                            <input placeholder='Enter your email' type="text" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                            <label className="font-semibold mt-3 leading-none text-gray-300">Razorpay ID</label>
                            <input placeholder='Enter your razorpay id' type="text" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                            <label className="font-semibold mt-3 leading-none text-gray-300">Razorpay secret</label>
                            <input placeholder='Enter your razorpay secret' type="text" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                            <label className="block mb-2 text-sm font-medium mt-3 text-gray-300 dark:text-white" htmlFor="file_input">Upload profile photo</label>
                            <input className="block w-full text-sm text-gray-300 file:bg-[#2d3847] file:text-gray-300 file:px-3 file:py-3 file:rounded-l-lg file:border-0 rounded-lg cursor-pointer bg-[#1f2937]" id="file_input" type="file" />
                            <label className="block mb-2 text-sm font-medium mt-3 text-gray-300 dark:text-white" htmlFor="file_input">Upload cover photo</label>
                            <input className="block w-full text-sm text-gray-300 file:bg-[#2d3847] file:text-gray-300 file:px-3 file:py-3 file:rounded-l-lg file:border-0 rounded-lg cursor-pointer bg-[#1f2937]" id="file_input" type="file" />
                            <div className="paybtn w-full mt-5">
                                <button type="button" className="text-white w-full cursor-pointer bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-8 py-2.5 text-center">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
