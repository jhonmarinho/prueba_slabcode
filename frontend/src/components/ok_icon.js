import React, { Component } from "react";
import ok_image from "../images/Trazado 1235.png";

export default class Ok_icon extends Component {
  render() {
    if (this.props.show === true) {
      return (
        <div>
          <img className="ml-9" src={ok_image}></img>
        </div>
      );
    }
  }
}
