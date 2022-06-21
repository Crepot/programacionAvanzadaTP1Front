 import  { useEffect, useState } from "react";
 import getTable from '../api/table/getTable'


 function useTable(token,tablaId){

    const [table,setTable] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() =>{
        setLoading(true)
        setInterval(() =>
            // console.log('token,tablaId => ',token,tablaId) &&
            getTable(token,tablaId).then((res) =>{
                // console.log('res.players => ',res.players)
                 if(res.players.length > 1){
                    setTable(res);
                    }else{
                        return setLoading(false);
                    }
            }).catch((err) =>{
                setError(err)
            }),
        900)

    }, [token,tablaId]);
    return {table,loading,error}
 }

 export default useTable;