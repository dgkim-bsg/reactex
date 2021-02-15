import React, { useContext } from "react";
import CountContext from "./context/CountContext";
const TopChildComponent = (props) => {
    const { count, changeCount, changeSumCount } = useContext(CountContext); // CountContext.Consumer
    const sumCountAction = () => {
        changeSumCount(count);
    };
    return (
        <div>
            <p>TopChildComponent</p>
            <input
                type="text"
                value={count}
                onChange={(e) => {
                    changeCount(e.target.value);
                }}
            />
            <button onClick={sumCountAction}>더하기</button>
        </div>
    );
};

export default TopChildComponent;
