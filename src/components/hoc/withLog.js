import React, { Component } from "react";

const withLog = (WrappedComponent) => {
  return class WithLog extends Component {
    componentDidMount() {
      console.log(this.props);
      console.log(`${WrappedComponent.name}`);
    }

    render() {
      return (
        <>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withLog;
