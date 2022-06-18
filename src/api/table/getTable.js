const axios = require('axios');
const _ = require('lodash')


/*En este método vamos a consumir La tabla, los players y las posiciones, para devolverlo todo junto */
export default function getTable(token,tableId){
    return new Promise(async (resolve,reject) => {
        // console.log('TOKEN PARA GET TABLES =>', token)
        let url =`${process.env.REACT_APP_API_URL}/table/${tableId}`;
        const headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };
        //Get one table
        axios.get(url,{headers}).then((res)=> {
            //console.log('res => ',res)
            resolve(res.data);
        }).catch((err)=> {
            console.log('ERROR => ',err)
            reject(err)

        })
    });

};