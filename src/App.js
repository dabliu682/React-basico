import React, {Fragment, useState } from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Producto from "./componentes/productos";
import Carrito from "./componentes/Carrito";

function App() {

  const [productos, guardarProductos] = useState(
    [
      {id:1, nombre: 'Camisa React.js', precio: 50},
      {id:2, nombre: 'Camisa Vue.js', precio: 40},
      {id:3, nombre: 'Camisa Node.js', precio:30},
      {id:4, nombre: 'Camisa Angular.js', precio: 20},
      {id:5, nombre: 'Camisa Symfony', precio: 10},
    ]
  )

  const [carrito, agregarProducto] = useState([])

  
  // obtener año actual
  let anio = new Date().getFullYear();

  return (
    <Fragment>
      < Header 
        titulo="Tienda virtual"
      />

      <h1>Lista de productos</h1>
      {productos.map(producto =>(
        <Producto 
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      < Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
       />
      
      < Footer 
        anio = {anio}
      />
    </Fragment>
  );
}

export default App;
