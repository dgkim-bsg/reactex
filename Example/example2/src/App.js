import React from "react";
import "./App.css";
import TopComponent from "./TopComponent";
import UnderComponent from "./UnderComponent";
import { CountContextProvider } from "./context/CountContext";

import Test, {testTwo, sumTest} from "./test/Test.js";

function App() {
    const test = Test.value;
    const test1 = testTwo.value;
    
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
                <div>{sumTest()}</div>
            </CountContextProvider>
        </>
    );
}

export default App;
