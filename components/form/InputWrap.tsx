import formStyles from './FormStyles.module.css';

const InputWrap = (props) => {
    return (
        <div className={formStyles['input_wrap']}>
            <label htmlFor={props.inputName}>{props.label}</label>
            <input type="text" name={props.inputName} id={props.inputName} required placeholder={props.placeholder} autoFocus={props.autofocus} value={props.inputValue} onChange={e => props.updateFields({[props.inputName]: e.target.value})} />
        </div>
    )
}

export default InputWrap;