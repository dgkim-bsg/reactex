import React from 'react';
import TopChildComponent from "./TopChildComponent";
const TopComponent = (props) => {
    const onClickAction = (count) => {
        props.onClickAction(count);
    };
    return (
        <div>
            <p>TopComponent</p>
            <TopChildComponent onClickAction={onClickAction}/>
        </div>
    );
};

export default TopComponent;