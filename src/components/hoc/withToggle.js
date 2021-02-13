import React, { Component } from "react";

const withToggle = (WrappedComponent) => {
  return class WithToggle extends Component {
    state = {
      isOpen: false,
    };
    toggle = () => {
      this.setState((state) => ({
        isOpen: !state.isOpen,
      }));
    };
    render() {
      return (
        <>
          <button
            type="button"
            onClick={this.toggle}
            style={{ fontSize: "50px" }}
          >
            {this.state.isOpen ? "ℌ𝔦𝔡𝔢" : "𝔖𝔥𝔬𝔴"}
          </button>
          {this.state.isOpen && <WrappedComponent {...this.props} />}
        </>
      );
    }
  };
};

export default withToggle;
