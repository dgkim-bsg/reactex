import React from "react";
import "./App.css";
import TopComponent from "./TopComponent";
import UnderComponent from "./UnderComponent";
import { CountContextProvider } from "./context/CountContext";

import * as testtest from "./test/Test.js";

function App() {
    const test = testtest.default.value;
    const test1 = testtest.testTwo.value;
    const sumTest = testtest.sumTest();
    
    return (
        <>
            <CountContextProvider>
                <div>
                    <p>App.js</p>
                    <TopComponent />
                    <UnderComponent />
                </div>
                <div>{test}</div>
                <div>{test1}</div>
                <div>{sumTest}</div>
            </CountContextProvider>
        </>
    );
}

export default App;
