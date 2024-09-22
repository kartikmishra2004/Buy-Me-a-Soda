import React from 'react'

const About = () => {
    return (
        <div className="h-screen w-full bg-slate-950">
            <div className="h-screen absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_60px]">
                <div className='w-full flex justify-center items-center h-[80vh] mt-[5rem]'>
                    About
                </div>
            </div>
        </div>
    )
}

export default About

export const metadata = {
    title: 'About - Buy Me a Soda',
}