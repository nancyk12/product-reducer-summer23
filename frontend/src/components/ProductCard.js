import React, { useState } from 'react'


const ProductCard = (props) => {

    const [editBtn, setEditBtn] = useState(props.price === 0 ? true : false);

    const [editProduct, setEditProduct] = useState({
        id: props.id,
        title: props.title,
        publisher: props.publisher,
        genre: props.genre,
        price: props.price
    })

    const onChangeHandler = (e) => {
        (e.target.name === 'price') ?
            setEditProduct({
              ...editProduct,
              [e.target.name]: Number.parseFloat(e.target.value).toFixed(2)  
              // [e.target.name]: e.target.value.toLocaleString(undefined, { style: "currency", currency: "USD" })
            })
            :
            setEditProduct({
              ...editProduct,
              [e.target.name]: e.target.value // title: e.target.value
            })
      }
    
      const saveProduct = () => {
        props.editProduct(editProduct)
        setEditBtn(false)
      }

  return (
    <div className='product-card'>
      <h2><u>{props.title}</u></h2>
      {
        editBtn ? 
        (
            <div>
                <lable htmlFor="title">Title: </lable>
                <input 
                  type="text"
                  name="title"
                  value={editProduct.title}
                  onChange={onChangeHandler}
                />
                <br/>
                <lable htmlFor="publisher">Publisher: </lable>
                <input 
                  type="text"
                  name="publisher"
                  value={editProduct.publisher}
                  onChange={onChangeHandler}
                />
                <br/>
                <lable htmlFor="genre">Genre: </lable>
                <input 
                  type="text"
                  name="genre"
                  value={editProduct.genre}
                  onChange={onChangeHandler}
                />
                <br/>
                <lable htmlFor="price">Price:  </lable>
                <input 
                  type='number'
                  name='price'
                  step='.01'
                  min='0.01'
                  value={editProduct.price}
                  onChange={onChangeHandler}
                />
                <br/>
                <button onClick={saveProduct}>Save Edits! </button>
                {/* same as below */}
                {/* <button onClick={() => {
                    props.editProduct(editProduct)
                    setEditBtn(false)
                    }}>Save Edits! </button> */}
            </div>
        )
        : 
        (
        <React.Fragment>
          <p>Publisher: {props.publisher}</p>
          <p>Genre: {props.genre}</p>
          <p>Price: ${props.price}</p>
        </React.Fragment>
        )}

      <button onClick={() => setEditBtn(!editBtn)}>Edit</button>
      {/* <button onClick={() => props.editProduct(editProduct)}>Edit!</button> */}

      <button onClick={() => props.deleteProduct(props.id)}>Delete!</button>
      
      
    </div>
  )
}

export default ProductCard;
