import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/reducers';
import middlewares from './middlewares/middlewares'

import { updateTheme } from './middlewares/themes.middleware.js';

import { persistedState, saveState } from './persisted.store.js';

export default function configureStore() {

    const store = createStore(
        reducers,
        persistedState, // second argument overrides the initial state
        applyMiddleware(
            ...middlewares,
            thunkMiddleware
        )
    );

    // add a listener that will be invoked on any state change
    store.subscribe(() => {
        saveState(store.getState());
    });

    // Update the initial theme
    updateTheme(store.getState())

    return store;

}