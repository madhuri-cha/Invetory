import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Root from './components/Root'
import Login  from './pages/Login'
import './App.css'
imp

function App() {
  
  
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/admin/dashboard' element={<h1>Admin Dashboard</h1>} />
      <Route path='/customer/dashboard' element={<h1>Customer Dashboard</h1>} />
      <Route path='/login' element={<Login />} />
      <Route path='/unauthorized' element={<h1>Unauthorized Access</h1>} />
    </Routes>
  </Router>

  )
}

export default App
