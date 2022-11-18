import { createSlice } from '@reduxjs/toolkit'


const initialState = {

    Products: [],
    TotalPrice: 0,
    TotalQuantity: 0
}
export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        individualProduct: (state, action) => {
            return { ...state, product: action.payload }
        },
        addToCart: (state, action) => {
            const check = state.Products.find((prevProd) => prevProd.id === action.payload.id)
            if (check) {
                return state
            } else {
                const product = action.payload
                return {
                    ...state,
                    Products: [...state.Products, action.payload],
                    TotalPrice: state.TotalPrice + product.discountPrice * product.quantity,
                    TotalQuantity: state.TotalQuantity + product.quantity,
                }
            }
        },
        increment: (state, action) => {
            let product = action.payload;
            console.log(product);
            // return {
            //     ...state,
            //     Products: [...state.Products],
            //     TotalPrice: state.TotalPrice + product.discountPrice,
            //     TotalQuantity: state.TotalQuantity + 1
            // }
        }

        // case "INCREMENT":
        //     product = action.payload.product;
        //     TQuantity = state.TotalQuantity + 1;
        //     TPrice = state.TotalPrice + product.discountPrice
        //     product.quantity += 1
        //     return { ...state, products: [...state.products], TotalPrice: TPrice, TotalQuantity: TQuantity }
        //     break;

        // case "DECREMENT":
        //     product = action.payload.product;
        //     if (product.quantity > 1) {
        //         product.quantity -= 1
        //         TQuantity = state.TotalQuantity - 1;
        //         TPrice = state.TotalPrice - product.discountPrice
        //         return { ...state, products: [...state.products], TotalPrice: TPrice, TotalQuantity: TQuantity }
        //     } else {
        //         return state;
        //     }
        //     break;
    },
})

export const { individualProduct, addToCart, increment } = cartSlice.actions

export default cartSlice.reducer