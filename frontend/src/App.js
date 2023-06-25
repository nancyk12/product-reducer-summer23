import React, { useReducer, useEffect } from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import productReducer from './reducers/productReducer';
import ProductCard from './components/ProductCard';


function App() {
  // const initialState = [
  //   {
  //     id: uuidv4(),
  //     title: "Hogwart's Legacy",
  //     publisher: "Warner Bros.",
  //     genre: "Adventure",
  //     price: 59.99,
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "Destiny 2",
  //     publisher: "Bungie",
  //     genre: "FPS",
  //     price: 29.99
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "The Last of Us",
  //     publisher: "Sony",
  //     genre: "Adventure",
  //     price: 69.99
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "Total War: Warhammer III",
  //     publisher: "Sega",
  //     genre: "Strategy",
  //     price: 49.99
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "Everything, Everywhere, All at Once",
  //     publisher: "A24",
  //     genre: "Action/Adventure",
  //     price: 29.99
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "Dune",
  //     publisher: "Penguin Classics",
  //     genre: "Action/Adventure",
  //     price: 19.99
  //   }

  // ]

  // const [products, dispatch] = useReducer(productReducer, initialState);
  const [product, dispatch] = useReducer(productReducer, []);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('http://localhost:5006/api/products/get-all-products');
      const data = await response.json();
      dispatch({
        type: 'get-products',
        payload: data
      })
    }
    loadData();
  }, [product]);
  

  return (
    <div className="App">
      <h1>Video Game Products</h1>
      <button onClick={
        () => dispatch({
          type: 'add-product'
          })
          }>Add Product</button>
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
              (id) => dispatch({
                type: 'delete-product', 
                id: element.id,
                payload: element.id
              })
            }
            editProduct = {
              (param) => dispatch({
                type: 'edit-product', 
                id: element.id,
                editedObj: param
              })
            }
          />
        )
      })
      }
    </div>
  );
}

export default App;
