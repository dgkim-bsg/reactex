import React from "react";
import "./App.css";
import TopComponent from "./TopComponent";
import UnderComponent from "./UnderComponent";
import {CountContextProvider} from "./context/CountContext";

function App() {
    return (
        <CountContextProvider>
            <div>
                <p>App.js</p>
                <TopComponent />
                <UnderComponent />
            </div>
        </CountContextProvider>
    );
}

export default App;
