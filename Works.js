import React from 'react'
import Image from 'next/image'

const Works = ({ img, text, num }) => {
    return (
        <>
            <div className='flex items-center flex-col w-[33%]'>
                <Image className='' src={img} width={50} height={50} />
                <p className='absolute border rounded-full bg-red-700 text-white text-[0.7rem] px-[0.30rem] w-4 h-4 -mt-2'>{num}</p>
                <p className='w-[60%] tracking-wider my-4 text-2xl text-center'>{text}</p>
            </div>
        </>
    )
}

export default Works