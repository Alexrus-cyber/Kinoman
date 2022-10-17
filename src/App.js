import './App.css';
import React from "react";
import {Banner} from "./components/Banner";
import {customStyles} from "./components/Banner/Select/customStyles";
import {DateTime} from "./components/Banner/Select/DateTime";
import {Coast} from "./components/Banner/Select/Coast";
import  'bootstrap/dist/css/bootstrap.min.css'
import {Checkout} from "./components/Checkout";
import {BrowserRouter, Route, Routes , } from "react-router-dom";
import {Navigation} from "./components/Navigation";
import {Foot} from "./components/Foot";
import {Home} from "./components/Home";
import {Poster} from "./components/Poster";
import AddressForm from "./components/Checkout/AddressForm";
import {Help} from "./components/Help";
import {Reviews} from "./components/Reviews";
import {AboutUs} from "./components/AboutUs";
import {MyProfile} from "./components/MyProfile";


function App() {
  return (

      <BrowserRouter>
        <div className="App">
            <Navigation/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path={'/Banner'}  element={ <Banner selectCoast = {Coast} selectF={customStyles} selectDT = {DateTime}/>}/>
            <Route path={'/Checkout'} element={<Checkout/>}/>
            <Route path={'/Poster'} element={<Poster/>}/>
            <Route path={'/AddressForm'} element={<AddressForm/>}/>
            <Route path={'/Help'} element={<Help/>}/>
            <Route path={'/Review'} element={<Reviews/>}/>
            <Route path={'/About'} element={<AboutUs/>}/>
            <Route path={'/Profile'} element={<MyProfile/>}/>
          </Routes>
            <Foot/>
      </div>
      </BrowserRouter>

  );
}

export default App;
