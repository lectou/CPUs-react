import React, { useCallback } from 'react';
import cartIcon from '../assets/cart.png';
import { useSelector, useDispatch } from 'react-redux';
import { setProductToCart, plusCartItem, minusCartItem, deleteCartItem, deleteAllItems } from '../redux/actions/cart';
import { CartItem } from '../components';
import Back from '../common/ButtonBack/Back';

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
  const arrayOfProductions = Object.keys(items).map((key) => {
    return items[key].items[0];
  });


  const onPlusItem = useCallback((id) => {
    dispatch(plusCartItem(id));
  });

  const onMinusItem = useCallback((id) => {
    dispatch(minusCartItem(id));
  });

  const deleteItem = useCallback((id) => {
    if (window.confirm('Are you shure!')) {
      dispatch(deleteCartItem(id));
    }
  });
  const deleteAllItem = useCallback(() => {
    if (window.confirm('Are you shure!')) {
      dispatch(deleteAllItems());
    }
  });

  return (
    <div className="cart">
      <Back />
      <div className="cart__top" style={arrayOfProductions.length > 0 ? { display: "flex" } : { display: "none" }}>
        <div>
          <div className="cart__price">
            <span>Total price: </span>{totalPrice}
          </div>
          <div className="cart__price">
            <span>Total count: </span>{totalCount}
          </div>
        </div>
        <button className="btn btn-buy">
          buy
        </button>
        <button className="btn btn-delete" onClick={deleteAllItem}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f2f2f"
            width="24px" height="24px"><path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
          </svg>
          <span>delete all</span>
        </button>
      </div>

      <div className="cart__icon" style={arrayOfProductions.length > 0 ? { display: "none" } : { display: "block" }}>
        <img src={cartIcon} alt="cart" />
      </div>
      <div className="cart__productions-list">
        {arrayOfProductions.map(el => (
          <CartItem
            key={el.id} {...el}
            onPlusItem={onPlusItem}
            onMinusItem={onMinusItem}
            totalCount={items[el.id].items.length}
            totalPrice={items[el.id].totalPrice}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  )
}

export default Cart;
