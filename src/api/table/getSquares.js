
const axios = require('axios');



/**/
export default function getSquares(token,tableId,){
    return new Promise(async (resolve,reject) => {
        let url =`${process.env.REACT_APP_API_URL}/table/${tableId}/positions`;
        const headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };
        axios.get(url,{headers}).then((res)=> {
            resolve(res.data.positions);
        }).catch((err)=> {
            console.log('ERROR => ',err)
            reject(err)

        })
    });

};