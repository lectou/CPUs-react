import React from 'react';
import classNames from 'classnames';

export default function ButtonCart({ circle, id, name,
  image, price, addProductToCart, cube, children }) {

  const clickCart = (e) => {
    e.preventDefault()
    const newObj = {
      id: id,
      name: name,
      imageURL: image,
      price: price,
    }
    addProductToCart(newObj);
  }


  return (
    <button
      className={classNames("btn__cart", { "btn__cart-circle": circle, "btn__cart-cube": cube })}
      onClick={clickCart}
    >
      {children}
    </button>
  )
}
