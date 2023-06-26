import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid'

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: (product, action) => {
        let newProduct = {
            id: uuidv4(),
            title: "",
            publisher: "", 
            genre: "",
            price: 0    
          }
        // inserts object into the index=0 of the state array
        let addArray = [
            newProduct,
            ...product
        ];
        return addArray // return to useReducer, which sets the state
    },
    removeProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    getProducts: (state, action) => {
        return action.payload
    },

    addStore: (product, action) => {
        let payloadArr = action.payload.map(element => {
            return {
                    id: element.id,
                    title: element.gameTitle,
                    publisher: element.publisherName,
                    genre: element.genre,
                    price: element.MSRP
                    }
        })
        // console.log(payloadArr)
        return [...payloadArr, ...product]
    }
  },
});

export const { addProduct, removeProduct, updateProduct, getProducts, addStore } = productsSlice.actions;
export default productsSlice.reducer;