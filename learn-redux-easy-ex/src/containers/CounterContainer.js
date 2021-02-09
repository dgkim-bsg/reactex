import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increase, decrease }) => {
    console.log("number : " + number);
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

export default connect(
    state => ({
        number: state.counter.number
    }),
    {
        increase,
        decrease
    }
)(CounterContainer);