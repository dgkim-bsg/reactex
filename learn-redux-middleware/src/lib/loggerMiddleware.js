const loggerMiddleware = (store) => (next) => (action) => {
    //미들웨어 기본 구조
    console.group(action && action.type); //액션 타입으로 log를 그룹화
    console.log("이전상태 : " + store.getState());
    console.log(store);
    console.log("액션 : " + action);
    console.log(action);
    next(action); //다음 미들웨어 또는 리듀서에게 전달
    console.log("다음 상태 : " + store.getState());
    console.log(store);
    console.groupEnd();
};
export default loggerMiddleware;
