import {takeEvery, put, call} from "@redux-saga/core/effects";
import {hideLoader, showAlert, showLoader} from "./actions";
import {FETCH_POST, REQUEST_POSTS} from "./types";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put({type: FETCH_POST, payload})
        yield put(hideLoader())
    } catch (e) {
        yield put(showAlert('Что-то пошло не так'))
        yield put(hideLoader())
    }
}

async function fetchPosts() {
    const response = await fetch('ttps://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}