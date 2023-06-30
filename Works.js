import React from 'react'
import Image from 'next/image'

const Works = ({ img, text, num }) => {
    return (
        <>
            <div className='items-center w-[33%]'>
                <Image className='flex mx-auto ' src={img} width={50} height={50} />
                <p className='w-[11rem] flex mx-auto tracking-wider py-3 text-2xl text-center'>{text}</p>
            </div>
        </>
    )
}

export default Works