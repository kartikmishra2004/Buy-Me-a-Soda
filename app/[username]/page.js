import Image from 'next/image'
import pfp from "@/app/images/pfp.png"

const Username = ({ params }) => {
  return (
    <div className="h-[160vh] w-full bg-slate-950">
      <div className="h-[160vh] absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_60px]">
        <div className="w-full relative mt-[4.5rem] bg-red-600 h-[40vh] flex justify-center items-center">
          <Image className='object-cover' priority={true} fill={true} src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4568292/aff52b4974c24781b7aabf9e76c0fe98/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/10.png?token-time=1728000000&token-hash=-0JTGTO8u0-AumM7JyBxyqzLWbVUgpRn5YaH9MxS9tk%3D" alt="..." />
          <div className="pfp absolute w-[150px] h-[150px] flex rounded-full border-2 border-gray-300 -bottom-[75px]"><Image className='rounded-full object-cover' priority width={150} height={150} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQ4DUvmbpCVll0HOCsEVdM2zFCqDtS36pAg&s'} alt=''></Image></div>
        </div>
        <div className="details w-full flex justify-center items-center flex-col text-center gap-2 pt-10 h-[30vh]">
          <h1 className='text-xl font-bold'>
            @{params.username}
          </h1>
          <p className='  -400 text-sm'>
            Creating Animated art for VTT's <br />
            13,838 members | 89 posts | $17,670 /release
          </p>
        </div>
        <div className="payment flex justify-center items-center w-full h-[70vh] gap-5">
          <div className="supporters h-[70vh] w-1/3 p-9 flex rounded-lg flex-col items-center overflow-auto bg-[#111827]">
            {/* Show list of all the supporters as a leaderboard */}
            <h2 className="text-2xl my-4 font-semibold">Supporters</h2>
            <ul className='flex flex-col gap-2 items-start'>
              <li className='my-2 flex justify-center items-center gap-2'>
                <Image src={pfp} className='w-8' alt='pfp' priority /><p>Ben donated <span className='font-bold'>$30</span> with a message "I support you bro!!"</p>
              </li>
              <li className='my-2 flex justify-center items-center gap-2'>
                <Image src={pfp} className='w-8' alt='pfp' priority /><p>Tim donated <span className='font-bold'>$100</span> with a message "Nice work"</p>
              </li>
              <li className='my-2 flex justify-center items-center gap-2'>
                <Image src={pfp} className='w-8' alt='pfp' priority /><p>Lizza donated <span className='font-bold'>$10</span> with a message "appreciated"</p>
              </li>
              <li className='my-2 flex justify-center items-center gap-2'>
                <Image src={pfp} className='w-8' alt='pfp' priority /><p>Mark donated <span className='font-bold'>$49</span> with a message "Keep it up!"</p>
              </li>
              <li className='my-2 flex justify-center items-center gap-2'>
                <Image src={pfp} className='w-8' alt='pfp' priority /><p>Shubh donated <span className='font-bold'>$89</span> with a message "Very good!!!"</p>
              </li>
            </ul>
          </div>
          <div className="makePayment justify-center h-[70vh] w-1/3 p-9 gap-3 flex rounded-lg flex-col items-center bg-[#111827]">
            <h2 className="text-xl mb-4 font-semibold">Support {params.username}</h2>
            <div className="flex w-full items-end mt-2">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-300">Name</label>
                <input placeholder='Enter your name' type="text" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                <label className="font-semibold mt-2 leading-none text-gray-300">Amount</label>
                <input placeholder='example: $50' type="number" className="leading-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
                <label className="font-semibold mt-2 leading-none text-gray-300">Messsage</label>
                <textarea placeholder='Enter your message' className="leading-none h-[5rem] resize-none text-gray-300 p-2.5 mt-2 border-0 bg-gray-800 rounded-lg" />
              </div>
            </div>
            <div className="amountBtn flex w-full">
              <button type="button" className="text-gray-300 bg-[#1f2937] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">$10</button>
              <button type="button" className="text-gray-300 bg-[#1f2937] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">$30</button>
              <button type="button" className="text-gray-300 bg-[#1f2937] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">$50</button>
            </div>
            <div className="paybtn w-full">
              <button type="button" class="text-white w-full cursor-pointer bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-8 py-2.5 text-center">Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Username
