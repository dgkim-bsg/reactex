import { createAction, handleActions } from "redux-actions";

//액션 타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

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
