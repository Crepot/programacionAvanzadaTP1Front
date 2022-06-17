import { combineReducers, createStore, applyMiddleware } from 'redux';
import { showTables } from './tables';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    tables: showTables
});

const storeWithMiddleWare = applyMiddleware(thunk)(createStore)
const store = storeWithMiddleWare(rootReducer)

export default store;



// export default ;