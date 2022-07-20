import React, { Component } from "react";
import logotienda from "../images/NoPath - copia (8)@2x.png";
import carpeta from "../images/Trazado 1232.png";
import localizacion from "../images/Grupo 1826.png";
import tarjetapago from "../images/Trazado 1238.png";
import dominio from "../images/Trazado 1239.png";
import imagen from "../images/Trazado 1233.png";
import ok_image from "../images/Trazado 1235.png";
import regalo from "../images/Trazado 1236.png";
import megafono from "../images/megaphone.png";
import id_image from "../images/Trazado 1138.png";
import Formulario from "./formulario";
import Ok_icon from "./ok_icon";

export default class Card_onboarding extends Component {
  state = {
    mostrar_form: false,
    mostrar_ok_image: false,
    color_crearProducto: "black",
  };

  render() {
    const funcionHandlerBtnCerrar = (data) => {
      this.setState({
        mostrar_form: data,
      });
    };

    const funcionHandlerBtnGuardar = (data) => {
      this.setState({
        mostrar_ok_image: data,
        color_crearProducto: "gray",
      });
    };

    return (
      <div className=" h-56  bg-white shadow-md my-5 mx-10 rounded-md flex">
        <Formulario
          mostrar={this.state.mostrar_form}
          propiedad={funcionHandlerBtnCerrar}
          showIconOk={funcionHandlerBtnGuardar}
        />

        <div className="grid grid-cols-2">
          <div id="Parte1_info_tienda" className=" py-16  pl-4 flex">
            <div
              id="parte1.1_info_tienda"
              className=" p-1 w-24 h-24 flex items-center border-2 border-gray-100 rounded-md shadow-md"
            >
              <img src={logotienda}></img>
            </div>

            <div id="parte1.2_info_tienda" className=" ml-7">
              <ul>
                <li>
                  {" "}
                  <p className=" text-lg font-semibold">
                    Del campo Express
                  </p>{" "}
                </li>
                <li>
                  {" "}
                  <p className=" text-base mt-2">
                    URL de mi tienda en línea:
                  </p>{" "}
                </li>
                <li>
                  {" "}
                  <button
                    className=" text-base text-blue-500 mt-1"
                    href="https://delcampoexpress.viveshops.co"
                  >
                    https://delcampoexpress.viveshops.co
                  </button>{" "}
                </li>
              </ul>
            </div>

            <div id="parte1.3_info_tienda" className=" flex items-center">
              <hr className=" w-24 rotate-90 border-light-gray my-19"></hr>
            </div>
          </div>

          <div id="Parte2_pasos" className=" flex-1">
            <div
              id="Parte2.1_superior"
              className=" h-6 mt-5 mb-6 flex items-center "
            >
              <p className=" text-lg font-semibold ">
                Completa tu cuenta (2/8)
              </p>

              <div className=" w-96 ml-7 mr-8 bg-gray-100 rounded-full h-3 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>

            <div id="Parte2.1_inferior" className="flex">
              <div id="Parte 2.1.1_izquierda" className="flex flex-col">
                <div className=" text-base space-y-3 flex-col">
                  <div className="flex">
                    <div
                      className="flex  items-center cursor-pointer"
                      onClick={() => this.setState({ mostrar_form: true })}
                    >
                      <img src={carpeta}></img>
                      <p
                        className="h-3 w-48 ml-7"
                        style={{ color: this.state.color_crearProducto }}
                      >
                        Crear producto
                      </p>
                    </div>

                    <Ok_icon show={this.state.mostrar_ok_image}></Ok_icon>
                  </div>

                  <div className="flex  items-center">
                    <img src={localizacion}></img>
                    <p className="h-3 w-48 ml-7"> Definir cobertura envíos </p>
                  </div>

                  <div className="flex  items-center">
                    <img src={tarjetapago}></img>
                    <p className="h-3 w-48 ml-7"> Agregar método de pago </p>
                  </div>

                  <div className="flex  items-center">
                    <img src={dominio}></img>
                    <p className="h-3 w-48 ml-7"> Establecer dominio </p>
                  </div>
                </div>
              </div>

              <div id="Parte 2.1.1_derecha" className="flex-col ml-24">
                <div className=" text-base space-y-3 flex-col">
                  <div className="flex align-top">
                    <img src={imagen}></img>
                    <p className=" h-3 w-48 ml-7 text-gray-400">
                      {" "}
                      Definir logo y colores{" "}
                    </p>
                    <img className=" ml-9" src={ok_image}></img>
                  </div>

                  <div className="flex  items-center">
                    <img src={regalo}></img>
                    <p className="h-3 w-48 ml-7  text-gray-400">
                      {" "}
                      Personalizar plantilla{" "}
                    </p>
                    <img className=" ml-9" src={ok_image}></img>
                  </div>

                  <div className="flex  items-center">
                    <img src={megafono}></img>
                    <p className="h-3 w-48 ml-7"> Activar campañas </p>
                  </div>

                  <div className="flex  items-center">
                    <img src={id_image}></img>
                    <p className="h-3 w-48 ml-7"> Completar documentos </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
