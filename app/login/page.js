"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import logo from "@/public/logo.svg";
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';

const Login = () => {

    const { data: session } = useSession();

    const router = useRouter();
    useEffect(() => {
        document.title = "Login - Buy Me a Soda";
        if (session) {
            router.push('/dashboard')
        }
    });

    return (
        <div className="h-screen w-full bg-slate-950">
            <div className="h-screen absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_60px]">
                <div className='w-full flex justify-center items-center h-[80vh] mt-[5rem]'>
                    <div className="grid place-items-center justify-center items-center">
                        <div className="relative container m-auto px-6">
                            <div className="m-auto lg:w-[25vw]">
                                <div className="rounded-xl bg-[#111827] shadow-xl">
                                    <div className="lg:p-8 p-4">
                                        <div className="space-y-4 flex flex-col justify-center items-center">
                                            <Image className="lg:w-44 w-40" alt="" src={logo} priority={true}></Image>
                                            <h2 className="mb-8 text-xl text-center text-gray-300 font-semibold">Wellcome! Signup/Login to Continue.
                                            </h2>
                                        </div>
                                        <div className="mt-10 grid space-y-4">
                                            <button
                                                className="group hidden h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400">
                                                <div className="relative flex items-center space-x-4 justify-center">
                                                    <Image priority={true} width={30} height={30} src="https://www.svgrepo.com/show/475656/google-color.svg"
                                                        className="absolute left-0 w-5" alt="google logo" />
                                                    <span
                                                        onClick={() => { signIn('google') }}
                                                        className="block w-max font-semibold tracking-wide text-gray-300 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                                        with Google
                                                    </span>
                                                </div>
                                            </button>
                                            <button
                                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400">
                                                <div className="relative flex items-center space-x-4 justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                        className="absolute left-0 w-5 text-gray-300" viewBox="0 0 16 16">
                                                        <path
                                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                                        </path>
                                                    </svg>
                                                    <span
                                                        onClick={() => { signIn('github') }}
                                                        className="block w-max font-semibold tracking-wide text-gray-300 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                                        with Github
                                                    </span>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="mt-6 space-y-4 py-3 text-gray-400 text-center">
                                            <p className="text-xs">By proceeding, you agree to our <Link className='underline' href={'/signup'}>Terms of Use</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login