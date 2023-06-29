import Image from 'next/image'
import React from 'react'
import Button from './Button';
import Points from './Points';
import Works from '../Works';

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-gray-600 to-cyan-500 text-white pb-2'>
      <h1 className='font-bold text-6xl flex justify-center pt-20 pb-8'>Check your financial health</h1>

      <p className='w-[40%] text-2xl font-light tracking-wide flex mx-auto my-2 text-center space-x-1'>Use WeathoMeter to get a free report card for your finances- within minutes!</p>

      <Button />

      <div className='flex justify-around capitalize'>
        <div className='w-[35%] flex justify-center my-12'>
          <ul>
            <Points title={" Expected retirment age"} />
            <Points title={" Identity mistakes"} />

          </ul>
        </div>
        <Image className='w-[30%]' src="/img.png"
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

      <h1 className='font-bold text-5xl flex justify-center pt-20 pb-12'>How it works?</h1>
      <div className='flex justify-between mx-28'>
        <Works className="" text={"Answer few questions"} img={"/file2.png"} num={1} />
        <div className='w-60 mt-5 ml-[18%] absolute border-b-2 border-dashed border-white h-1'></div>
        <Works text={"Register using phone and OTP"} img={"/smartphone.png"}  num={2}/>
        <div className='w-60 mt-5 ml-[45%] absolute border-b-2 border-dashed border-white h-1'></div>
        <Works text={"Get report & your roadmap"} img={"/report2.png"}  num={3}/>
      </div>
      <Button />
    </div>

  )
}
