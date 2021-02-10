import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import loadable from "@loadable/component";

const SplitMe = loadable(() => import("./SplitMe"), {
    fallback: <div>loading...</div>,
});
const App = () => {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(true);
    };
    const onMouseOver = () => {
        SplitMe.preload(); // 마우스를 올리는 시점에 클라이언트 브라우저에 SplitMe 파일을 불러옴
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p onClick={onClick} onMouseOver={onMouseOver}>
                    hello React!
                </p>
                {visible && <SplitMe />}
            </header>
        </div>
    );
};

export default App;
