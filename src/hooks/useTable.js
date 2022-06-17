 import  { useEffect, useState } from "react";
 import getOneTable from '../api/table/getOneTable'


 function useTable(token,tablaId){

    const [table,setTable] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() =>{
        setLoading(true)
        setInterval(() =>
            // console.log('token,tablaId => ',token,tablaId) &&
            getOneTable(token,tablaId).then((res) =>{
                 if(res.players.length > 1){
                    setTable(res);
                    }else{
                        return setLoading(false);
                    }
            }).catch((err) =>{
                setError(err)
            }),
        9000)

    }, [token,tablaId]);
    return {table,loading,error}
 }

 export default useTable;