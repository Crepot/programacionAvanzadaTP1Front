const axios = require('axios');

export default function getOnePlayer(token,id){
    return new Promise(async (resolve,reject) => {
        // console.log('process.env.REACT_APP_API_URL = ',process.env.REACT_APP_API_URL)
        const headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };
        const url =`${process.env.REACT_APP_API_URL}/players/${id}`;
        axios.get(url,{headers}).then((res)=> {
            // console.log('esta es la res del getOnePlayer => ',res)
            resolve(res.data);
        })
        .catch((err)=> {
            reject(err)
            console.log('ERROR => ',err)
        })
    });

};

