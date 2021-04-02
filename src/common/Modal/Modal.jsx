import React from 'react';

export default function Modal({ activeModal, children }) {
  return (
    <div className="modal">
      <div className="modal__block">
        <div className="modal__top">
          <div className="modal__title">New comment</div>
          <button onClick={() => activeModal(false)} className="modal__close" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="black" width="18px" height="18px">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  )
}
