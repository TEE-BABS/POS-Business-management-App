import React from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'
import AdminDashboard from '../AdminPage/AdminDashboard'

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
          <div className="select-role-container">
          <p>Select Role : 
            <button>Admin</button>
            <button>Agent</button>
            <p><input type="text" /></p>
            
            </p>  
            </div>
           <div className="branch-container"> 
          <p> Branches :
            <button>Select Branch</button>
             <input type="text" />
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

      <Link to={'/AdminDashboard'}></Link>
      
    </div>
  )
}

export default LoginForm