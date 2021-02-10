import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

//액션 타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

//액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 마우스 클릭 이벤트가 payload안에 들어가지 않도록 () => undifined를 두번째 파라미터로 넣어줌
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
    yield delay(1000); //1초 기다림
    yield put(increase()); //특정 액션 디스패치
}
function* decreaseSaga() {
    yield delay(1000); //1초 기다림
    yield put(decrease()); //특정 액션 디스패치
}

export function* counterSaga() {
    // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해 줌
    yield takeEvery(INCREASE_ASYNC, increaseSaga);

    // takeLatest는 기존에 진행중이던 작업이 있다면 취소처리하고 가장 마지막으로 실행된 작업만 수행
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

//초기 상태
const initialState = 0;

//리듀서 함수
//action 객체를 받았을 때, 데이터를 어떻게 바꿀지 처리할지 정의하는 객체
const counter = handleActions(
    {
        [INCREASE]: (state, action) => state + 1,
        [DECREASE]: (state, action) => state - 1,
    },
    initialState
);

export default counter;
