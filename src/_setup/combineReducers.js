import { combineReducers } from 'redux';
import greetingReducer from '../components/Greeting/greeting.reducer';

const rootReducer = combineReducers(
    {        
        greeting: greetingReducer
    }
);

export default rootReducer;