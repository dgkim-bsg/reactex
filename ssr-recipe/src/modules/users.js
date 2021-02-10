import axios from "axios";

// 액션 타입
const GET_USERS_PENDING = "users/GET_USERS_PENDING";
const GET_USERS_SUCCESS = "users/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "users/GET_USERS_FAILURE";

// 액션 생성 함수
const getUsersPending = () => ({
    type: GET_USERS_PENDING,
});
const getUsersSuccess = (payload) => ({
    type: GET_USERS_SUCCESS,
    payload,
});
const getUsersFailure = (payload) => ({
    type: GET_USERS_FAILURE,
    error: true,
    payload,
});

export const getUsers = () => async (dispatch) => {
    try {
        console.log("111");
        dispatch(getUsersPending());
        console.log("222");
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        console.log("333");
        dispatch(getUsersSuccess(response));
    } catch (e) {
        dispatch(getUsersFailure(e));
        throw e;
    }
};
const initialState = {
    users: null,
    user: null,
    loading: {
        users: false,
        user: false,
    },
    error: {
        users: null,
        user: null,
    },
};

// 리듀서 함수
function users(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_PENDING:
            return {
                ...state,
                loading: { ...state.loading, users: true },
            };
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: { ...state.loading, users: false },
                users: action.payload.data,
            };
        case GET_USERS_FAILURE:
            return {
                ...state,
                loading: { ...state.loading, users: false },
                errpr: { ...state.error, users: action.payload },
            };
        default:
            return state;
    }
}
export default users;
