import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/index';
import './App.css';
import SignInPage from '../pages/signin';
import MerchandisingPage from '../pages/merchandising';

export class App extends React.Component{
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/sign-in" element={<SignInPage/>} exact/>
          <Route path="/merchandising" element={<MerchandisingPage />} exact />
        </Routes>
      </Router>
    );
  }
}


export default App;
