import { call, put, takeLatest, all } from 'redux-saga/effects';
import Api from '../api/api';

function* fetchRates(action) {
    try {
        const rates = yield call(Api.fetchRates);
        yield put({ type: 'RATES_FETCHED_SUCCESS', rates });
    } catch (e) {
        yield put({ type: 'RATES_FETCHED_FAIL', err: e.message });
    }
}

function* mySaga() {
    yield takeLatest('RATES_FETCH_REQUEST', fetchRates);
}

export default function* rootSaga() {
    yield all([mySaga()]);
}
