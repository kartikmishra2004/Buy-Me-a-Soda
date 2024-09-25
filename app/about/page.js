import React from 'react'

const About = () => {
    return (
        <div className="lg:h-[115vh] h-[140vh] text-gray-300 w-full bg-slate-950">
            <div className="lg:h-[115vh] h-[140vh] absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_60px]">
                <div className='w-full flex flex-col items-center h-[80vh] mt-[5rem]'>
                    <div className="lg:w-[60%] w-full flex flex-col items-center lg:block">
                        <h1 className='text-2xl font-semibold pt-10'>About Us</h1>
                        <p className='w-[80%] text-gray-400 mt-5'>Welcome to <span className='font-bold'>Buy Me a Soda</span>! We&apos;re here to make a difference by empowering individuals and creators to achieve their goals. Whether you’re looking to support a cause, back a project, or help someone pursue their dreams, our platform offers an easy and secure way to connect and contribute.
                            <br /><br />
                            Our mission is simple: <span className='font-bold'>to enable creators and entrepreneurs to fund their ideas and aspirations through direct support.</span> We believe that small contributions can lead to big changes, and our platform bridges the gap between those with ambition and those who want to make a positive impact.</p>
                        <br /><br />
                        <div className="w-[80%] lg:w-full text-gray-400">
                            <div className="line h-[1px] bg-gray-700"></div>
                            <h1 className='font-bold my-6'>At Buy Me a Soda, we prioritize:</h1>
                            <ul>
                                <li><span className='font-bold'>1. Transparency</span> : Clear communication and trustworthy interactions.</li>
                                <li className='mt-2'><span className='font-bold'>2. Simplicity</span> : A user-friendly interface, making it easy to create, share, and support pages.</li>
                                <li className='mt-2'><span className='font-bold'>3. Community</span> : Building a supportive environment for creators and contributors alike.</li>
                            </ul>
                            <p className='mt-5'>We&apos;re excited to see what amazing ideas come to life with your help! <br /><br />
                                Thank you for being part of our journey. Together, we can make a difference—one small action at a time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

export const metadata = {
    title: 'About - Buy Me a Soda',
}