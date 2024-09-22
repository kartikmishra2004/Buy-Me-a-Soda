"use client"
import Image from 'next/image'
import pfp from "@/app/images/pfp.png"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { fetch5payments, fetchpayments, fetchuser, initiate } from '@/actions/useractions'
// import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


const Paymentpage = ({ username }) => {

    // const { data: session } = useSession();

    const [paymentForm, setpaymentForm] = useState({});
    const [currentUser, setcurrentUser] = useState({});
    const [payments, setpayments] = useState([]);
    const [top5Payments, setTop5Payments] = useState([]);

    const SearchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (SearchParams.get("paymentdone") === "true") {
            toast.success('Payment has been made!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            router.push(`/${username}`)
        }
    }, []);

    const handleChange = (e) => {
        setpaymentForm({
            ...paymentForm,
            [e.target.name]: e.target.value,
        });
    }

    const getData = async () => {
        let u = await fetchuser(username);
        setcurrentUser(u);
        let dbPayments = await fetchpayments(username);
        setpayments(dbPayments);

        let top5payments = await fetch5payments(username);
        setTop5Payments(top5payments);
    }

    const pay = async (amount) => {
        // Get the order ID
        let a = await initiate(amount, username, paymentForm);
        let orderId = a.id;

        var options = {
            "key": currentUser.razorpayid,
            "amount": amount,
            "currency": "INR",
            "name": "Buy Me a Soda",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options)
        rzp1.open();
    }

    const handleChangeAmount = (e) => {
        setpaymentForm({
            ...paymentForm,
            amount: [e.target.value]
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
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className="h-[160vh] w-full bg-slate-950">
                <div className="h-[160vh] absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_60px]">
                    <div className="w-full relative mt-[4.5rem] h-[40vh] flex justify-center items-center">
                        <img className='object-cover h-[40vh] w-full' src={currentUser.coverPhoto ? currentUser.coverPhoto : 'https://res.cloudinary.com/dlwudcsu1/image/upload/v1727005536/5e29d41549842929195680_aa8nre.jpg'} alt="..." />
                        <div className="pfp absolute w-[150px] h-[150px] flex rounded-full border-2 border-gray-300 -bottom-[75px]"><img className='rounded-full object-cover' width={150} height={150} src={currentUser.profilePhoto ? currentUser.profilePhoto : 'https://res.cloudinary.com/dlwudcsu1/image/upload/v1723743051/Picsart_24-08-15_23-00-10-662_bix7iy.png'} alt=''></img></div>
                    </div>
                    <div className="details w-full flex justify-center items-center flex-col text-center gap-2 pt-10 h-[30vh]">
                        <h1 className='text-xl font-bold'>
                            @{username}
                        </h1>
                        <p className='text-gray-400 text-sm'>
                            Lets help {currentUser.name ? currentUser.name : username} to get a soda!<br />
                            {payments.length} payments | ₹{payments.reduce((a, b) => a + b.amount / 100, 0)} raised
                        </p>
                    </div>
                    <div className="payment flex justify-center items-center w-full h-[70vh] gap-5">
                        <div className="supporters h-[70vh] w-1/3 p-9 flex rounded-lg flex-col items-center overflow-auto bg-[#111827]">
                            {/* Show list of all the supporters as a leaderboard */}
                            <h2 className="text-2xl my-4 font-semibold">Top Supporters</h2>
                            <ul className='flex flex-col gap-2 items-start'>
                                {top5Payments.length > 0 ? (top5Payments.map((item, index) => (<li key={index} className='my-2 flex justify-center items-center gap-2'>
                                    <Image src={pfp} className='w-8' alt='pfp' priority /><p>{item.name} donated <span className='font-bold'>₹{Number.parseInt(item.amount) / 100}</span> with a message "{item.message}"</p>
                                </li>))) : <h1 className='my-2 flex justify-center items-center gap-2'>There are no payments to this page!!</h1>}
                            </ul>
                        </div>
                        <div className="makePayment justify-center h-[70vh] w-1/3 p-9 gap-3 flex rounded-lg flex-col items-center bg-[#111827]">
                            <h2 className="text-xl mb-4 font-semibold">Support {username}</h2>
                            <div className="flex w-full items-end mt-2">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none text-gray-300">Name</label>
                                    <input name='name' onChange={handleChange} value={paymentForm.name} placeholder='Enter your name' type="text" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                                    <label className="font-semibold mt-2 leading-none text-gray-300">Messsage</label>
                                    <textarea name='message' onChange={handleChange} value={paymentForm.message} placeholder='Enter your message' className="leading-none h-[5rem] resize-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                                    <label className="font-semibold mt-2 leading-none text-gray-300">Amount</label>
                                    <input name='amount' onChange={handleChange} value={paymentForm.amount} placeholder='example: ₹100' type="number" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                                </div>
                            </div>
                            <div className="amountBtn flex w-full">
                                <button type="button" className="text-gray-300 bg-[#1f2937] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" value={100} onClick={handleChangeAmount}>₹100</button>
                                <button type="button" className="text-gray-300 bg-[#1f2937] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" value={200} onClick={handleChangeAmount}>₹200</button>
                                <button type="button" className="text-gray-300 bg-[#1f2937] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" value={300} onClick={handleChangeAmount}>₹300</button>
                            </div>
                            <div className="paybtn w-full">
                                <button onClick={() => pay(Number.parseInt(paymentForm.amount) * 100)} type="button" className={`${(!paymentForm.name || !paymentForm.message || !paymentForm.amount) ? 'text-gray-500' : 'text-white'} w-full ${(!paymentForm.name || !paymentForm.message || !paymentForm.amount) ? '' : 'cursor-pointer'} bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-8 py-2.5 text-center disabled:from-[#1f2937] disabled:via-[#1f2937] disabled:to-[#1f2937]`} disabled={!paymentForm.name || !paymentForm.message || !paymentForm.amount}>Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paymentpage
