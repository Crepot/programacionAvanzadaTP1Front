import  { useEffect, useState } from "react";
import getSquares from '../api/table/getSquares'
//  import getOneTable from '../api/table/getOneTable'


function useSquares(token,tablaId){
   const [squares,setSquares] = useState(null);
   useEffect(() =>{
       setInterval(() =>
           // console.log('token,tablaId => ',token,tablaId) &&
           getSquares(token,tablaId).then((res) =>{
                    //console.log('esta es la res del getsquares => ',res)
                    setSquares(res);
           }).catch((err) =>{
                console.log(err) 
           }),
       9000)

   }, [token,tablaId]);
   return {squares}
}

export default useSquares;