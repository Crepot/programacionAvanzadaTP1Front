import getTables from '../api/table/getTables'
import getOneTable from '../api/table/getOneTable'

export const SHOW_TABLES ='SHOW_TABLES' 
export const SHOW_CURRENT_TABLE ='SHOW_CURRENT_TABLE'


export function showTables(token) {
    return (dispatch, getState) => {
        getTables(token).then((res)=>{
            console.log('res.data.tables => ',res.data.tables);
            dispatch({type: SHOW_TABLES, payload:res.data.tables});
        }).catch((err) => {
            console.log(err)
        })
    }
}

export function showCurrentTable(token){
    return (dispatch, getState) => {
        getOneTable(token).then((res) => {
            dispatch({type: SHOW_CURRENT_TABLE, payload:res.data.table})
        }).catch((err) => {
            console.log(err)
        })
    }
}