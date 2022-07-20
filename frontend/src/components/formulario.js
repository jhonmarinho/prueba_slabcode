import React, { Component } from "react";
import FormularioContenido from "./formularioContenido";

export default class Formulario extends Component {
  render() {
    if (this.props.mostrar) {
      return (
        <div
          id="fondo_form"
          className=" z-50 fixed top-0 left-0 bg-black bg-opacity-60 w-full h-screen
            flex justify-center items-start overflow-auto pb-8  "
        >
          <div
            className=" w-5/12 h-auto bg-white mt-12 px-2 flex-column justify-items-center rounded-md shadow-sm"
            id="wrapper_form"
          >
            <div className="flex justify-end">
              <button
                onClick={() => this.props.propiedad(false)}
                className=" font-semibold"
              >
   
              </button>
            </div>

            <FormularioContenido
              showIconOk={this.props.showIconOk}
              propiedad={this.props.propiedad}
            ></FormularioContenido>
          </div>
        </div>
      );
    }
  }
}
