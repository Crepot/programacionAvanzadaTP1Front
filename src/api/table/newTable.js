const axios = require('axios');

function newTable(token){
    return new Promise(async (resolve,reject) => {
        const url =`${process.env.REACT_APP_API_URL}/table`;
        let headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };
        let data = {  
            status_game:0
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
