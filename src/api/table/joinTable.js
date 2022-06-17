const axios = require('axios');

function joinTable(token,tableId,playerId){
    return new Promise(async (resolve,reject) => {
        //TODO: asigno el player a la tabla
        const url =`${process.env.REACT_APP_API_URL}/table/${tableId}`;
        const data = {
            table:{
                playerId:playerId
                }
        };
        let headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };
        axios.patch(url,data,{headers}).then((res) => {
            resolve(res.data);

        }).catch((err) => {
            reject(err);
        })
    });

};

module.exports = {joinTable};
