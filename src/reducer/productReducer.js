import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CLEAR_ERROR } from "../constant/productConstant"


export const productReducer = (state={products:[]}, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:

            return {
                loading: true,
                product: []
            }

        case ALL_PRODUCT_SUCCESS:

            return {
                loading: false,
                product: action.payload.products,
                productsCount: action.payload.productsCount
            }
        case ALL_PRODUCT_FAIL:

            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERROR:

            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}