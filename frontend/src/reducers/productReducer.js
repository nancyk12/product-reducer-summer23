import {v4 as uuidv4} from 'uuid';

export default function productReducer(product, action) {
    switch (action.type) {
        case 'delete-product':
           // remove an object from the array
           // filter the array looking for the id 
           console.log(action.id)

           // const filteredArray = product.filter((element) => element.id !== action.id);
           let filteredArray = product.filter((element) => element.id === action.id ? false : true);
           return filteredArray;
        case 'edit-product':
            // take in the edited object (action.editedObj) and replace the original with it.    
            // map through product state, if element.id matches the edited obj id, replace it, else return orginal
            // let editedArray = product.map(element => {
            //     if (element.id === action.id) {
            //         return action.editedObj;
            //     } else {
            //         return element;
            //     }
            // })

            let editedArray = product.map(element => element.id === action.editedObj.id ? action.editedObj : element);
            return editedArray;  
        case 'add-product':
            let newProduct = {
                id: uuidv4(),
                title: "",
                publisher: "",
                genre: "",
                price: 0
            }
            let addArray= [
                newProduct,
                ...product,    
            ]; //temp
            return addArray;
            

        default:
            alert('No matching types!');
            return product;
    }
}