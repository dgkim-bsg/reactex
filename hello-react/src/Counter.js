import React, { Component } from "react";

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0,
    };
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h1>안바뀜 : {fixedNumber}</h1>
                <button
                    onClick={() => {
                        this.setState({
                                number : number + 1
                            },
                            () => {
                                console.log(this.state);
                                console.log("함수 실행되어 나온 값 : " + this.state.number);
                            }
                        );
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}
export default Counter;
