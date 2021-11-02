import React, { Component } from "react";

function ComponetWrapper(WrapperComponent) {
    class Wrapper extends Component {
        render() {
            return <WrapperComponent {...this.props}/>
        }
    }
    return Wrapper;
}