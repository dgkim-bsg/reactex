import React, { useState } from "react";
import "./App.css";
import TopComponent from "./TopComponent";
import UnderComponent from "./UnderComponent";

function App() {
    const [count, setCount] = useState(0);
    const [totalCnt, setTotalCnt]  = useState(0);
    const onClickAction = () => {
        setCount(count + 1);
        setTotalCnt(totalCnt + (count + 1));
    };
    return (
        <div>
            <p>App.js</p>
            <TopComponent count={count} onClickAction={onClickAction } />
            <UnderComponent count={totalCnt}/>
        </div>
    );
}

export default App;
