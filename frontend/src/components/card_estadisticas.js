import React, { Component } from "react";
import Card_grafico from "./card_grafico";

export default class Card_estadisticas extends Component {
  render() {
    return (
      <div className=" h-80 bg-white shadow-md my-5 mx-10 rounded-md flex flex-col">
        <div
          id="Seccion1_arriba"
          className=" h-6 mt-6 mx-6 mb-8 flex justify-between "
        >
          <p className=" text-xl font-semibold">Estadísticas</p>
          <select className=" rounded-md border-2 border-gray100 text-sm font-light">
            <option defaultValue={7}>Últimos 7 días</option>
            <option>Último 30 días</option>
            <option>Últimos 90 días</option>
          </select>
        </div>

        <div id="Seccion2_abajo" className="flex justify-between">
          <Card_grafico
            nombre_chart="Visitas"
            data={[
              ["Semana", "Visitas"],
              [1, 100],
              [2, 100],
              [3, 120],
              [4, 80],
              [5, 120],
              [6, 90],
              [7, 100],
            ]}
          />

          <Card_grafico
            nombre_chart="Conversiones"
            data={[
              ["Semana", "Conversiones"],
              [1, 10],
              [2, 13],
              [3, 20],
              [4, 8],
              [5, 25],
              [6, 10],
              [7, 12],
            ]}
          />

          <Card_grafico
            nombre_chart="Tasa de conversión"
            data={[
              ["Semana", "Tasa de conversión"],
              [1, 0.1],
              [2, 0.13],
              [3, 0.1666],
              [4, 0.1],
              [5, 0.208],
              [6, 0.1111],
              [7, 0.12],
            ]}
          />

          <Card_grafico
            nombre_chart="Ventas"
            data={[
              ["Semana", "Ventas"],
              [1, 100],
              [2, 100],
              [3, 120],
              [4, 80],
              [5, 120],
              [6, 90],
              [7, 100],
            ]}
          />
        </div>
      </div>
    );
  }
}
