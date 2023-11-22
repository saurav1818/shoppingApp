import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../types/types'

type LikeProducts = {
  value: any[]
}
export const likeProducts = createSlice({
  name: 'like',
  initialState: {
    value: []
  } as LikeProducts,
  reducers: {
    addToLikeProducts: (state, action: PayloadAction<any>) => {
      const productExists = state.value.some(item => item.id === action.payload.id);
      if(!productExists)
      state.value.push(action.payload)
    },
    removeFromLikeProducts: (state, action: PayloadAction<any>) => {
      state.value = state.value.filter(prod => prod.id !== action.payload.id);
    }
  }
})

export const { addToLikeProducts, removeFromLikeProducts } = likeProducts.actions

export default likeProducts.reducer