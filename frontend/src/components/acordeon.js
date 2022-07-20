import React, { Component } from "react";
import down from "../images/Trazado 914.png";
import { InputTexto } from "./campos_formulario";

export default class Acordeon extends Component {
  state = { activarAcordeon: false };

  render() {
    const activoAcordeon = this.state.activarAcordeon;
    //titulo del acordeón a minúsculas:
    const titulo = this.props.titulo.toLowerCase();
    const onChange = this.props.onChange;
    return (
      <div className="accordion mt-6 text-base ml-11  mr-12 mb-6 cursor-pointer">
        <div className="accordionHeading mb-0">
          <div
            className="container w-full flex justify-between border-b-2 border-gray items-center h-9"
            onClick={() =>
              this.setState({ activarAcordeon: !this.state.activarAcordeon })
            }
          >
            <p className="ml-4">{this.props.titulo}</p>
            <span>
              {this.state.activarAcordeon ? (
                <img className=" rotate-180" src={down}></img>
              ) : (
                <img src={down}></img>
              )}
            </span>
          </div>

          <div>
            {activoAcordeon ? (
              <div className="accordionContent ml-5 mr-">
                <div className="container mt-2">
                  <div className="flex mt-2 h-10">
                    <InputTexto
                      onChange={onChange}
                      nombre={titulo}
                      placeholder={
                        "Ingrese " + titulo + " para esta variante del producto"
                      }
                    ></InputTexto>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
