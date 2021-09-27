import { createSlice } from '@reduxjs/toolkit';

// reducer - push data into data-layer
const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation:null,
}
//createSlice automatically generates action creators and action types that correspond to reducers and state - internally uses createAction and createReducer
export const navSlice = createSlice({
    // a name use in action types
    name: 'nav',
    // The initial state for the reducer
    initialState,
    // An object of "case reducers", Key names will be used to generate actions
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        }, // will handle the action type 'nav/setOrigin'
        setDestination: (state, action) => {
            state.destination = action.payload
        }, // will handle the action type 'nav/setDestination'
        settravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        }, // will handle the action type 'nav/settravelTimeInformation'
    },

});

export const { setOrigin, setDestination, settravelTimeInformation } = navSlice.actions;

// Selectors - normal functions which takes the state from redux.store and return the required entities

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;