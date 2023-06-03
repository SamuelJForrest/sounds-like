import formStyles from './FormStyles.module.css';

const FieldWrap = (props) => {
    return (
        <div className={formStyles['field_wrap']}>
            { props.children }
        </div>
    )
} 

export default FieldWrap;