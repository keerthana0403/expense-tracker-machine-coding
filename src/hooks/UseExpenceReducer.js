import React, { useReducer } from "react";

const UseExpenceReducer = () => {
  const expenceReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          expences: [...state.expences, action.payload],
        };
      case "DELETE":
        return {
          ...state,
          expences: state.expences.filter(
            (expence) => expence.id !== action.payload
          ),
        };
      //   case "UPDATE":
      //     return {
      //       ...state,
      //       expences: [...state.expences, action.payload],
      //     };
      default:
        break;
    }
  };

  const initialState = {
    expences: [],
  };
  const [state, dispatch] = useReducer(expenceReducer, initialState);

  return { state, dispatch };
};

export default UseExpenceReducer;
