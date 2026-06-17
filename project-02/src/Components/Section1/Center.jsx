import React from 'react'
import CenterLeft from './CenterLeft'
import CenterRight from './CenterRight'


const Center = (props) => {
 
  return (
    <div className = 'pb-16 pt-6 px-18 h-[90vh] flex gap-10'>
        <CenterLeft />
        <CenterRight users={props.users}/>
      
    </div>
  )
}

export default Center
