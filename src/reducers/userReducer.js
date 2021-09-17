import { createReducer } from "@reduxjs/toolkit";
// export default (state, action)=> {
//   console.log("HEReeee");
//   if (action.type === "UPDATE_AGE") {
//     return {
//       ...state,age: action.payload,
//     };
//   }
//   return state;
// };
const initialState = {
  name: "Ramesh",
  age: 20,
  status: "coder",
  joke : 'Jokes Incoming'
};
export default createReducer(initialState, (builder) => {
  builder.addCase("UPDATE_AGE_SUCCESS", (state, action) => {
    state.age = action.payload;
  });
  builder.addCase("UPDATE_NAME_SUCCESS", (state, action) => {
    state.name = action.payload;
  });
  builder.addCase("UPDATE_JOKE_SUCCESS", (state, action) => {
    state.joke = action.payload;
  });
  builder.addCase('UPDATE_STATUS', (state, action) => {
    state.status = action.payload;
  });
});
