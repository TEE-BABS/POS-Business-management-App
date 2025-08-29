import React from 'react'
import './App.css'
import Sidebar from './components/sidebarComponent/Sidebar'
import AdminDashboard from './pages/AdminPage/AdminDashboard'
import AgentDashboard from './pages/AgentPage/AgentDashboard'
import LoginForm from './pages/LoginPage/LoginForm'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePageFolder/HomePage'


function App() {
  return (
<div className="homePage">
<div className='sidebar'>
{/* <Sidebar/> */}
 </div>
<div className="loginPage">
{/* <LoginForm/> */}
{/* <Branches/> */}
</div>

<Routes>
   <Route path='/' element={<HomePage />}/>
  <Route path='/'element />
   <Route path='/pages/AdminPage/AdminDashboard' element = {<AdminDashboard/>}/>
    <Route path='/pages/AgentPage/AgentDashboard'element = {<AgentDashboard/>}/>
</Routes>


</div>



  )
}

export default App
