import React from 'react';
import ReactStars from 'react-stars';
import { format } from 'date-fns'

export default function Comments({ items }) {

  return (
    <>
      {items.length > 0
        ? <ul className="comments__list">
          {items.map(item => (
            <li
              key={item.id}
              className="comment"
            >
              <div className="comment__top">
                <span className="comment__title">{item.name}</span>
                <span
                  style={{ color: "grey", fontSize: "1.2rem" }}
                  className="date"
                >
                  {format(new Date(item.date), 'dd/MM/yy')}
                </span>
              </div>
              <ReactStars
                count={5}
                value={item.rating}
                size={20}
                edit={false}
                color2={'#ffd700'}
              />
              <p className="comment__text">{item.text}</p>
            </li>
          ))}
        </ul>
        : <div className="comments__no-comments">No comments</div>
      }
    </>
  )
}
