import React from 'react'
import { useState } from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [display, setDisplay] = useState(false);
   
  const handleToggle=() => {
   setIsVisible(!isVisible);
  };

  const displayToggle = () => {
    setDisplay(!display);
  }
   
  
  return (
    <div className='homePage'>
      <div className="side-navbar">
    <Link to={''}> Home</Link>

    <div className="direction-button">
    <button onClick={handleToggle}>Admin</button>
    <button onClick={displayToggle}>Agent</button>
    </div>
    {/* <Link to={''}>Admin Dashboard</Link>
    <Link to={''}> Agent Dashboard</Link> */}
      </div>
      <div className="Headline">
        <h1>One App,Endless Possibilities for your POS Management.</h1>
        <h2>Payement Made Simple, Business Made Smarter.</h2>
        <h3>Track,Manage and Succeed.</h3>
      
      
       {isVisible &&(
      <div className="Admin-form">
        <h2>Admin Login Form</h2>
        <h3>Enter Your details</h3>

        <input type="text" placeholder='Enter your User ID'/>
        <input type="password" placeholder='Enter Your Password'/>
      
        <button>Login</button>
      </div>
)}

</div>

{display &&(
       <div className="Agent-form">
        <h2>Agent Login Form</h2>
        <h3>Enter Your details</h3>
      
      
        <input type="text" placeholder='Enter your User ID'/>
        <input type="password" placeholder='Enter Your Password'/>
      
        <button>Login</button>
      </div>
    )}        
             
    </div>
  )
}

export default HomePage