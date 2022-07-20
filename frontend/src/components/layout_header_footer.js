import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";

export default class Layout_header_footer extends Component {
  render() {
    return (
      <div className=" flex flex-col min-h-screen">
        <Header className=" " />

        <Body className="flex-grow" />

        <Footer className=" mt-auto min-w-full " />
      </div>
    );
  }
}
