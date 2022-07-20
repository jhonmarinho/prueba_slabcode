import React, { Component } from "react";

import image_menu from "../images/Trazado 1820.png";
import image_logo from "../images/Grupo 1528.png";
import image_lupa from "../images/Trazado 1240.png";
import image_ver_sitio from "../images/Trazado 1292.png";
import image_notific from "../images/Trazado 911.png";
import image_usuario from "../images/christopher-campbell-28567-unsplash.png";
import image_desplegable from "../images/Trazado 914@2x.png";

export default class Header extends Component {
  render() {
    return (
      <div
        id="contenedor"
        className="h-20 max-h-20 min-w-full bg-white border-b-2 border-b-gray flex   justify-between  items-center"
      >
        <div id="sección 1" className="flex">
          <div id="sección 1.1" className="flex items-center ">
            <button className=" h-3  w-24 flex justify-center">
              <img alt="menu" src={image_menu}></img>
            </button>
          </div>

          <img alt="logo" className="h-40.74" src={image_logo}></img>
        </div>

        <div id="sección 2" className="flex">
          <div
            id="Sección 2.1"
            className="w-96 h-9 border border-light-gray rounded  flex items-center"
          >
            <img alt="logo" className=" w-7 h-4 pl-3" src={image_lupa}></img>
            <input className="pl-4  w-full mr-2 hover" placeholder="Búsqueda"></input>
          </div>
        </div>

        <div id="sección 3" className="flex items-center justify-center mr-11">
          <div id="sección 3.1" className="flex">
            <button>
              <img
                className=" h-4 w-4"
                alt="ver_sitio"
                href="www.google.com"
                src={image_ver_sitio}
              ></img>
            </button>
            <p className="text-sm font-light  ml-3">Ver sitio</p>
            <button>
              <img
                className="w-17.11 h-19.24 ml-6"
                alt="campana"
                src={image_notific}
              ></img>
            </button>
          </div>

          <hr className=" w-10  h-6 rotate-90 border-light-gray"></hr>
          <img
            className="w-35 h-35 ml-6"
            alt="foto_usuario"
            src={image_usuario}
          ></img>

          <div id="Sección 3.2">
            <h1 className="text-sm font-semibold ml-4">Andrés Suarez</h1>
            <h1 className="text-xs font-normal ml-4">Administrador</h1>
          </div>

          <div id="sección 3.3" className=" ml-4">
            <button>
              {" "}
              <img
                className=" w-4 pl-1"
                alt="desplegable"
                src={image_desplegable}
              ></img>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
