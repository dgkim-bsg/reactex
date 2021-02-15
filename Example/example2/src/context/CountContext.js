import { createContext, useState } from "react";

const CountContext = createContext({ count: 0 });

export const CountContextProvider = (props) => {
    const [count, setCount] = useState(0);
    const [sumCount, setSumCount] = useState(0);
    const changeCount = (cnt) => {
        setCount(cnt);
    };

    const changeSumCount = (cnt) => {
        setSumCount(sumCount + Number(cnt));
    };
    
    return (
        <CountContext.Provider value={{ count: count, changeCount: changeCount, sumCount:sumCount, changeSumCount : changeSumCount }}>
            {props.children}
        </CountContext.Provider>
    );
};

export default CountContext;
