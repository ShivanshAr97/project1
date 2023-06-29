import React from 'react'
import { BsPatchCheck } from 'react-icons/bs';

const Points = ({ title }) => {
    return (
        <>
            <li className='text-2xl my-2 pb-2  flex  font-semibold '><span className='mx-2 my-1'><BsPatchCheck /></span><span className='border-b-2 border-white pb-2'>{title}</span></li>
        </>
    )
}

export default Points