import React from 'react'
import './carrito.css'
import Producto from "./productos";


const Carrito = ({carrito, agregarProducto}) =>  ( 

    <div className='carrito'>
        <h2>Tu carrito de compras</h2>
        {carrito.length === 0
        ?
            <p>No hay productos</p>

        :   carrito.map(producto => (
            < Producto 
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        ))}
    </div>

 );
 
export default Carrito;