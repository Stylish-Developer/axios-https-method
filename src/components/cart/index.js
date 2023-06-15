// -- cart component

import MyCart from "./Cart";

const Cart = (props) => {
    const { children } = props;

    console.log("children",children);
    return (
        <>
            <MyCart data={children}/>
        </>
    )
}

export default Cart;