import React, { Component } from "react";
import informacion from "../images/Trazado 1015.png";
import { Chart } from "react-google-charts";

export default class Card_grafico extends Component {
  static propTypes = {};

  render() {
    return (
      <div id="Gráfico_n" className=" w-60 h-52 mx-6">
        <div id="titulo" className="flex items-center">
          <p className=" h-6 text-lg font-light"> {this.props.nombre_chart}</p>
          <img className=" h-4 ml-7" src={informacion}></img>
        </div>

        <Chart
          chartType="LineChart"
          data={this.props.data}
          width="100%"
          height="100%"
          legendToggle
        />
      </div>
    );
  }
}
