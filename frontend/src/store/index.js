import rootReducers from './reducers/index';
import {createStore, applyMiddleware, compose}  from 'redux';
import thunk from 'redux-thunk';


export function configureStore() {
    const store = createStore(
        rootReducers,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
}