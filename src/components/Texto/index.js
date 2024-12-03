import "./Texto.css"

const Texto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default Texto;