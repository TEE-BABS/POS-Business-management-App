import React from 'react'
import './App.css'
import Sidebar from './components/sidebarComponent/Sidebar'
import AdminDashboard from './pages/AdminPage/AdminDashboard'
import LoginForm from './pages/LoginPage/LoginForm'
import { Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="homePage">
    <div className='sidebar'>
<Sidebar/>
 </div>
<div className="loginPage">
<LoginForm/>
</div>
</div>

  )
}

export default App
