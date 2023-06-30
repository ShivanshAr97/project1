import Image from 'next/image'
import React from 'react'
import Button from './Button';
import Points from './Points';
import Works from '../Works';

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-gray-600 to-cyan-500 text-white relative z-0'>
      <h1 className='font-bold text-6xl flex justify-center pt-20 pb-8'>Check your financial health</h1>

      <p className='w-[40%] text-2xl font-light tracking-wide flex mx-auto my-2 text-center space-x-1'>Use WeathoMeter to get a free report card for your finances- within minutes!</p>

      <Button />

      <div className='flex relative justify-around capitalize'>
        <div className='w-[35%] flex justify-center my-12'>
          <ul>
            <Points title={" Expected retirment age"} />
            <Points title={" Identity mistakes"} />
          </ul>
        </div>

        <Image className='w-[30%] -z-50' src="/img2.png"
          width={70}
          height={70}
          alt="" />

        <div className='w-[35%] flex justify-center my-12'>
          <ul>
            <Points title={" Personalised Roadmap"} />
            <Points title={" Tips to improve"} />
          </ul>
        </div>

      </div>

      <svg className='-mt-28 z-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0A5783" fill-opacity="1" d="M0,288L40,250.7C80,213,160,139,240,96C320,53,400,43,480,58.7C560,75,640,117,720,117.3C800,117,880,75,960,64C1040,53,1120,75,1200,69.3C1280,64,1360,32,1400,16L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

      <div className='bg-[#0A5783] -mt-24 pb-4'>
        <h1 className='font-bold text-5xl flex justify-center pt-20 pb-12 z-30'>How it works?</h1>

        <div className='flex justify-between mx-28'>
          <Works text={"Answer few questions"} img={"/file2.png"} num={1} />
          <div className='w-60 mt-5 ml-[18%] absolute border-b-2 border-dashed border-white h-1'></div>
          <Works text={"Register using phone & OTP"} img={"/smartphone.png"} num={2} />
          <div className='w-60 mt-5 ml-[45%] absolute border-b-2 border-dashed border-white h-1'></div>
          <Works text={"Get report and your personalized roadmap"} img={"/report2.png"} num={3} />
          
        </div>

        <Button />

      </div>

    </div>
  )
}
