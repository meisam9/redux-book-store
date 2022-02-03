export const Button = (props) => {
    return <button className="btn btn-primary" onClick={props.onClick}>add {props.name}</button>
}