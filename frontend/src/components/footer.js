import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="min-h-6 h-6 mt-0 bg-white border-t-1 border-t-gray-200 text-xs text-gray-500 flex justify-between items-center">
        <div className=" ml-10">
          <p>Copyright © 2021 - All rights reserved.</p>
        </div>
        <div className=" mr-11">
          <p>Diseñado y Desarrollado por Vive Tech</p>
        </div>
      </div>
    );
  }
}
