import React, { Component } from "react";
import propTypes from "prop-types";

class MyComponent extends Component {
    static defaultProps = {
        name: "Default Name",
        children: <b>default Children</b>,
    };
    static propTypes = {
        name: propTypes.string,
        favoriteNumber: propTypes.number.isRequired,
    };
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                <div>props : {name}</div>
                <div>Children : {children}</div>
                <br />
                좋아하는숫자 : {favoriteNumber}
            </div>
        );
    }
}

export default MyComponent;
