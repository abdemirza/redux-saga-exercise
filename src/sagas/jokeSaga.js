import { put, takeEvery, takeLatest } from "redux-saga/effects";

// ...
const getJoke = async () => {
  const res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
  const result = await res.json();
  console.log(result);
  return result.joke;
};
// Our worker Saga: will perform the async increment task
function* fetchJoke() {
  try {
    const joke = yield getJoke();
    console.log(joke)
    yield put({ type: "UPDATE_JOKE_SUCCESS", payload: joke });
  } catch (e) {
    yield put({ type: "UPDATE_JOKE_FAILED", message: e.message });
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* jokeSaga() {
  yield takeLatest("UPDATE_JOKE", fetchJoke);
}

export default jokeSaga;
