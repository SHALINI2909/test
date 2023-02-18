import axios from "axios";
import {GET_PRODUCTS_LOADING, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS} from "./product_type";
import {GET_SINGLE_PRODUCTS_LOADING, GET_SINGLE_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCTS_ERROR} from "./product_type";

export const getProducts=() => async(dispatch) =>{

    
    dispatch({type:GET_PRODUCTS_LOADING})
    try{
        let response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
        console.log(response.data.data)
        dispatch({type: GET_PRODUCTS_SUCCESS, payload: response.data.data})

    }catch(err) {
        dispatch({type: GET_PRODUCTS_ERROR})
    }
}

export const getSingleProducts=(id) => async(dispatch) =>{

    
    dispatch({type:GET_SINGLE_PRODUCTS_LOADING})
    try{
        let response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
        console.log(response.data.data)
        dispatch({type: GET_SINGLE_PRODUCTS_SUCCESS, payload: response.data.data})

    }catch(err) {
        dispatch({type: GET_SINGLE_PRODUCTS_ERROR})
    }
}

