import React, { Component } from "react";

class ScrollBox extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = document.getElementById("testDivId");

        document.getElementById("testDivId").scrollTop = scrollHeight - clientHeight;
    };
    render() {
        const style = {
            border: "1px solid black",
            height: "300px",
            width: "300px",
            overflow: "auto",
            position: "relative",
        };

        const innerStyle = {
            height: "650px",
            width: "100%",
            background: "linear-gradient(white, black)",
        };

        return (
            <div
                id="testDivId"
                style={style}
                ref={(ref) => {
                    this.box = ref;
                }}
            >
                <div style={innerStyle}></div>
            </div>
        );
    }
}

export default ScrollBox;
