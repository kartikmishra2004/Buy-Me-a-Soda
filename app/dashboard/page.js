"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"
import { fetchuser, updateprofile } from '@/actions/useractions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback } from 'react';


const Dashboard = () => {

    const { data: session, update } = useSession();
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        username: '',
        email: '',
        razorpayid: '',
        razorpaysecret: '',
        profilePhoto: '',
        coverPhoto: '',
    });


    const getData = useCallback(async () => {
        let u = await fetchuser(session.user.name);
        setForm(u);
    }, [session]);
    
    useEffect(() => {
        document.title = "Dashboard - Buy Me a Soda";
        if (!session) {
            router.push('/login');
        } else {
            getData();
        }
    }, [router, session, getData]);
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        update();
        let a = await updateprofile(e, session.user.name);
        toast.success('Profile updated!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <>
            <ToastContainer
                className='toast-class'
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="h-[125vh] w-full bg-slate-950">
                <div className="h-[125vh] absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_60px]">
                    <div className="w-full h-80 flex flex-col items-center mt-[7rem] text-gray-300">
                        <h1 className='md:text-2xl pb-10 text-lg tracking-wide font-semibold'>Wellcome to your Dashboard</h1>
                        <div className="flex w-[40vw] mt-2">
                            <form className="w-full flex flex-col" action={handleSubmit}>
                                <label htmlFor='name' className="font-semibold leading-none text-gray-300">Name</label>
                                <input autoComplete="off" id='name' name='name' value={form.name} onChange={handleChange} placeholder='Enter your name' type="text" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                                <label htmlFor='username' className="font-semibold mt-3 leading-none text-gray-300">Username</label>
                                <input autoComplete="off" id='username' name='username' value={form.username} onChange={handleChange} placeholder='Enter your username' type="text" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                                <label htmlFor='email' className="font-semibold mt-3 leading-none text-gray-300">Email</label>
                                <input autoComplete="off" id='email' name='email' value={form.email} onChange={handleChange} placeholder='Enter your email' type="text" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                                <label htmlFor='razorpayid' className="font-semibold mt-3 leading-none text-gray-300">Razorpay ID</label>
                                <input autoComplete="off" id='razorpayid' name='razorpayid' value={form.razorpayid} onChange={handleChange} placeholder='Enter your razorpay id' type="text" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                                <label htmlFor='razorpaysecret' className="font-semibold mt-3 leading-none text-gray-300">Razorpay secret</label>
                                <input autoComplete="off" id='razorpaysecret' name='razorpaysecret' value={form.razorpaysecret} onChange={handleChange} placeholder='Enter your razorpay secret' type="text" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />

                                <label className="block mb-2 text-sm font-medium mt-3 text-gray-300 dark:text-white" htmlFor="profilephoto">Upload profile photo</label>
                                <input autoComplete="off" name='profilePhoto' value={form.profilePhoto} onChange={handleChange} className="leading-none text-gray-300 p-2.5 border-0 bg-gray-800 rounded-lg" id="profilephoto" type="text" />
                                <label className="block mb-2 text-sm font-medium mt-3 text-gray-300 dark:text-white" htmlFor="coverphoto">Upload cover photo</label>
                                <input autoComplete="off" name='coverPhoto' value={form.coverPhoto} onChange={handleChange} className="leading-none text-gray-300 p-2.5 border-0 bg-gray-800 rounded-lg" id="coverphoto" type="text" />
                                <div className="paybtn w-full mt-5">
                                    <button type="submit" className="text-white w-full cursor-pointer bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-8 py-2.5 text-center">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
