import "./Button.css";

export default function Button(props) {
    return (
        <button className="botao">
            {props.children}
        </button>
    )
}