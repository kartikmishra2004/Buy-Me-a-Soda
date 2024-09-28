"use client";
import Image from "next/image";
import soda from "@/public/soda.gif";
import { useEffect, useState } from "react";
import share from "@/public/share.gif"
import money from "@/public/money.gif"
import support from "@/public/support.gif"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import { fetchalluser } from "@/actions/useractions";

export default function Home() {

  const { data: session } = useSession();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchuser = async () => {
      const data = await fetchalluser();
      setUsers(data);
    }
    fetchuser();
  }, [session]);

  return (
    <>
      <div className="lg:h-[280vh] h-[290vh] w-full bg-slate-950">
        <div className="lg:h-[280vh] h-[290vh] absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_60px]">
          <div className="w-full lg:px-0 px-5 h-[40vh] lg:h-[45vh] mt-[5rem] flex flex-col justify-center items-center text-gray-300 gap-2">
            <div className="flex justify-center items-center">
              <h1 className="lg:text-5xl text-3xl font-bold">Buy Me a Soda</h1>
              <span>
                <Image className="lg:w-16 w-12" alt="" src={soda} priority={true}></Image>
              </span>
            </div>
            <p className="lg:text-base text-sm text-center lg:text-left">A Crowdfunding Platform Where Every Sip Counts – Help Innovators and Dreamers Turn Their Ideas Into Reality.</p>
            <div className="buttons mt-10">
              <Link href={session ? '/dashboard' : '/login'} type="button" className="text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get started</Link>
              <Link href={'/about'} type="button" className="text-gray-700 bg-gradient-to-r bg-gray-300 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</Link>
            </div>
          </div>
          <div className="line lg:mx-16 mx-8 h-[1px] bg-gray-700"></div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-300 pt-10 mb-6 lg:mb-0 lg:text-2xl text-lg tracking-wide font-semibold">Entrepreneurs You Can Support</h1>
            <div className="features text-gray-300 w-full flex flex-col lg:flex-row justify-evenly items-center h-[35rem] lg:h-[35rem]">
              <div className="entrepreneurs h-[70vh] lg:w-[60vw] w-[95vw] p-9 flex rounded-lg flex-col items-center overflow-auto bg-[#111827]">
                <h2 className="text-2xl my-4 font-semibold">Top Entrepreneurs</h2>
                <ul className='flex flex-col lg:gap-2 gap-[2rem] w-full items-start'>
                  {users.map((item, index) => (
                    <Link href={`/${item.username}`} className="w-full hover:bg-[#1f2937]" key={index}>
                      <div className="max-w-2xl w-full">
                        <div className="w-full rounded-lg sm:p-6 text-gray-300">
                          <div className="flow-root w-full">
                            <ul role="list" className="w-full">
                              <li className="w-full">
                                <div className="flex items-center space-x-4">
                                  <div className="flex-shrink-0">
                                    <Image priority width={32} height={32} className="w-8 h-8 rounded-full" src={item.profilePhoto} alt="Neil image" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-300 truncate">
                                      {item.name}
                                    </p>
                                    <p className="text-sm text-gray-400 truncate">
                                      {item.email}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="line lg:mx-16 mt-14 mx-8 h-[1px] bg-gray-700"></div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-300 pt-10 lg:text-2xl text-lg tracking-wide font-semibold">Your Fans can Buy you a Soda!!</h1>
            <div className="features text-gray-300 w-full flex flex-col lg:flex-row justify-evenly items-center h-[35rem] lg:h-[20rem]">
              <div className="flex flex-col justify-center items-center lg:px-0 px-10 text-center lg:w-[33.33%]">
                <Image className="lg:w-16 w-12 mb-5" src={support} alt="..."></Image>
                <h1 className="text-lg font-medium">Quick Support</h1>
                <p className="text-sm font-thin">Contribute in seconds and help bring ideas to life.</p>
              </div>
              <div className="flex flex-col justify-center items-center lg:px-0 px-10 text-center lg:w-[33.33%]">
                <Image className="lg:w-16 w-12 mb-5" src={money} alt="..."></Image>
                <h1 className="text-lg font-medium">Direct Funding</h1>
                <p className="text-sm font-thin">Funds go straight to the recipient, hassle-free.</p>
              </div>
              <div className="flex flex-col justify-center items-center lg:px-0 px-10 text-center lg:w-[33.33%]">
                <Image className="lg:w-16 w-12 mb-5" src={share} alt="..."></Image>
                <h1 className="text-lg font-medium">Easy Sharing</h1>
                <p className="text-sm font-thin">Spread the word and boost your favorite campaigns.</p>
              </div>
            </div>
          </div>
          <div className="line lg:mx-16 mx-8 h-[1px] bg-gray-700"></div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-300 pt-10 text-2xl font-semibold">Learn More About Us.</h1>
            <div className="videos text-gray-300 w-full flex flex-col lg:flex-row justify-evenly items-center lg:h-[25rem] h-[30rem]">
              <iframe className="rounded-lg lg:w-[400px] lg:h-[225px]" src="https://www.youtube.com/embed/D89Dgg32yLk?si=tHlFOeepGErcbLcV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              <iframe className="rounded-lg lg:w-[400px] lg:h-[225px]" src="https://www.youtube.com/embed/xitkHZ8MWzE?si=t581AkG1yGoaiLbl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}