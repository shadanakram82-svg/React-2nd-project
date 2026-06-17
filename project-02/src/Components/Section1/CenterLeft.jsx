import React from 'react'
import { ArrowUpRight } from 'lucide-react';


const CenterLeft = () => {
  return (
    <div className='text-black w-1/3 h-full flex flex-col justify-between '>
      <div className='p-5'> 
        <h2 className='mb-7 text-6xl font-bold'>Prospective <br/><span>customer</span><br/> Segmentation</h2>
        <p className='text-xl w-[90%] font-medium text-gray-600 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio saepe error quis quidem, laboriosam provident distinctio ut illo minus delectus?</p>
      </div>

      <div className='text-8xl p-5' >
        <ArrowUpRight size={50}/>
      </div>
    </div>
  )
}

export default CenterLeft
