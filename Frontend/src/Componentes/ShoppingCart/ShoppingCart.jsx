import React from 'react';
import './ShoppingCart.css'

export const ShoppingCart = ({ items, removeFromCart }) => {
  // Verificar si items existe y es un array
  if (!items || !Array.isArray(items)) {
    return (
      <div className="error-page">
        <div className="error-box">
          <h2 className="cambioColorError">Carrito de Compras</h2>
          <p className="textoNegro1">No hay elementos en el carrito</p>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <h2 className="cambioColorError">Carrito de Compras</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div className="cart-item">
              <span className="textoNegro1">{item.name}</span>
              <span className="textoNegro2">${item.price}</span>
              <button className="botonLuisError" onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
