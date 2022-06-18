import getTables from '../api/table/getTables'

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
