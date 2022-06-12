const axios = require('axios');
const _ = require('lodash')

function getTables(token){
    return new Promise(async (resolve,reject) => {
        console.log('TOKEN PARA GET TABLES =>', token)


        

        const url =`${process.env.REACT_APP_API_URL}/table/`;

        let headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };

        axios.get(url,{headers}).then((res)=> {
            resolve(res);
        }).catch((err)=> {
            console.log('ERROR => ',err)
            reject(err)

        })
    });

};
module.exports = {getTables};