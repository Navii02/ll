import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import AdminSignup from './components/AdminSignup'
import AdminLogin from './components/AdminLogin'
import Home from './components/Home'

import { UserContext } from './App'

function RoutesComp() {
  const userContext = useContext(UserContext)
  return (
    <>
      <Routes>
      
            <Route exact path='/' element={<Home />} />
            <Route  path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/adminsignup' element={<AdminSignup />} />
            <Route path='/admin' element={<AdminLogin />} />
            <Route path='' element={<div>page not found</div>} />
       
       
      </Routes>
    </>
  )
}

export default RoutesComp
