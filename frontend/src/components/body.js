import React, { Component } from "react";
import Card_onboarding from "./card_onboarding";
import Card_estadisticas from "./card_estadisticas";
import logo_inferior from "../images/Grupo 1671.png"

export default class Body extends Component {
  state = { mostrar_form: false };

  render() {
    return (
      <div className="bg-gray-100 min-h-full">
        <Card_onboarding estadoBody={this.state.mostrar_form} />
        <Card_estadisticas />

        <div className="flex justify-end mx-10"><img src={logo_inferior}></img></div>

      </div>
    );
  }
}
