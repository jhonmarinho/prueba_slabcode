import React, { Component } from "react";
import { InputTexto } from "./campos_formulario";
import Campo_select from "./campos_formulario";
import imagen_carga from "../images/Trazado 1233@2x.png";
import { Formik } from "formik";
import Acordeon from "./acordeon";
import imagen_añadir from "../images/Trazado 1755.png";

export default class FormularioContenido extends Component {
  render() {
    return (
      <div className="grid grid-cols-4">
        <div className="flex justify-end col-span-4">
          <button
            onClick={() => this.props.propiedad(false)}
            className="text-3xl font-extralight mr-2 mt-1"
          >
            x
          </button>
        </div>

        <div className="flex justify-center mt-6 mb-6 text-xl font-bold col-span-4">
          {" "}
          Crear producto
        </div>

        <div className=" col-span-4">

        <Formik
       
       onSubmit={(values) => {
         console.log(values);
         //Mostrar el Icono de crear producto en verde || ocultar el modal del formulario
         this.props.showIconOk(true) || this.props.propiedad(false);
       }}
       initialValues={{
         categoria: "",
         titulo: "",
         descripcion: "",
         descripcion_pro: "",
         cantidad: "",
         sku: "",
         moneda: "",
         precio: "",
         peso: "",
         alto: "",
         ancho: "",
         profundo: "",
         fotos: "",
         talla: "",
         color: "",
         sabor: "",
       }}
       validate={(values) => {
         const errors = {};

         if (!values.titulo) {
           errors.titulo = "Se requiere ingresar el título";
         }
         if (!values.descripcion) {
           errors.descripcion = "Se requiere ingresar descripción";
         }
         if (!values.precio) {
           errors.precio = "Se requiere ingresar el precio";
         }
         if (values.precio < 0) {
           errors.precio = "El precio debe ser mayor a cero";
         }

         if (!values.talla && !values.color && !values.sabor) {
           errors.variantes =
             "Se requiere una o más variantes para el producto";
         }

         return errors;
       }}
     >
       {({ handleSubmit, handleChange, errors }) => (
         <form onSubmit={handleSubmit}>
           <div
             id="contenedor información del producto"
             className="mt-6 text-base ml-11  mr-12 mb-6 grid grid-cols-4"
           >
             <div className="mt-6 text-lg mb-4 font-bold col-span-4 ">
               {" "}
               Información del producto
             </div>

             <div id="categoria" className="col-span-4">
               <p className=" mb-2">Categoria</p>

               <Campo_select
                 onChange={handleChange}
                 nombre="categoria"
                 opciones={[
                   "Casa y jardín",
                   "Entretenimiento",
                   "Ropa y accesorios",
                   "Familia",
                   "Electrónica",
                   "Pasatiempos",
                   "Vehículos",
                 ]}
               />
             </div>

             <div className="mt-6 col-span-4 " id="Título">
               <p className=" mb-2">Título</p>

               <InputTexto
                 type="text"
                 onChange={handleChange}
                 alturapx="40 px"
                 nombre="titulo"
               />

               {errors.titulo ? (
                 <small className=" mt-0 text-red-600">
                   {errors.titulo}
                 </small>
               ) : (
                 ""
               )}
             </div>

             <div className="mt-6 col-span-4 " id="Descripción">
               <p className=" mb-2">Descripción</p>

               <InputTexto
                 type="text"
                 onChange={handleChange}
                 nombre="descripcion"
                 alturapx="40 px"
               />

               {errors.descripcion ? (
                 <small className=" mt-0 text-red-600">
                   {errors.descripcion}
                 </small>
               ) : (
                 ""
               )}
             </div>

             <div className="mt-6 col-span-4" id="DescripciónPro">
               <p className=" mb-2">Descripción Pro</p>

               <InputTexto
                 type="text"
                 onChange={handleChange}
                 nombre="descripcion_pro"
                 alturapx="80 px"
               />
             </div>
           </div>

           <Acordeon titulo="Talla" onChange={handleChange}></Acordeon>
           <Acordeon titulo="Color" onChange={handleChange}></Acordeon>
           <Acordeon titulo="Sabor" onChange={handleChange}></Acordeon>

           {errors.variantes ? (
             <small className=" ml-11 mb-8 mt-0 text-red-600">
               {errors.variantes}
             </small>
           ) : (
             ""
           )}
           <div className="mt-8 flex justify-center items-center text-blue-600 cursor-pointer">
             <img className=" h-4 mr-4" src={imagen_añadir}></img>Agregar
             grupo de toppings
           </div>

           <div
             id="contenedor_precio_y_disponibilidad"
             className="mt-6 text-base ml-11  mr-12 mb-6 grid grid-cols-4"
           >
             <div className="mt-6 text-lg mb-4 font-bold col-span-4">
               {" "}
               Precio y disponibilidad
             </div>

             <div id="cantidadysku" className="flex col-span-4">
               <div id="cantidad">
                 <p className=" mb-2">Cantidad</p>

                 <InputTexto
                   type="number"
                   onChange={handleChange}
                   nombre="cantidad"
                   alturapx="40 px"
                 />
               </div>

               <div id="sku" className="ml-12">
                 <p className=" mb-2 ">SKU</p>

                 <InputTexto
                   type="text"
                   onChange={handleChange}
                   nombre="sku"
                   alturapx="40 px"
                 />
               </div>
             </div>

             <div id="monedayprecio" className="flex col-span-4">
               <div id="moneda">
                 <p className=" mb-2">Moneda</p>

                 <InputTexto
                   type="text"
                   onChange={handleChange}
                   nombre="moneda"
                   value="Pesos colombianos"
                   alturapx="40 px"
                   style="disabled"
                 />
               </div>

               <div id="precio" className="ml-12">
                 <p className=" mb-2">Precio</p>

                 <InputTexto
                   type="number"
                   step={0.01}
                   alturapx="40 px"
                   onChange={handleChange}
                   nombre="precio"
                 />

                 {errors.precio ? (
                   <small className=" mt-0 text-red-600">
                     {errors.precio}
                   </small>
                 ) : (
                   ""
                 )}
               </div>
             </div>
           </div>

           <div
             id="contenedor_dimensiones"
             className="mt-6 text-base ml-11  mr-12 mb-6 grid grid-cols-4"
           >
             <div className="mt-6 text-lg mb-4 font-bold col-span-4 sm:col-span-1 md:col-span-2"> Dimensiones</div>

             <div className="flex col-span-4">
               <div id="peso flex">
                 <p className=" mb-2 ">Peso</p>

                 <div className="flex items-center">
                   <InputTexto
                     type="number"
                     alturapx="40 px"
                     onChange={handleChange}
                     nombre="peso"
                   />
                   <p className=" mx-2"> Grs</p>
                 </div>
               </div>

               <div id="alto">
                 <p className=" mb-2">Alto</p>

                 <div className="flex items-center">
                   <InputTexto
                     type="number"
                     alturapx="40 px"
                     onChange={handleChange}
                     nombre="alto"
                   />
                   <p className=" mx-2"> cm</p>
                 </div>
               </div>

               <div id="ancho">
                 <p className=" mb-2">Ancho</p>

                 <div className="flex items-center">
                   <InputTexto
                     type="number"
                     alturapx="40 px"
                     onChange={handleChange}
                     nombre="ancho"
                   />
                   <p className=" mx-2"> cm</p>
                 </div>
               </div>

               <div id="profundo">
                 <p className=" mb-2">Profundo</p>

                 <div className="flex items-center">
                   <InputTexto
                     type="number"
                     alturapx="40 px"
                     onChange={handleChange}
                     nombre="profundo"
                   />
                   <p className=" mx-2"> cm</p>
                 </div>
               </div>
             </div>
           </div>

           <div
             id="contenedor_fotos"
             className="mt-6 text-base ml-11  mr-12 mb-6"
           >
             <div className="mt-6 text-lg mb-4 font-bold">
               {" "}
               Fotos del producto
             </div>
             <div id="">
               {" "}
               <p className=" text-justify">
                 <b>Importante:</b> Las imágenes son el componente más
                 importantes de un buen e-commerce. Por favor cargue imágenes
                 de buena calidad y tamaño. Le recomendamos usar estándares
                 de proporción 4:3 y color de fondo unificado.
               </p>
             </div>

             <div
               className=" p-6 mt-4 w-full border-4 border-gray
                    border-dashed rounded-md h-52 text-gray-600"
               id="zona de carga"
             >
               <div className="flex justify-center">
                 <img className=" h-14 mb-6" src={imagen_carga}></img>
               </div>
               <div className="flex justify-center">
                 <p>Arrastra los archivos aquí</p>
               </div>
               <div className="flex justify-center">
                 <p>o</p>
               </div>
               <div className="flex justify-center">
                 <label
                   className=" rounded-md border-blue-600 border-2
                      w-48 h-8 px-1 text-blue-600 text-center pb-2"
                 >
                   Selecciona archivos<input hidden type="file"></input>
                 </label>
               </div>
             </div>
           </div>

           <div className=" h-10 mb-10 items-center justify-end ml-11 mr-12">
             <button
               onClick={() => this.props.propiedad(false)}
               className=" h-10 text-blue-900 w-40 text-sm hover:border-2
                    border-blue-900 rounded-md"
             >
               CANCELAR
             </button>
             <button
               type="submit"
               className=" h-10 ml-10 w-40  bg-blue-900 text-white
                 text-sm rounded-md hover:border-2"
             >
               GUARDAR
             </button>
           </div>
         </form>
       )}
     </Formik>

        </div>
        
      </div>
    );
  }
}
