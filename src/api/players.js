// import Cookies from 'universal-cookie'
const axios = require('axios');
const _ = require('lodash')

//

function login(email,password){
    return new Promise(async (resolve,reject) => {
        email = _.toLower(email)
        console.log('process.env.REACT_APP_API_URL = ',process.env.REACT_APP_API_URL)
        const url =`${process.env.REACT_APP_API_URL}/authenticate`;
        let config = {   
            email:email,
            password:password 
        // password:"PASSWORD123",
        // email:"fjgallardo97@gmail.com"
    };
        axios.post(url,config,{headers: {"Access-Control-Allow-Origin": "*"} 
                }).then((res)=> {
            //console.log('esta es la res => ',res)
            resolve(res);
        })
        .catch((err)=> {
            reject(err)
            console.log('ERROR => ',err)
        })
    });

};

// TODO: Esto me lo llevo a otra function
 function singup(username,email,password,passwordConfirm){
    return new Promise(async (resolve,reject) => {
        //TODO: Primero chekear la confirmacion de contraseña
        const err = 'INVALID PASSWORD'
        console.log(password,passwordConfirm, 'password !== passwordConfirm: ',password !== passwordConfirm)
        if(password !== passwordConfirm){
            reject(err)
        }
        email = _.toLower(email)
        username = _.toLower(username)

        const url =`${process.env.REACT_APP_API_URL}/players`;
        let config = {    
            name:username,
            password:password,
            email:email
        };
        
        axios.post(url,config,{headers: {"Access-Control-Allow-Origin": "*"} 
                }).then((res)=> {
            console.log('esta es la res => ',res)
            resolve(res);

        }).catch((err)=> {
            console.log('ERROR => ',err)
            reject(err)

        })
    });

};
 //export default login;
//module.exports = {login};
module.exports = {login,singup};