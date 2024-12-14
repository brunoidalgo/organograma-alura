import "./Dropdown.css";

export default function Dropdown(props) {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={e => props.onModify(e.target.value)} value=
                {props.value} required={props.obrigatorio}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}