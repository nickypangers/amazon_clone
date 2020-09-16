import React, { createContext, useContext, useReducer } from "react";

// prepare data layer
export const StateContext = createContext();

// Wrap our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from data layer
export const useStateValue = () => useContext(StateContext);
