import { createStore, combineReducers } from "redux";
import cantidadReducer from "./amount/reducer";

const reducers = combineReducers({ // se combinan todos los reducers que existan
    cantidadReducer,
});


const store = createStore(reducers
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;