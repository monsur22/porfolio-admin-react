import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk  from 'redux-thunk'
import {composeWithDevTools}  from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, } from './reducers/userReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})
const userinfoFromStoreage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin : { userInfo: userinfoFromStoreage},
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;