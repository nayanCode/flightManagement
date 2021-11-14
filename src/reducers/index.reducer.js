import { combineReducers } from "redux"
import detailsReducer from "./details.reducer"
import infoReducer  from "./info.reducer"

const rootReducer= combineReducers({
    details: detailsReducer,
    info: infoReducer

});

export default rootReducer;