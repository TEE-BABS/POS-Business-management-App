import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

function Sidebar() {



  return (
    <div className='sidebar-container'>
      
      <div className="sidebar-title">
        <h3> Business Management System</h3>
      </div>

      <div className='sidebars-link'>
       <Link to={''}>🏠︎ Dashboard</Link>
       <Link to={''}>📍 Branches</Link>
       <Link to={''}>💱 Transactions</Link>
       <Link to={''}>📢 Reports</Link>
       <Link to={''}>👨‍👨‍👦‍👦 Users</Link>
       <Link to={''}>👨‍💻 Management page</Link>
       <Link to={''}>🛠️ Settings ⚙️</Link>

      </div>

    </div>


  )
}

export default Sidebar