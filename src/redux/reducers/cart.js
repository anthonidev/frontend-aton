import {
    ADD_ITEM,
    GET_ITEMS,
    UPDATE_ITEM,
    REMOVE_ITEM,
    EMPTY_CART,
    ADD_ITEM_OK,
    ADD_ITEM_FAIL,
    GET_ITEMS_OK,
    GET_ITEMS_FAIL,
    UPDATE_ITEM_OK,
    UPDATE_ITEM_FAIL,
    REMOVE_ITEM_OK,
    REMOVE_ITEM_FAIL,
    EMPTY_CART_OK,
    EMPTY_CART_FAIL,
    SYNCH_CART_OK,
    SYNCH_CART_FAIL
} from '../actions/types';

const initialState = {
    items: null,
    amount: 0.00,
    total_items: 0
};

import { getStoreLocal, setStoreLocal, removeStoreLocal } from "../../helpers/helpRedux"


export default function Cart(state = initialState, action) {
    let cart = []
    let amount = 0
    let total_items = 0
    const { type, payload } = action;
    let data = []
    switch (type) {
        case ADD_ITEM_OK:
        case GET_ITEMS_OK:
        case UPDATE_ITEM_OK:
        case REMOVE_ITEM_OK:
            return {
                ...state,
                items: payload.cart,
                amount: payload.total_cost,
                total_items: payload.total_items
            };
        case ADD_ITEM_FAIL:
        case GET_ITEMS_FAIL:
        case UPDATE_ITEM_FAIL:
        case REMOVE_ITEM_FAIL:
        case EMPTY_CART_OK:
        case EMPTY_CART_FAIL:
            return {
                ...state,
                items: null,
                amount: 0.00,
                total_items: 0
            };
        case ADD_ITEM:
        case UPDATE_ITEM:
            setStoreLocal('cart', JSON.stringify(payload));


            if (getStoreLocal('cart')) {
                cart = JSON.parse(getStoreLocal('cart'))
                cart = JSON.parse(cart)
                cart = cart[0]

                cart.map(item => {
                    amount += parseFloat(item.product.price) * parseFloat(item.count);
                });
                total_items = cart.length

            }
            return {
                ...state,
                items: cart,
                amount: parseFloat(amount),
                total_items: total_items
            };
        case GET_ITEMS:
            if (getStoreLocal('cart')) {
                cart = JSON.parse(getStoreLocal('cart'))
                cart = JSON.parse(cart)
                cart = cart[0]
                
            }
            return {
                ...state,
                items: cart,
                amount: parseFloat(payload[1]),
                total_items: payload[2]
            };
        case REMOVE_ITEM:
            setStoreLocal('cart', JSON.stringify(payload));
            if (getStoreLocal('cart')) {
                cart = JSON.parse(getStoreLocal('cart'))
                cart = JSON.parse(cart)
                cart = cart[0]
                cart.map(item => {
                    amount += parseFloat(item.product.price) * parseFloat(item.count);
                });
                total_items = cart.length
            }
            return {
                ...state,
                items: cart,
                amount: parseFloat(amount),
                total_items: total_items
            };



        case EMPTY_CART:
            removeStoreLocal('cart');
            return {
                items: null,
                amount: 0.00,
                compare_amount: 0.00,
                total_items: 0
            };
        case SYNCH_CART_OK:
        case SYNCH_CART_FAIL:
            return {
                ...state
            };
        default:
            return state;
    }
}