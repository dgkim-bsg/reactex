import React from 'react';
const UnderChildComponent = (props) => {
    return (
        <div>
            <p>UnderChildComponent</p>
            <input type="text" value={props.count} readOnly></input>
        </div>
    );
};

export default UnderChildComponent;