import React from 'react';
import classNames from 'classnames';

const Categories = ({ activeCategory, onClickCategory, items }) => {


  return (

    <ul className="categories">
      <li
        onClick={() => onClickCategory(null)}
        className={classNames("categories__item", { "active": activeCategory === null })}
      >All</li>
      {
        items &&
        items.map((item, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={classNames("categories__item", { "active": activeCategory === i })}
            key={`${item.name}_${i}`}
          >{item.name}</li>
        ))
      }
    </ul>
  )
}


export default Categories;