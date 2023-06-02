import formStyles from './FormStyles.module.css';

const RedForm = (props) => {
    return (
        <div className={formStyles['field_wrap']}>
            <div className={formStyles['input_wrap']}>
                <label htmlFor="quickFireRedAnswerOne">First Rhyme</label>
                <input type="text" name="quickFireRedAnswerOne" id="quickFireRedAnswerOne" required placeholder="First rhyme" value={props.teamInfo.quickFireRedAnswerOne} onChange={e => props.updateFields({quickFireRedAnswerOne: e.target.value})} />
            </div>
            <div className={formStyles['input_wrap']}>
                <label htmlFor="quickFireRedClueOne">Clue</label>
                <input type="text" name="quickFireRedClueOne" id="quickFireRedClueOne" required placeholder="Clue" value={props.teamInfo.quickFireRedClueOne} onChange={e => props.updateFields({quickFireRedClueOne: e.target.value})} />
            </div>
        </div>
    )
}

export default RedForm;