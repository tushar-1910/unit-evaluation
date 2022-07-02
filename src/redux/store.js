import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import { movieReducer } from './reducer'
import thunk from 'redux-thunk'

export const store = createStore(movieReducer,applyMiddleware(thunk))
