import React from "react";
import UseExpenceReducer from "../hooks/UseExpenceReducer";

const List = () => {
  const { state } = UseExpenceReducer();
  console.log(state);
  return (
    <div>
      {state.expences.map((expence) => {
        <div>
          <h5>{expence.title}</h5>
        </div>;
      })}
    </div>
  );
};

export default List;
