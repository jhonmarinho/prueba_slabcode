import React, { Component } from "react";

export default class Campo_select extends Component {
  render() {
    const opciones = this.props.opciones;
    const nombre = this.props.nombre;
    const onChange = this.props.onChange;

    return (
      <div>
        <select
          onChange={onChange}
          name={nombre}
          className=" px-5 py-2 h-10 w-full border-gray-200 border-2 rounded-md"
        >
          <option defaultValue={"Selecciona..."}>Selecciona...</option>
          {opciones.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>
    );
  }
}

export class InputTexto extends Component {
  render() {
    const altura = this.props.alturapx;
    const nombre = this.props.nombre;
    const onChange = this.props.onChange;
    const value = this.props.value;
    const type = this.props.type;
    const step = this.props.step;
    const placeholder = this.props.placeholder;

    return (
      <div className="text-base mb-6 w-full">
        <input
        placeholder={placeholder}
          type={type}
          step={step}
          value={value}
          name={nombre}
          onChange={onChange}
          className="px-5 py-2 w-full border-gray-200 border-2 rounded-md"
          style={{ height: { altura } }}
        ></input>
      </div>
    );
  }
}
