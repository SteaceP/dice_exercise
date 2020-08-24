import React, { Component } from "react";

class Die extends Component {
  render() {
    return (
      <div>
        <i className={this.props.face[this.props.random]}></i>
      </div>
    );
  }
}

export default Die;
