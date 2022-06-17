import { SHOW_TABLES,SHOW_CURRENT_TABLE } from "../actions";
const initialState = {
    tables: []
}

export function showTables(state = initialState,action){
    switch (action.type) {
        case SHOW_TABLES:
            //return state.concat(action.payload)
            return Object.assign({},state,{tables:action.payload})
        default:
            return state;
    }
}


export function showCurrentTable(state = initialState,action){
    switch (action.type) {
        case SHOW_CURRENT_TABLE:
            //return state.concat(action.payload)
            return Object.assign({},state,{tables:action.payload})
        default:
            return state;
    }
}