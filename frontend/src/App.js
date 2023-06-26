import React, {useReducer, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, addStore, addProduct, updateProduct, removeProduct } from './redux/productsSlice';
import { useSelector } from 'react-redux';


import './App.css';
// import {v4 as uuidv4} from 'uuid'
// import productReducer from './reducers/productReducer'
import ProductCard from './components/ProductCard';

function App() {
  const product = useSelector(state => state.products);
  // const [product, dispatch] = useReducer(productReducer, [])
  const dispatch = useDispatch ();

 useEffect(() => {
  const loadData = async () => {
      const response = await fetch('http://localhost:5006/api/products/get-all-products')
      const data = await response.json()
      console.log(data)
      // dispatch({
      //   type: 'get-products',
      //   payload: data
      // })
      dispatch (getProducts(data));
    }
    loadData()
   }, [dispatch]);
   
  const getAPIdata = async () => {
    const response = await fetch('http://localhost:5006/api/store/list-products')
    const data = await response.json()
    dispatch(addStore(data));
  }
  
    return (
      <div className="App">
        <h1>Video Game Products</h1>
        <button onClick={
          () => dispatch(addProduct())
        }>Add Product</button>
  
        <button onClick={getAPIdata}>API</button>
        
        {
          product.map((element) => {
            return (
            <ProductCard
              key={element.id}
              id={element.id}
              title={element.title}
              publisher={element.publisher}
              genre={element.genre}
              price={element.price}
              deleteProduct = {
                (id) => dispatch(removeProduct(id))
              }
              editProduct = {
                (param) => dispatch(updateProduct(param))
              }
            /> 
            )
          })
       }
      </div>
    );
  }
  
  export default App;