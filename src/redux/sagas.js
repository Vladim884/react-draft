import {call, put, takeEvery} from 'redux-saga/effects';
import { LOAD_DATA } from './types';
import {putData} from './actions'

function fetchData(){
    return fetch('http://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json());
}

function* loadDataWorker() {
    const data = yield call(fetchData); // !!! function object!
    yield put(putData(data));
}

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, loadDataWorker);
}