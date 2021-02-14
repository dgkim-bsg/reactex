import React from 'react';
const TopChildComponent = (props) => {
    return (
        <div>
            <p>TopChildComponent</p>
            <input type="text" value={props.count} readOnly/>
            <button onClick={props.onClickAction}>추가</button>
        </div>
    );
};

export default TopChildComponent;