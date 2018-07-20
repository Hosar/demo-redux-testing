import { createStore, applyMiddleware } from 'redux';
import rootReducer from './combineReducers';
import thunk from 'redux-thunk';

const ConfigureStore = (initialState) => {
    console.log('initialState ....:');
    console.log(initialState);
    let middleware = applyMiddleware(thunk);
    const store = initialState ?
        createStore(rootReducer, initialState, middleware)
        : createStore(rootReducer, middleware);
    return store;
};

export default ConfigureStore;