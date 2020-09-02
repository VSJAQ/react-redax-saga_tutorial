import {CREATE_POST, FETCH_POST, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post,
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    }
}

export function showAlert(text) {
    return {
        type: SHOW_ALERT,
        payload: text,
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT,
    }
}

export function fetchPost(post) {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        dispatch({ type: FETCH_POST, payload: json })
        dispatch(hideLoader())
    }
}