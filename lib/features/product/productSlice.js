import { createSlice } from '@reduxjs/toolkit'
import { PRODUCTS } from '@/data/products'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: PRODUCTS,
    },
    reducers: {
        setProduct: (state, action) => {
            state.list = action.payload
        },
        clearProduct: (state) => {
            state.list = []
        }
    }
})

export const { setProduct, clearProduct } = productSlice.actions

export default productSlice.reducer