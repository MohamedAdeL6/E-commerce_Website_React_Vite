import { configureStore } from '@reduxjs/toolkit';
import CardSlice from '../Slices/CardSlice';
import CardSystem from '../Slices/CardSystem';
import ProductFilter from '../Slices/ProductFilter'


export const store = configureStore({
  reducer: {
    card : CardSlice,
    CardSystem: CardSystem,
    ProductFilter: ProductFilter,
  },
})
