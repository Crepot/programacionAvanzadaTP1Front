import  { useEffect, useState } from "react";
import getOnePlayer from '../api/players/getOnePlayer'


function usePlayer(token,playerId){
    const [player,setPlayer] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        getOnePlayer(token,playerId).then((res) => {
            // console.log('Este es mi plasher => ',res);
            setPlayer(res.player)
        }).catch((err) => {
            setError(err)
        })
    },[token,playerId])

    return {player,loading,error}
}




export default usePlayer;