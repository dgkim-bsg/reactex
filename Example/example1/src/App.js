import React, { useState } from "react";
import "./App.css";
import TopComponent from "./TopComponent";
import UnderComponent from "./UnderComponent";

function App() {
    const [totalCnt, setTotalCnt]  = useState(0);
    const onClickAction = (count) => {
        console.log(count);
        setTotalCnt(totalCnt + Number(count));
    };
    return (
        <div>
            <p>App.js</p>
            <TopComponent onClickAction={onClickAction} />
            <UnderComponent count={totalCnt}/>
        </div>
    );
}

export default App;
