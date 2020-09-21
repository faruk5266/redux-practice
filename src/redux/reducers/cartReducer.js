import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";




const initialState = {
    cart: [],
    products: [
        { name: 'lenovo laptop', id: 1},
        { name: 'asus laptop', id: 2},
        { name: 'samsung laptop', id: 3},
        { name: 'hp laptop', id: 4},
        { name: 'delcora laptop', id: 5},   
        { name: 'toshiba laptop', id: 6},
    ]    
}

const cartReducer = ( state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId : action.id,
                name : action.name,
                cartId : state.cart.length + 1
            }
            const newCart = [...state.cart, newItem]
        return {...state, cart: newCart}

        case REMOVE_FROM_CART:
            const id = action.id
            const remainingCart = state.cart.filter(item => item.cartId !== id)  ;
            return {...state, cart: remainingCart}

        default:
            return state;
    }
}
export default cartReducer;