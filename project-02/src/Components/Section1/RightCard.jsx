import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCard = (props) => {
  return (
    <div className ='bg-red-50 shrink-0 h-full relative overflow-hidden w-73 rounded-4xl'>

        <img className='h-full w-full object-cover' src={props.img}>
   </img>
      <div className='absolute left-0 top-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white flex justify-center items-center h-10 w-10 rounded-full text-1xl font-semibold'>{props.id+1}</h2>
        <div>

      <p className='text-lg leading-normal text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quaerat dolor at provident, nemo corporis.</p>
      <div className='flex justify-between'>
        <button style = {{backgroundColor:props.color}}className='text-white font-medium px-3 py-1 rounded-full text'>{props.tags}</button>
        <button className='bg-blue-600 text-white font-medium px-1 py-1 rounded-full text'><ArrowRight /></button>
      </div>

        </div>
      </div>
       
    </div> 
  )
}

export default RightCard
