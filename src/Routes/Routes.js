import React from 'react';
import { BrowserRouter,Route,Routes as Switch } from 'react-router-dom';
import Login from '../Pages/Login';
import Singup from '../Pages/Singup';
import Menu from '../Pages/Menu';
import App from '../Pages/App';
import Tableros from '../Pages/Tableros';
import {Provider} from 'react-redux'
import store  from '../reducers/index'

function Routes(){
    return(
        <BrowserRouter>
        <Provider store={store}>
            <Switch>
            <Route path='/App/:id' element={<App/>}/>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/Singup' element={<Singup/>}/>
            <Route exact path='/Menu' element={<Menu/>}/>
            <Route exact path='/Tableros' element={<Tableros/>}/>
            </Switch>
        </Provider>
        </BrowserRouter>
    );
}


export default Routes