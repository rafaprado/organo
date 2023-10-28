import './Field.css';

const Field = (props) => {
    // let value = 'Rafael';
    
    const onTyping = (event) => {
        props.onSub(event.target.value);
    }

    return (
        <div className={`field field-${props.type}`}>
            <label>{props.label}</label>
            <input type={props.type ?? 'text'} value={props.valor} onChange={onTyping} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    )
};

export default Field;