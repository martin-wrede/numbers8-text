import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
 import Input from './Input'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    
    <Input />
    
    <App scale="0.27" modelPath={"/gift5.glb"} />  
    </>
  </React.StrictMode>
)
