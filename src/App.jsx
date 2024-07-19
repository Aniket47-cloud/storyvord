
import './App.css'
import Home from './Components/Home'
import { Route,Routes } from 'react-router'
import Sign from './Components/Sign'
import Login from './Components/Login'
import Reset from './Components/Reset'
import { useState } from 'react'
import Administrator from './Components/Administrator'
import Upload from './Components/Upload'
function App() {  
  const [isOn,setIsOn]=useState(false);
  return (
  
   <div>
     <Routes>
    <Route path='/' element={<Home isOn={isOn} setIsOn={setIsOn}/>}/>
    <Route path='/sign' element={<Sign/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/reset' element={<Reset isOn={isOn} setIsOn={setIsOn}/>}/>
    <Route path='/administrator' element={<Administrator isOn={isOn} setIsOn={setIsOn}/>}/>
    <Route path='/upload' element={<Upload isOn={isOn} setIsOn={setIsOn}/>}/>
    </Routes>
   </div>
  )
}

export default App
