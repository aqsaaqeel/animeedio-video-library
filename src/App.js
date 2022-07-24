import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"
import { ListingPage } from "./pages/listing-page/ListingPage"
import {Navbar} from "./components/Navbar/Navbar"
import  LoginPage  from './pages/login-signup-page/login-page'
import { HomePage } from './pages/home page/HomePage'
import SignupPage from './pages/login-signup-page/signup-page'
import SingleVideoPage from './pages/single-video-page/SingleVideoPage'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path ="/" element ={<HomePage />}/>
          <Route path = "/listing" element={<ListingPage/>}/>    
          <Route path = "/login" element={<LoginPage />}/>
          <Route path = "/signup" element = {<SignupPage/>} />
          <Route path = "/single-video" element = {<SingleVideoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
