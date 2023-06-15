import '../../assets/css/Cart.css';

// -- cart component
const MyCart = (props) => {
    const { data } = props;
    return (
        <>
            <div className="cart-styles">
                <div key={data.id}>
                    <h2>ID: {data.id}</h2>
                    <h5>TITLE: {data.title}</h5>
                    <p>COMPLETED: {data.completed ? "TRUE" : "FALSE"}</p>
                </div>

            </div>
        </>
    )
}

export default MyCart;