const axios = require('axios');

function joinTable(token,tableId,playerId){
    return new Promise(async (resolve,reject) => {
        //TODO: asigno el player a la tabla
        const url =`${process.env.REACT_APP_API_URL}/table/${tableId}/player`;

        let headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };
        axios.patch(url,{},{headers}).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    });

};

module.exports = {joinTable};
