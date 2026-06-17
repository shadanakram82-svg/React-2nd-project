import React from 'react'
import Section1 from './Components/Section1/Section1'



const App = () => {

  const users =[
    {
      img : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro :'' , 
      color:'light blue',
      tags :'Scalable'
    },
    {
      img : 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro :'' , 
      color:'lightseagreen',
      tags :'Underserverd'
    },
    {
      img : 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro :'' , 
      color:'orange',
      tags :'Underbanked'
    },
    {
      img : 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro :'' , 
      color:'grey',
      tags :'Valuable'
    },
    {
      img : 'https://plus.unsplash.com/premium_photo-1661288427124-0404be82ff7a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro :'' , 
      color:'black',
      tags :'Satisfied'
    }
    
  ]
  return (
    <div>
      <Section1 users ={users}/>
      
    </div>
  )
}

export default App
