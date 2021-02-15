import React, { useContext } from "react";
import CountContext from "./context/CountContext";

const UnderChildComponent = (props) => {
    const { sumCount } = useContext(CountContext); // CountContext.Consumer
    return (
        <div>
            <p>UnderChildComponent</p>
            <input type="text" value={sumCount} readOnly></input>
        </div>
    );
};

export default UnderChildComponent;
