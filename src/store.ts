import {createStore, Store} from 'redux';


export const initialStateObject = {

};

export function initializeStore(initialState: any): Store {
    return createStore(initialState)
}