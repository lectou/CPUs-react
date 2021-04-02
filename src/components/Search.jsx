import React, { useEffect, useState } from 'react';
import { filterList } from '../utils/filterSearch';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function Search() {
  let location = useLocation();
  const [searchText, setSearchText] = useState('')
  const productions = useSelector(({ productions }) => productions.items);

  const searchProductions = filterList(productions, searchText);


  useEffect(() => {
    setSearchText('')
  }, [location.pathname])

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      <svg xmlns="http://www.w3.org/2000/svg" className="search__icon"
        viewBox="0 0 24 24"
        fill="grey" width="20px" height="20px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>


      {searchProductions.length > 0
        ? <ul className="search__window">
          {searchProductions.map(item => (
            <li className="search__item" key={item.id}>
              <Link to={`/product/${item.id}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        : null}

    </div>
  )
}
