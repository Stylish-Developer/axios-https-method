import MyButton from "./Button";

// -- Button Primary component
const Button = (props) => {
    const { onClick, label, type } = props;
    return (
        <>
            <MyButton onClick={onClick} label={label} type={type} />
        </>
    )
}

export default Button;