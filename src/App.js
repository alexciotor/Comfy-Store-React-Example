import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import styled from 'styled-components'
import {Testing} from './testing'
// styled comoponents example
//  const Button = styled.button`
//  background: green;
//  color:white;
//  width: 100px;
//  height: 100px;
//  `

// const Container = styled.div`
// background: red;
// color: white;
// font-size: 2rem
  
// `

function App() {
  return <div> 
 <Testing/>
  
  </div>
}

export default App
