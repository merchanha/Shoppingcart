import React from 'react'

function CartItem({data, delFromCart}) {
    let {id, name, price, quantity} = data;

    return (
        <div>
            <h4>{name}</h4>
            <h5>${price}.00 X {quantity}= ${price * quantity}.00</h5>
            <button onClick={()=> delFromCart(id)}>Delete One</button>
            <button onClick={()=> delFromCart(id, true)}>Delete All</button>
            
        </div>
    )
}

export default CartItem;
