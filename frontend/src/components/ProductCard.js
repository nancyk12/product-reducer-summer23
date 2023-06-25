import React, { useState } from 'react'


const ProductCard = (props) => {

    const [editBtn, setEditBtn] = useState(false);

    const [editProduct, setEditProduct] = useState({
        id: props.id,
        title: "I'm edited",
        publisher: props.publisher,
        genre: props.genre,
        price: props.price
    })

    const onChangeHandler = (e) => {
        setEditProduct({
            ...editProduct,
            [e.target.name]: e.target.value // title: target.value
        })
    }

    const saveProduct = () => {
        props.editProduct(editProduct);
        setEditBtn(false);
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
