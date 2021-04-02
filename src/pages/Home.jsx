import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Sort, Categories, Productions } from '../components';
import { getProductsData } from '../redux/actions/productions';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { setProductToCart } from '../redux/actions/cart';
import Loader from '../assets/loader/Loader';

const sortIems = [
  { name: 'popular', type: 'popular', order: 'desc' },
  { name: 'price', type: 'price', order: 'desc' },
  { name: 'new', type: 'new', order: 'desc' }
];
const categoryNames = [{ name: "Intel", type: "intel" }, { name: "AMD", type: "amd" }];

export default function Home() {
  const dispatch = useDispatch();
  const productions = useSelector(({ productions }) => productions.items);
  const isLoaded = useSelector(({ productions }) => productions.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const cartItems = useSelector(({ cart }) => cart.items);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const addProductCart = (obj) => {
    dispatch(setProductToCart(obj));
  };

  useEffect(() => {
    dispatch(getProductsData(category, sortBy));
  }, [category, sortBy]);


  return (
    <>
      {
        !isLoaded
          ? <div className="home">
            <div className="home__top">
              <Categories
                activeCategory={category}
                onClickCategory={onSelectCategory}
                items={categoryNames}
              />
              <Sort
                onClickSortType={onSelectSortType}
                items={sortIems}
                activeSortType={sortBy.type}
              />
            </div>
            <div className="productions">
              {productions.map(el => (
                <Productions
                  key={el.id}
                  product={el}
                  addProductCart={addProductCart}
                  currentCount={cartItems[el.id] && cartItems[el.id].items.length}
                />
              ))}
            </div>
          </div>
          : <Loader />
      }
    </>
  )
}
