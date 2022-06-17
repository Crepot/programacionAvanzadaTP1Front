const axios = require('axios');
// const _ = require('lodash')

function newTable(token){
    return new Promise(async (resolve,reject) => {
        console.log('este es el token para new table =>', token)
        const url =`${process.env.REACT_APP_API_URL}/table`;
        let headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };
        let data = {  
            tableToken:token,
            statusGame:0
        };
        
        axios.post(url,data,{headers}).then((res)=> {
            resolve(res.data);
        }).catch((err)=> {
            console.log('ERROR => ',err)
            reject(err)

        })
    });

};

module.exports = {newTable};
