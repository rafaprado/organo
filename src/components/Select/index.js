import "./Select.css"

const Select = (props) => {
    return (
        <div className="select">
            <label>{props.label}</label>
            <select onChange={event => props.onSub(event.target.value)} value={props.valor} required={props.mandatory}>
                <option value=""></option>
                {props.items.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select;