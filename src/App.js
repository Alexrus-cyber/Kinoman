import './App.css';
import React, {useState} from "react";
import {Banner} from "./components/Banner";
import {customStyles} from "./components/Banner/Select/customStyles";
import {DateTime} from "./components/Banner/Select/DateTime";
import {Coast} from "./components/Banner/Select/Coast";
import {GreenButton} from "./components/Banner/Buttons/GreenButton";
import  'bootstrap/dist/css/bootstrap.min.css'
import {Checkout} from "./components/Checkout";
import {BrowserRouter, Route, Routes , } from "react-router-dom";
import {Navigation} from "./components/Navigation";
import {Foot} from "./components/Foot";
import {Home} from "./components/Home";
import {Poster} from "./components/Poster";
import AddressForm from "./components/Checkout/AddressForm";
import {Help} from "./components/Help";


function App() {
  return (

      <BrowserRouter>

        <div className="App">
            <Navigation/>
            <Routes>
            <Route path={'/Banner'}  element={ <Banner selectCoast = {Coast} selectF={customStyles} selectDT = {DateTime}/>}/>
            <Route path={'/Checkout'} element={<Checkout/>}/>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/Poster'} element={<Poster/>}/>
            <Route path={'/AddressForm'} element={<AddressForm/>}/>
            <Route path={'/Help'} element={<Help/>}/>

          </Routes>
            <Foot/>
      </div>
      </BrowserRouter>

  );
}

export default App;
