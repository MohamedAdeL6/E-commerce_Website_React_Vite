import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({

  name: "CardSlice",

  initialState: [],

  reducers: {

    addProduct: (state, action) => {

      console.log(action);
      const findProduct = state.find(product => product.id === action.payload.id)
      if (findProduct) {
        return state
      }
      else {
        const productColone = { ...action.payload, quantity : 1 }
        state.push(productColone)
      }   
    },

    deleteProduct: (state, action) => {
      state.splice(
        state.findIndex((val) => {
          return val.id === action.payload.id;
        }),
        1
      );
    },
    //-----------------------------------------
    // anther solution for deleteProduct function
    // deleteProduct : (state, action) => {
    //     return state.filter(product => {
    //         return product.id !== action.payload.id
    //     })
    // },
    //----------------------------------------------

    clearAllCard: (state, action) => {
      return (state = []);
    },

    increaseQuantityProduct : (state, action) => {
      const findProduct = state.find(product => product.id === action.payload.id)
      if (findProduct && findProduct.quantity <= 29) {
        findProduct.quantity += 1
      }
    },
    decreaseQuantityProduct: (state, action) => {
      const findProduct = state.find(product => product.id === action.payload.id)
      if (findProduct && findProduct.quantity >=  1) {
        findProduct.quantity -= 1
      }
      
    },

  },
  
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct, clearAllCard, increaseQuantityProduct, decreaseQuantityProduct } = CardSlice.actions;

export default CardSlice.reducer;
