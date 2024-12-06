import "./Texto.css"

const Texto = (props) => {

    const onDigit = (e) => {
        props.onModify(e.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={onDigit} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default Texto;