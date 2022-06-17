const axios = require('axios');

export default function updateTable(token,tableId,moveNumber){
    return new Promise(async (resolve,reject) => {
        // console.table(token,positionId,tableId,positions)

        const url =`${process.env.REACT_APP_API_URL}/table/${tableId}`;
        const data = {
            table:{ 
                moveNumber:moveNumber+1
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
}

