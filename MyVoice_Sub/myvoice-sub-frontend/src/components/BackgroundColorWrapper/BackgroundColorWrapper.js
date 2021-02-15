import React, { useState } from "react";
import {
    BackgroundColorContext,
    backgroundColors,
} from "../../contexts/BackgroundColorContext";

const BackgroundColorWrapper = (props) => {
    const [color, setColor] = useState(backgroundColors.blue);

    const changeColor = (color) => {
        setColor(color);
    };

    return (
        <BackgroundColorContext.Provider value={{ color: color, changeColor: changeColor }}>
            {props.children}
        </BackgroundColorContext.Provider>
    );
};

export default BackgroundColorWrapper;
