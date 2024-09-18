"use client";
import Image from "next/image";
import soda from "@/app/images/soda.gif";

export default function Home() {
  return (
    <>
      <div className="w-full md:px-0 px-5 h-[75vh] flex flex-col justify-center items-center text-gray-300 gap-2">
        <div className="flex justify-center items-center">
          <h1 className="md:text-5xl text-2xl font-bold">Buy Me a Soda</h1>
          <span>
            <Image className="md:w-14 w-12" alt="" src={soda} priority={true}></Image>
          </span>
        </div>
        <p className="md:text-base text-sm text-center md:text-left">A Crowdfunding Platform Where Every Sip Counts – Help Innovators and Dreamers Turn Their Ideas Into Reality.</p>
        <div className="buttons mt-4">
          <button type="button" className="text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get started</button>
          <button type="button" className="text-gray-700 bg-gradient-to-r bg-gray-300 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
        </div>
      </div>
    </>
  );
}
