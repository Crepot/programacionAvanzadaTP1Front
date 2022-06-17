import updateTable from '../table/updateTable';
//  http://127.0.0.1:3000/api/v1/positions/632
const axios = require('axios');
// const updateTable = require('../table/updateTable');

function assingValues(data,positions){
    console.log('keys',Object.keys(positions))
    console.log('data de positions === >',positions)
    const keys = Object.keys(positions)
    keys.forEach(k => {
       let key = `box${k}`
       data[key] = positions[k];
    })
    //console.log('\n\n\n\n vamos a ver que onda esta data ===> \n\n\n\n',data)
    return data
    // positions.forEach(e => {
    //     console.log('valorr e => ',e)
    // });
}


export default function setSquareValue(token,positionId,tableId,positions,moveNumber){
    return new Promise(async (resolve,reject) => {
        // console.table(token,positionId,tableId,positions)
        //console.log('TODO ESTO ES LO QUE LLEGA AL SET SQUARES => ',token,positionId,tableId,positions)
        const url =`${process.env.REACT_APP_API_URL}/positions/${positionId}`;
        const data = {
            table_id:tableId,
        };
        let headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };
        console.log('esta es la data que voy a mandar => ',data)
        assingValues(data,positions);
        axios.patch(url,data,{headers}).then((res) => {
            console.log('resta es la respuesta de asignar los valores => ',res.data)
            
            
            if(res.status === 200){
                //console.log('el estatus es 200, incrementar el contador') 
                const data = res.data.positions;
               updateTable(token,tableId,moveNumber).then(() => {
                resolve(data);
               });
            }
            //TODO: CUANDO ME DEVUELVA LA RTA TENGO QUE INCREMENTAR, PERO ESO LO PUEDO HACER EN EL BACK CON ALGÚN MÉTODO

        }).catch((err) => {
            reject(err);
        })
    });
}

