import React from 'react'
import Image from 'next/image'

const Works = ({img, text,num}) => {
    return (
        <>
            <div className='flex items-center flex-col w-[33%]'>
                <Image className='' src={img} width={50} height={50} />
                <p className='absolute border rounded-lg text-pink-500 text-4xl px-1'>{num}</p>
                <p className='w-[60%] tracking-wider border rounded-xl my-4 text-2xl text-center'>{text}</p>
            </div>
        </>
    )
}

export default Works