"use client";
import Image from "next/image";
import soda from "@/app/images/soda.gif";
import { useEffect } from "react";
import share from "@/app/images/share.gif"
import money from "@/app/images/money.gif"
import support from "@/app/images/support.gif"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";

export default function Home() {

  const { data: session } = useSession();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="lg:h-[200vh] h-[200vh] w-full bg-slate-950">
        <div className="lg:h-[200vh] h-[200vh] absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_60px]">
          <div className="w-full md:px-0 px-5 h-[40vh] md:h-[45vh] mt-[5rem] flex flex-col justify-center items-center text-gray-300 gap-2">
            <div className="flex justify-center items-center">
              <h1 className="md:text-5xl text-3xl font-bold">Buy Me a Soda</h1>
              <span>
                <Image className="md:w-16 w-12" alt="" src={soda} priority={true}></Image>
              </span>
            </div>
            <p className="md:text-base text-sm text-center md:text-left">A Crowdfunding Platform Where Every Sip Counts – Help Innovators and Dreamers Turn Their Ideas Into Reality.</p>
            <div className="buttons mt-4">
              <Link href={session ? '/dashboard' : '/login'} type="button" className="text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get started</Link>
              <Link href={'/about'} type="button" className="text-gray-700 bg-gradient-to-r bg-gray-300 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</Link>
            </div>
          </div>
          <div className="line md:mx-16 mx-8 h-[1px] bg-gray-700"></div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-300 pt-10 md:text-2xl text-lg tracking-wide font-semibold">Your Fans can Buy you a Soda!!</h1>
            <div className="features text-gray-300 w-full flex flex-col lg:flex-row justify-evenly items-center h-[35rem] lg:h-[20rem]">
              <div className="flex flex-col justify-center items-center lg:px-0 px-10 text-center lg:w-[33.33%]">
                <Image className="md:w-16 w-12 mb-5" src={support} alt="..."></Image>
                <h1 className="text-lg font-medium">Quick Support</h1>
                <p className="text-sm font-thin">Contribute in seconds and help bring ideas to life.</p>
              </div>
              <div className="flex flex-col justify-center items-center lg:px-0 px-10 text-center lg:w-[33.33%]">
                <Image className="md:w-16 w-12 mb-5" src={money} alt="..."></Image>
                <h1 className="text-lg font-medium">Direct Funding</h1>
                <p className="text-sm font-thin">Funds go straight to the recipient, hassle-free.</p>
              </div>
              <div className="flex flex-col justify-center items-center lg:px-0 px-10 text-center lg:w-[33.33%]">
                <Image className="md:w-16 w-12 mb-5" src={share} alt="..."></Image>
                <h1 className="text-lg font-medium">Easy Sharing</h1>
                <p className="text-sm font-thin">Spread the word and boost your favorite campaigns.</p>
              </div>
            </div>
          </div>
          <div className="line md:mx-16 mx-8 h-[1px] bg-gray-700"></div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-300 pt-10 text-2xl font-semibold">Learn More About Us.</h1>
            <div className="videos text-gray-300 w-full flex flex-col lg:flex-row justify-evenly items-center md:h-[25rem] h-[30rem]">
              <iframe className="rounded-lg lg:w-[400px] lg:h-[225px]" src="https://www.youtube.com/embed/D89Dgg32yLk?si=tHlFOeepGErcbLcV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              <iframe className="rounded-lg lg:w-[400px] lg:h-[225px]" src="https://www.youtube.com/embed/xitkHZ8MWzE?si=t581AkG1yGoaiLbl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}