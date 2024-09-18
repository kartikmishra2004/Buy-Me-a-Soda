"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/app/images/logo.svg";
import Link from "next/link";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

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

    return (
        <nav className={`${navbar ? 'bg-[#111827]' : 'bg-[#11182700]'} z-10 fixed w-full`}>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-[4.5rem] items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="flex text-lg font-bold gap-1 text-gray-300" href="/">
                            <Image className="md:w-36 w-[7rem]" priority={true} src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-400 transition hover:text-gray-50/75" href="/">About</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 transition hover:text-gray-50/75" href="/">Careers</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 transition hover:text-gray-50/75" href="/">History</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 transition hover:text-gray-50/75" href="/">Services</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 transition hover:text-gray-50/75" href="/">Projects</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 transition hover:text-gray-50/75" href="/">Blog</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a className="text-white cursor-pointer bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">Login</a>
                                <div className="hidden sm:flex">
                                    <a className="rounded-lg bg-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700" href="/">
                                        Signup
                                    </a>
                                </div>
                            </div>
                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
};

export default Navbar;
