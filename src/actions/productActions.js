import * as api from '../api/index'

import { ADD_NEW_PRODUCT, FETCH_PPRODUCTS_BY_USER, FETCH_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, START_LOADING, END_LOADING } from './constants'


export const getProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.fetchProduct(id);
      dispatch({ type: FETCH_PRODUCT, payload: { client: data } });
    } catch (error) {
      console.log(error);
    }
  };


export const getProductByUser =(searchQuery) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING })
    const  { data: { data } } = await api.fetchProductByUser(searchQuery.search)
      dispatch({ type: FETCH_PPRODUCTS_BY_USER, payload: data });
      dispatch({ type: END_LOADING })
    } catch (error) {
      console.log(error.response)
      
    }
  }


export const createProduct =(product, openSnackbar) => async (dispatch) => {
    try {
        const { data } = await api.addProduct(product)
        dispatch({ type: ADD_NEW_PRODUCT, payload: data })
        openSnackbar("Product added successfully")
    } catch (error) {
        console.log(error)
    }
}


export const updateProduct =(id, client, openSnackbar) => async (dispatch) => {

  const { data } = await api.updateProduct(id, client)
  dispatch({ type: UPDATE_PRODUCT, payload: data })
  openSnackbar("Product updated successfully")
  try {
      
  } catch (error) {
      console.log(error)
  }
}

export const deleteProduct =(id, openSnackbar) => async (dispatch) => {
  try {
      await api.deleteProduct(id)

      dispatch({type: DELETE_PRODUCT, payload: id})
      openSnackbar("Product deleted successfully")
  } catch (error) {
      console.log(error)
  }
}