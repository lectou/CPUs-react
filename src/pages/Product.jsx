import React, { useEffect, useCallback, useState } from 'react';
import ReactStars from 'react-stars';
import ButtonCart from '../common/ButtonCart';
import { useSelector, useDispatch } from 'react-redux';
import { getProductData, clearData, newCommentData } from '../redux/actions/productPage';
import { useLocation } from "react-router-dom";
import Loader from '../assets/loader/Loader';
import { setProductToCart } from '../redux/actions/cart';
import Modal from '../common/Modal/Modal';
import * as Yup from 'yup';
import { Formik } from 'formik';
import InputForm from '../common/InputForm/InputForm';
import TextareaForm from '../common/TextareaForm/TextareaForm';
import { Comments } from '../components';
import Back from '../common/ButtonBack/Back';
import { allRating } from '../utils/allRating';


export default function Product() {
  const dispatch = useDispatch();
  let location = useLocation();



  const cartItems = useSelector(({ cart }) => cart.items);

  const { image, name, price, specifications, rating, id,
    comments, isLoaded } = useSelector(({ productPage }) => productPage);

  const [activeModal, setActiveModal] = useState(false);
  const [starRating, setStarRating] = useState(1);

  let currentCount = cartItems[id] && cartItems[id].items.length

  let path = location.pathname.split("/product/")[1];

  let resultRating = rating && allRating(rating);

  const addProductCart = useCallback((obj) => {
    dispatch(setProductToCart(obj));
  }, []);

  useEffect(() => {
    dispatch(getProductData(Number(path)));
    return function cleanup() {
      dispatch(clearData());
    }
  }, [path]);


  const newComment = {
    name: null,
    text: null,
    rating: starRating,
    date: new Date(),
    id: Math.random().toString(36).substr(2, 9),
    CPUsId: id
  }

  const setNewComment = (name, text) => {
    newComment.name = name;
    newComment.text = text;
    dispatch(newCommentData(newComment));
  }
  return (
    <>
      {
        !isLoaded
          ? <>
            <Back />
            <div className="product">
              <div className="product__top">
                <div className="left">
                  <h2 className="product__title">{name}</h2>
                  <ReactStars
                    count={5}
                    value={resultRating}
                    size={40}
                    edit={false}
                    color2={'#ffd700'}
                  />
                </div>
                <div className="product__price">
                  <span>{price}$</span>
                  <ButtonCart
                    id={id}
                    name={name}
                    image={image}
                    price={price}
                    addProductToCart={addProductCart}
                    cube >
                    <span className="count">
                      {currentCount > 0 ? currentCount : '0'}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"
                      width="28px" height="28px"><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none" />
                      <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />
                    </svg>
                    <span className="text">Buy</span>
                  </ButtonCart>
                </div>
              </div>
              <div className="product__image">
                <img src={image} alt="product" />
              </div>
              <div className="product__specifications">
                <h3>Specifications</h3>
                <div className="product__item"><span>Cores</span><span>{specifications.cores}</span></div>
                <div className="product__item"><span>Threads</span><span>{specifications.threads}</span></div>
                <div className="product__item"><span>Processor Base Frequency</span><span>{specifications.baseFrequency}</span></div>
                <div className="product__item"><span>Max Turbo Frequency</span><span>{specifications.turboFrequency}</span></div>
                <div className="product__item"><span>Bus Speed</span><span>{specifications.busSpeed}</span></div>
                <div className="product__item"><span>TDP</span><span>{specifications.TDP}</span></div>
                <div className="product__item"><span>Lithography</span><span>{specifications.lithography}</span></div>
                <div className="product__item"><span>Memory Types</span><span>{specifications.memoryTypes}</span></div>
                <div className="product__item"><span>Processor Graphics</span><span>{specifications.processorsGPU}</span></div>
              </div>
              <div className="product__comments comments">
                <div className="comments__top">
                  <h3 className="comments__title">Comments</h3>
                  <button className="btn btn__cube btn-green" onClick={() => setActiveModal(true)}>
                    <svg className="btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                    </svg>
                  Add comment
                  </button>
                </div>
                <Comments items={comments} />
              </div>
            </div>
          </>
          : <Loader />
      }
      {activeModal
        ? <Modal activeModal={setActiveModal} >
          <ReactStars
            count={5}
            value={1}
            onChange={setStarRating}
            size={40}
            edit={true}
            color2={'#ffd700'} />

          <Formik
            initialValues={{
              name: "",
              text: ""
            }}
            validationSchema={Yup.object({
              name: Yup.string().trim()
                .max(30, 'Maximum allowed characters is 30')
                .required("Error!"),
              text: Yup.string().trim()
                .max(1000, 'Maximum allowed characters is 1000')
                .required("Error!"),
            })}
            onSubmit={(values, { resetForm }) => {
              setActiveModal(false);
              setNewComment(values.name, values.text);
              resetForm();
            }}
          >
            {({
              dirty,
              touched,
              errors,
              isValid,
              values,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
              <form className="posts__form" onSubmit={handleSubmit} >
                <div className="form__block">

                  <InputForm
                    name="name"
                    type="text"
                    value={values.name}
                    placeholder="You name..."
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                  <TextareaForm
                    name="text"
                    value={values.text}
                    placeholder="New comment..."
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn__cube btn-green"
                  disabled={!(isValid && dirty)}
                >Add</button>

              </form>

            )}
          </Formik>
        </Modal>

        : null}
    </>
  )
}
