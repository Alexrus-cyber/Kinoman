import './App.css';
import React, {useState} from "react";
import {Banner} from "./components/Banner";
import {customStyles} from "./components/Banner/Select/customStyles";
import {DateTime} from "./components/Banner/Select/DateTime";
import {Coast} from "./components/Banner/Select/Coast";
import {GreenButton} from "./components/Banner/Buttons/GreenButton";
import  'bootstrap/dist/css/bootstrap.min.css'
import {Checkout} from "./components/Checkout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navigation} from "./components/Navigation";
import {Foot} from "./components/Foot";

function App() {
  return (

      <BrowserRouter>
        <div className="App">
            <Navigation/>
          <Routes>
            <Route path={'/Banner'} element={ <Banner selectCoast = {Coast} selectF={customStyles} selectDT = {DateTime}/>}/>
            <Route path={'/Checkout'} element={<Checkout/>}/>
          </Routes>
            <Foot/>
      </div>
      </BrowserRouter>

  );
}

export default App;
