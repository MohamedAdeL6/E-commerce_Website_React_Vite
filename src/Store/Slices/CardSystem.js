import { createSlice } from '@reduxjs/toolkit';

import ProductData from '../../Components/ProductsData/ProductsData.json';

const CartSystem = createSlice({

  name: "ProductSlice",

  initialState: ProductData,

  reducers: {
    
  }

});

// Action creators are generated for each case reducer function
export const { filterBrand } = CartSystem.actions;

export default CartSystem.reducer;




