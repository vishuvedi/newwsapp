import logo from './logo.svg';
import './App.css';
import Header from './container/header';
import React, { Component } from 'react'
import News from './container/news';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header/>
        
        <Routes>
        <Route path="/" element={<News key="general" category = "general" />} />
          <Route path="/home" element={<News key = "general" category = "general" />} />
          <Route path="/entertainment" element={<News key = "entertainment" category = "entertainment" />} />
          <Route path="technology" element={<News key = "technology" category = "technology" />} />
          <Route path="/sports" element={<News key = "sports" category = "sports" />} />
          <Route path="/health" element={<News key = "health" category = "health" />} />
          <Route path="/science" element={<News key = "science" category = "science" />} />
          <Route path="/business" element={<News key = "business" category = "business" />} />
         </Routes>
        </Router>
      </div>
    )
  }
}
