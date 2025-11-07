import { createSlice } from '@reduxjs/toolkit';

import ProductData from '../../Components/ProductsData/ProductsData.json';

const ProductFilter = createSlice({

  name: "ProductFilter",

  initialState: ProductData,

  reducers: {
    filterBrand: (state, action) => {
     return ProductData.filter(item => item.category === action.payload)
    },
    filterColor: (state, action) => {
      return  ProductData.filter(product => product["description"]["Color"] === action.payload)
    },
    filterPrice: (state, action) => {
      return ProductData.filter(product => product.price > action.payload[0] && product.price < action.payload[1] )
    },
   
  }
});

// Action creators are generated for each case reducer function
export const { filterBrand, filterColor, filterPrice } = ProductFilter.actions;

export default ProductFilter.reducer;
