import React from "react";
import TopChildComponent from "./TopChildComponent";
const TopComponent = (props) => {
    return (
        <div>
            <p>TopComponent</p>
            <TopChildComponent />
        </div>
    );
};

export default TopComponent;
