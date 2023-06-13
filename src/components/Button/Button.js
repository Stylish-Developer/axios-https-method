// -- Button component
const MyButton = (props) => {
    const { onClick, label, type } = props;
    return (
        <>
            <button type={type} onClick={onClick}>
                {label}
            </button>
        </>
    )
}

export default MyButton;