import React from 'react'
import './LoginForm.css'

function LoginForm() {
  const BusinessName = "B.O.B Enterprise"

  return (

    <div className='container'>
      <div className='welcomePage'>
        <h1>Welcome To {BusinessName}</h1>
        <div className='dashboard-header'>
          <h2>Management Dashboard</h2>
        </div>
       <div className="form-container">
        <div className="form-select">
          <p>Select Role : 
            <select name="dropdown" id="">
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Agent">Agent</option>
            </select>
            </p>   
          <p>Select Agent :
            <select name="Branches" id="">
              <option value="Branch 1"></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </p>
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
  )
}

export default LoginForm