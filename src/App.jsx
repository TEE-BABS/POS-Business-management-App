import React from 'react'
import './App.css'
import Sidebar from './components/sidebarComponent/Sidebar'
import AdminDashboard from './pages/AdminPage/AdminDashboard'
import LoginForm from './pages/LoginPage/LoginForm'
import { Router, Route } from 'react-router-dom'
import Branches from './pages/LoginPage/BranchFiles/Branches'

function App() {
  return (
    <div className="homePage">
    <div className='sidebar'>
<Sidebar/>
 </div>
<div className="loginPage">
<LoginForm/>
<Branches/>
</div>

</div>



  )
}

export default App
