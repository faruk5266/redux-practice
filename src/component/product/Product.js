import React from 'react';

const Product = (props) => {
    const{addToCart, product} = props
    return (
        <div style={{border: '3px solid green'}}>
            <h5>{product.name}</h5>
            <button onClick={() => addToCart(product.id, product.name)}>Add to cart</button>
        </div>
    );
};

export default Product;