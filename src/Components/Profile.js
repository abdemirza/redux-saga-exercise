import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userSaga from "../sagas/userSaga";

function Profile() {
  const { name, age, status, message, joke } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>I am {name}</h1>
      <h1>My age is {age}</h1>
      <h1>My status is {status}</h1>
      <h2>{joke}</h2>
      <button onClick={() => dispatch({ type: "UPDATE_AGE" })}>Update Age</button>
      <button onClick={() =>  dispatch({ type: "UPDATE_NAME"})}>Update Name</button>
      <button onClick={() => dispatch({ type: "UPDATE_STATUS", payload: 'Updated Status' })}>Update Status</button>
      <button onClick={() => dispatch({ type: "UPDATE_JOKE" })}>Get Joke</button>
    </div>
  );
}

export default Profile;
