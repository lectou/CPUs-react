import { productAPI, commentAPI } from '../../api/api';
import { SET_LOADER, SET_PRODUCT, CLEAR_DATA, NEW_COMMENT } from '../actionsTypes/actionsTypes';


const onLoader = (payload) => ({
  type: SET_LOADER,
  payload,
});

const setPtoduct = (product) => ({ type: SET_PRODUCT, product });
export const clearData = () => ({ type: CLEAR_DATA });
const setNewCommentData = (comment) => ({ type: NEW_COMMENT, comment });


export const newCommentData = (comment) => dispatch => {
  commentAPI.setComment(comment)
    .then(() => dispatch(setNewCommentData(comment)))
    .catch(() => alert("Error commwnt"))
}

export const getProductData = (id) => dispatch => {

  dispatch(onLoader(true));
  productAPI.product(id)
    .then((data) => {
      dispatch(setPtoduct(data));
    })

}