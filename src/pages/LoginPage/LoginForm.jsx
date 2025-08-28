import React from 'react'
import { useState } from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'
import AdminDashboard from '../AdminPage/AdminDashboard'


function LoginForm() {
  const BusinessName = "B.O.B Enterprise"
  const [inputValue, setInputValue] = useState('');
  const [inputBranch, setInputBranch] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState('false')

  const handleButtonClick =(inputText)=>{
    setInputValue(inputText);
    setIsReadOnly(true)

  };
   const handleBranchClick = (Text)=>{
   setInputBranch(Text)
   setIsReadOnly(true)
   
  };
  const toggleVisibility = ()=>{
   setIsVisible(!isVisible);
  };

  return (
   
     <div className="general-container">
    
      <div className="sub-container">
      <div className='welcomePage'>
        <h1>Welcome To {BusinessName}</h1>
        <div className='dashboard-header'>
          <h2>Management Dashboard</h2>
        </div>
       <div className="form-container">
        <div className="form-select">
          <div className="select-role-container">
          <p>Select Role : 
            <button onClick={()=>{handleButtonClick("Admin")}}>Admin</button>
            <button onClick={()=>{handleButtonClick("Agent")}}>Agent</button>
            <p>
              <input type="text" value={inputValue} readOnly = {isReadOnly} style={{textAlign:"center"}}/>
            </p>
            
            </p>  
            </div>
           <div className="branch-container"> 
          <p> Branches :
            <button onClick={toggleVisibility}>Select Branch</button>

             <input type="text"value= {inputBranch} readOnly = {isReadOnly} style={{textAlign: "center"}}/>
          </p>
          
          </div> 
        </div>
          
          <div className="form-input">
              <p>
            <input type="text" placeholder='Enter User ID' />
          </p>
          <p>
            <input type="password" placeholder='Enter Password'/>
          </p>
          </div>
        
          <div className="login-button">
            <button>Login</button>
          </div>
          
       </div>
      </div>
     </div>
      
      {isVisible &&(
     <div className='branch-box'>
      <h3>Select Branch</h3>
     <div className="branch-list-container" >
      <button onClick={()=>{handleBranchClick("Branch 1")}}>Branch 1</button>
      <button onClick={()=>{handleBranchClick("Branch 2")}}>Branch 2</button>
      <button onClick={()=>{handleBranchClick("Branch 3")}}>Branch 3</button>
      <button onClick={()=>{handleBranchClick("Branch 4")}}>Branch 4</button>
      <button onClick={()=>{handleBranchClick("Branch 5")}}>Branch 5</button>
      <button onClick={()=>{handleBranchClick("Branch 6")}}>Branch 6</button>
      <button onClick={()=>{handleBranchClick("Branch 7")}}>Branch 7</button>
      <button onClick={()=>{handleBranchClick("Branch 8")}}>Branch 8</button>
      <button onClick={()=>{handleBranchClick("Branch 9")}}>Branch 9</button>
      <button onClick={()=>{handleBranchClick("Branch 10")}}>Branch 10</button>
     </div>
      
    </div>

 )}



</div>




  )

}


export default LoginForm