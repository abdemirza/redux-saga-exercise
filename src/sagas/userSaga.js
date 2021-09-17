import { put, takeEvery,takeLatest } from "redux-saga/effects";

// ...
const getUserName = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await res.json();
  return result[Math.floor(Math.random()*11)].name;
};
// Our worker Saga: will perform the async increment task
function* fetchUser() {
  try {
    const username = yield getUserName();
    yield put({ type: "UPDATE_NAME_SUCCESS", payload: username });
  } catch (e) {
    yield put({ type: "UPDATE_NAME_FAILED", message: e.message });
  }
}
function* changeAge() {
    try {
      const age = Math.floor(Math.random() * 100);
      yield put({ type: "UPDATE_AGE_SUCCESS", payload: age });
    } catch (e) {
      yield put({ type: "UPDATE_AGE_FAILED", message: e.message });
    }
  }

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* userSaga() {
  yield takeLatest("UPDATE_NAME", fetchUser);
  yield takeLatest("UPDATE_AGE", changeAge);
}

export default userSaga;
