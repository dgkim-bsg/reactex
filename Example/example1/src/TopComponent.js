import React from 'react';
import TopChildComponent from "./TopChildComponent";
const TopComponent = (props) => {
    return (
        <div>
            <p>TopComponent</p>
            <TopChildComponent count={props.count} onClickAction={props.onClickAction}/>
        </div>
    );
};

export default TopComponent;