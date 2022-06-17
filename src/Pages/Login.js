import React, { Component } from "react";
import '../css/Login.css'
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {login} from '../api/players/login'

import Cookies from 'universal-cookie'

const cookie = new Cookies();
class Login extends Component{
    state = {
        form:{
            username:'',
            password:''
        }
    }

    handleChange = async e => {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value 
            }
        });


    }
    
    render() { 
        return (
                <div className="container">
                <div className="MainContainer">
                    <div className="InnerContainer">
                    <div className="form-group"> 
                    <label>
                        User:
                    </label>
                    <br />
                    <input type="text" className="form-control" name="username" onChange={this.handleChange}/>
                    <label>
                        Password:
                    </label>
                    <br />
                    <input type="password" className="form-control" name="password" password="password"  onChange={this.handleChange}/>
                    </div>
                    <div className="register">
                    <a href="/Singup">Register Now!</a>
                    </div>
                    <br />
                    <button className="btn btn-primary" onClick={ () => 
                    login(this.state.form.username,this.state.form.password).then((res) => {
                        if(res.data){
                            cookie.set('authToken',res.data.authToken,{path:"/"});
                            cookie.set('playerId',res.data.player_id,{path:"/"});
                            //Redirigir al Menu ppal
                            window.location.href="./Menu"
                        }

                    }).catch((err) => {
                        console.log("Error en el front",err)
                    })
                    
                    }>Login
                    
                    </button>
                    </div>
                </div>
                </div>

        )
    }
}


export default Login;