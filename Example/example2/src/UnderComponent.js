import React from "react";
import UnderChildComponent from "./UnderChildComponent";
const UnderComponent = (props) => {
    return (
        <div>
            <p>UnderComponent</p>
            <UnderChildComponent />
        </div>
    );
};

export default UnderComponent;
