import axios from 'axios';
import { setAlert } from './alert'

import {
    GET_ACCOUNT_OK,
    GET_ACCOUNT_FAIL,
    UPDATE_ACCOUNT_OK,
    UPDATE_ACCOUNT_FAIL
} from './types';
import { getStoreLocal } from "../../helpers/helpRedux";
export const get_account = () => async dispatch => {
    if (getStoreLocal('access')) {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`
            }
        };

        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/account/user`, config);

            if (res.status === 200) {
                dispatch({
                    type: GET_ACCOUNT_OK,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: GET_ACCOUNT_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: GET_ACCOUNT_FAIL
            });
        }
    }
}

export const update_account = (
    enterprise_form,
    city_form,
    address_line_1_form,
    address_line_2_form,
    district_form,
    zipcode_form,
    phone_form
) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        };

        const body = JSON.stringify({
            enterprise_form,
            city_form,
            address_line_1_form,
            address_line_2_form,
            district_form,
            zipcode_form,
            phone_form
        });

        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/account/update`, body, config);

            if (res.status === 200) {
                dispatch({
                    type: UPDATE_ACCOUNT_OK,
                    payload: res.data
                });
                dispatch(setAlert('Profile updated successfully', 'green'));
            } else {
                dispatch({
                    type: UPDATE_ACCOUNT_FAIL
                });
                dispatch(setAlert('Failed to update profile', 'red'));
            }
        } catch (err) {
            dispatch({
                type: UPDATE_ACCOUNT_FAIL
            });
            dispatch(setAlert('Failed to update profile', 'red'));
        }
    }
}