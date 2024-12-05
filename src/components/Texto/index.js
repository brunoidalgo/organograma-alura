import "./Texto.css"

const Texto = (props) => {

    let valor = '';

    const onDigit = (e) => {
        valor = e.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={onDigit} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default Texto;