"use client";
import Image from "next/image";
import soda from "@/app/images/soda.gif";
import { useEffect } from "react";
import share from "@/app/images/share.gif"
import money from "@/app/images/money.gif"
import support from "@/app/images/support.gif"

export default function Home() {

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full md:px-0 px-5 h-[45vh] mt-[5rem] flex flex-col justify-center items-center text-gray-300 gap-2">
        <div className="flex justify-center items-center">
          <h1 className="md:text-5xl text-2xl font-bold">Buy Me a Soda</h1>
          <span>
            <Image className="md:w-16 w-12" alt="" src={soda} priority={true}></Image>
          </span>
        </div>
        <p className="md:text-base text-sm text-center md:text-left">A Crowdfunding Platform Where Every Sip Counts – Help Innovators and Dreamers Turn Their Ideas Into Reality.</p>
        <div className="buttons mt-4">
          <button type="button" className="text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get started</button>
          <button type="button" className="text-gray-700 bg-gradient-to-r bg-gray-300 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
        </div>
      </div>
      <div className="line mx-16 h-[1px] bg-gray-700"></div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-gray-300 pt-10 text-2xl tracking-wide font-semibold">Your Fans can Buy You a Soda!!</h1>
        <div className="features text-gray-300 w-full flex justify-evenly items-center h-[13rem]">
          <div className="flex flex-col justify-center items-center w-[33.33%]">
            <Image className="md:w-16 w-12 mb-5" src={support} alt="..."></Image>
            <h1 className="text-lg font-medium">Quick Support</h1>
            <p className="text-sm font-thin">Contribute in seconds and help bring ideas to life.</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[33.33%]">
            <Image className="md:w-16 w-12 mb-5" src={money} alt="..."></Image>
            <h1 className="text-lg font-medium">Direct Funding</h1>
            <p className="text-sm font-thin">Funds go straight to the recipient, hassle-free.</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[33.33%]">
            <Image className="md:w-16 w-12 mb-5" src={share} alt="..."></Image>
            <h1 className="text-lg font-medium">Easy Sharing</h1>
            <p className="text-sm font-thin">Spread the word and boost your favorite campaigns.</p>
          </div>
        </div>
      </div>
      <div className="line mx-16 h-[1px] bg-gray-700"></div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-gray-300 pt-10 text-2xl font-semibold">Learn More About Us.</h1>
        <div className="videos text-gray-300 w-full flex justify-evenly items-center h-96">
          <iframe className="rounded-lg" width="400" height="225" src="https://www.youtube.com/embed/D89Dgg32yLk?si=tHlFOeepGErcbLcV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <iframe className="rounded-lg" width="400" height="225" src="https://www.youtube.com/embed/xitkHZ8MWzE?si=t581AkG1yGoaiLbl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}