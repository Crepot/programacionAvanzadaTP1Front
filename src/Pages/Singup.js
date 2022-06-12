import React, { Component } from "react";
import '../css/Login.css';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {login} from '../api/players'
import {singup} from '../api/players/singup';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
class Singup extends Component{
    state = {
        form:{
            user:'',
            email:'',
            password:'',
            passwordconfirm:''
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
                        User Name:
                    </label>
                    <br />
                    <input type="username" className="form-control" name="user" onChange={this.handleChange}/>
                    <label>
                        Email:
                    </label>
                    <br />
                    <input type="email" className="form-control" name="email" onChange={this.handleChange}/>
                    <label>
                        Password:
                    </label>
                    <br />
                    <input type="password" className="form-control" name="password" password="password"  onChange={this.handleChange}/>
                    <label>
                        Confirm Password:
                    </label>
                    <br />
                    <input type="password" className="form-control" name="passwordconfirm" passwordconfirm="passwordconfirm"  onChange={this.handleChange}/>
                    </div>
                    <div className="register">
                    <a href="/">Login</a>
                    </div>
                    <br />
                    <button className="btn btn-primary" onClick={ () => 
                    singup(this.state.form.user,this.state.form.email,this.state.form.password,this.state.form.passwordconfirm).then((res) => {
                        if(res.data){
                            //Redirigir al Menu Login
                            window.location.href="./Login"
                        }

                    }).catch((err) => {
                        console.log("Error en el front",err)
                    })
                    
                    }>Sing up
                    
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Singup;