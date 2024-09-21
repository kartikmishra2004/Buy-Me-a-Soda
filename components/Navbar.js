"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/app/images/logo.svg";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 20) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const { data: session, status } = useSession();
    if (session) {
        return (
            <nav className={`${navbar ? 'bg-[#111827]' : 'bg-[#11182700]'} z-10 fixed w-full`}>
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-[4.5rem] items-center justify-between">
                        <div className="flex-1 lg:flex lg:items-center lg:gap-12">
                            <Link href={'/'} className="flex text-lg font-bold gap-1 text-gray-300">
                                <Image className="lg:w-36 w-[7rem]" priority={true} src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="lg:flex lg:items-center lg:gap-4">
                            <nav aria-label="Global" className="hidden lg:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <Link href={'/'} className="text-gray-400 transition hover:text-gray-50/75">Home</Link>
                                    </li>
                                    <li>
                                        <a className="text-gray-400 transition hover:text-gray-50/75" href="/">About</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-400 transition hover:text-gray-50/75" href="/">Contact</a>
                                    </li>
                                    <li>
                                        <Link href={'/dashboard'} className="text-gray-400 transition hover:text-gray-50/75"><span><Image className="rounded-full border border-gray-300" width={35} height={35} priority={true} src={session.user.image} alt="pfp" /></span></Link>
                                    </li>
                                    <li>
                                        <button onClick={handleDropdown} className="text-gray-400 bg-[#1f2937] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">Wellcome @{session.user.name} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                        </button>
                                        {showDropdown && <div onBlur={handleDropdown} id="dropdown" className="z-10 absolute mt-1 bg-[#111827] border border-gray-600 rounded-lg shadow w-44">
                                            <ul className="py-2 text-sm text-gray-300">
                                                <li>
                                                    <Link onClick={handleDropdown} href={'/dashboard'} className="block px-4 py-2 hover:bg-gray-800">Dashboard</Link>
                                                </li>
                                                <li>
                                                    <Link onClick={handleDropdown} href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-800">Your Page</Link>
                                                </li>
                                                <li>
                                                    <button onClick={() => { handleDropdown(); signOut() }} className="block px-4 py-2 w-full text-start hover:bg-gray-800 text-red-500">Logout</button>
                                                </li>
                                            </ul>
                                        </div>}
                                    </li>
                                </ul>
                            </nav>
                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <button onClick={() => signOut()} className="text-white cursor-pointer bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">Logout</button>
                                </div>
                                <div className="flex justify-center items-center lg:hidden">
                                    <button className="">
                                        <Image className="rounded-full border border-gray-300" width={35} height={35} priority={true} src={session.user.image} alt="pfp" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
    return (
        <nav className={`${navbar ? 'bg-[#111827]' : 'bg-[#11182700]'} z-10 fixed w-full`}>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-[4.5rem] items-center justify-between">
                    <div className="flex-1 lg:flex lg:items-center lg:gap-12">
                        <Link href={'/'} className="flex text-lg font-bold gap-1 text-gray-300">
                            <Image className="lg:w-36 w-[7rem]" priority={true} src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="lg:flex lg:items-center lg:gap-12">
                        <nav aria-label="Global" className="hidden lg:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link href={'/'} className="text-gray-400 transition hover:text-gray-50/75">Home</Link>
                                </li>
                                <li>
                                    <a className="text-gray-400 transition hover:text-gray-50/75" href="/">About</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 transition hover:text-gray-50/75" href="/">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <Link href={"/login"} className="text-white cursor-pointer bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">Login</Link>
                            </div>
                            <div className="block lg:hidden">
                                <button className="rounded bg-gray-300 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
