const axios = require('axios');



export default function setSquareValue(token,tableId,square){
    return new Promise(async (resolve,reject) => {
        // console.table(token,positionId,tableId,positions)
        const url =`${process.env.REACT_APP_API_URL}/table/${tableId}/player`;

        const data = {
            move_number:square,
        };
        let headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };


        axios.post(url,data,{headers}).then((res) => {
            console.log('resta es la respuesta de asignar los valores => ',res.data)
            if(res.status === 200){
                const data = res.data;
                resolve(data);
            }

        }).catch((err) => {
            reject(err);
        })
    });
}

