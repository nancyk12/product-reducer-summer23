export default function productReducer(product, action) {
    switch (action.type) {
        case 'delete-product':
        // remove an object from the array
        // filter the array looking for the id 
        console.log(action.id)
            break;

        default:
            alert('No matching types!');
            return product;
    }
}