const SquareStyling = {
    background: 'gray',
    border: '1px',
    marginLeft: '2px',
    height: '90px',
    width: '90px',
}

export const Square = (props) => {
    return (
        <button
            style={SquareStyling}
            onClick={props.onClick}
        > {props.value}
        </button>
    )
}
