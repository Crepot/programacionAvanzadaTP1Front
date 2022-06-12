import React from "react";
import { BrowserRouter,Route,Routes as Switch } from "react-router-dom";
import Login from "../Pages/Login";
import Singup from "../Pages/Singup";
import Menu from "../Pages/Menu";
import App from "../Pages/App";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/Singup" element={<Singup/>}/>
            <Route exact path="/Menu" element={<Menu/>}/>
            <Route exact path="/Menu/App" element={<App/>}/>
            </Switch>
       
        </BrowserRouter>
    );
}


export default Routes