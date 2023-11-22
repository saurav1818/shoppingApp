import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../types/types'

type CartState = {
  value: any[]
}
export const addToCart = createSlice({
  name: 'cart',
  initialState: {
    value: []
  } as CartState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      const productExists = state.value.some(item => item.id === action.payload.id);
      if(!productExists)
      state.value.push(action.payload)
    },
    increaseNumOfUnitsOfSpecificProduct: (state, action: PayloadAction<any>) => {
      state.value[action.payload].numOfUnits += 1;
    },
    decreaseNumOfUnitsOfSpecificProduct: (state, action: PayloadAction<any>) => {
      state.value[action.payload].numOfUnits -= 1;
    },
    removeItem: (state, action: PayloadAction<any>) => {
      state.value = state.value.filter((product) => product.id !== action.payload.id);
    },
   
  }
})

export const { addItem, removeItem, increaseNumOfUnitsOfSpecificProduct, decreaseNumOfUnitsOfSpecificProduct } = addToCart.actions

export default addToCart.reducer