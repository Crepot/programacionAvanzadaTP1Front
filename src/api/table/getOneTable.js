const axios = require('axios');
const _ = require('lodash')


/*En este método vamos a consumir La tabla, los players y las posiciones, para devolverlo todo junto */
export default function getOneTable(token,tableId){
    return new Promise(async (resolve,reject) => {
        // console.log('TOKEN PARA GET TABLES =>', token)
        let url =`${process.env.REACT_APP_API_URL}/table/${tableId}`;
        const headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };

        //Get one table
        axios.get(url,{headers}).then((res)=> {
            // get table players
            let table = {
               table: res.data.table,
            }
            // console.log('Este es el objeto de la table',table)
            url =`${process.env.REACT_APP_API_URL}/table/${tableId}/players`;
            axios.get(url,{headers}).then((res) => {
                table.players = res.data && res.data.players
                // get table positions
                url =`${process.env.REACT_APP_API_URL}/table/${tableId}/positions`;
                axios.get(url,{headers}).then((res) => {

                    table.positions = res.data && res.data.positions
                    resolve(table);

                }).catch((err) => {
                    console.log('ERROR => ',err)
                    reject(err)    
                })
            }).catch((err) => {
                console.log('ERROR => ',err)
                reject(err)
            })


            // resolve(res);
        }).catch((err)=> {
            console.log('ERROR => ',err)
            reject(err)

        })
    });

};