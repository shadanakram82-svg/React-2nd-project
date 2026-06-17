import React from 'react'
import RightCard from './RightCard'

const CenterRight = (props) => {
 
  return (
    <div id ="right" className ='flex gap-5 rounded-4xl overflow-x-auto text-black w-2/3 h-full p-6'>
      {props.users.map(function(elem ,idx){

        return <RightCard key= {idx} id ={idx} color = {elem.color} img ={elem.img} tags={elem.tags}/>
      })}
        
    </div>
  )
}

export default CenterRight
