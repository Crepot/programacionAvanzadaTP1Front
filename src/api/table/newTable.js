const axios = require('axios');
const _ = require('lodash')

function newTable(token){
    return new Promise(async (resolve,reject) => {
        console.log('este es el token para new table =>', token)
        const url =`${process.env.REACT_APP_API_URL}/table`;
        let config = {  
            tableToken:token,
            statusGame:0
        };
        
        axios.post(url,config,{headers: {"Access-Control-Allow-Origin": "*"} 
                }).then((res)=> {
            // console.log('esta es la res => ',res)
            resolve(res);

        }).catch((err)=> {
            console.log('ERROR => ',err)
            reject(err)

        })
    });

};
module.exports = {newTable};
