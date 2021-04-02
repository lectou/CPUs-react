import React from 'react'

const CartItem = React.memo(({ name, imageURL, id, onPlusItem, onMinusItem,
  deleteItem, totalCount }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__wrapper">
        <div className="cart-item__image">
          <img src={imageURL} alt="item" />
        </div>
        <h3 className="cart-item__title">{name}</h3>
      </div>
      <div className="cart-item__buttons">
        <div className="cart-item__count">
          <button className="btn btn-round" onClick={() => onMinusItem(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="18px"
              height="18px"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 13H5v-2h14v2z" />
            </svg>
          </button>
          <b>{totalCount}</b>
          <button className="btn btn-round" onClick={() => onPlusItem(id)} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="18px"
              height="18px"><path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
        </div>
        <button onClick={() => deleteItem(id)} className="btn btn-icon cart-item__delete">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="26px"
            height="26px"><path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
          </svg>
        </button>
      </div>
    </div>
  )
});

export default CartItem;
