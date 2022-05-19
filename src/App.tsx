//@ts-nocheck
import React from 'react'
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import AppRotue from './AppRoutes'

const App = () => {

    return (
      <Router>
       <AppRotue/>  
      </Router>
    );
}

export default App;
