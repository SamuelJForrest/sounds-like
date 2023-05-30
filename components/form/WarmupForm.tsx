import FormWrapper from './FormWrapper';
import formStyles from './FormStyles.module.css';

type UserData = {
    warmupOne: string, 
    warmupTwo: string, 
    warmupThree: string, 
    warmupClueOne: string,
    warmupAnswerOne: string,
    warmupClueTwo: string,
    warmupAnswerTwo: string,
    warmupClueThree: string,
    warmupAnswerThree: string,
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

const WarmupForm = ({
    warmupOne, 
    warmupTwo, 
    warmupThree, 
    warmupClueOne,
    warmupAnswerOne,
    warmupClueTwo,
    warmupAnswerTwo,
    warmupClueThree,
    warmupAnswerThree,
    updateFields}: UserFormProps
) => {
    return (
        <FormWrapper title={'Warmup Round'}>
            <p>This is the description text for the warmup round</p>
            <div className={formStyles['field_wrap']}>
                <div className={formStyles['input_wrap']}>
                    <label htmlFor="warmupOne">Example one</label>
                    <input type="text" name="warmupOne" id="warmupOne" required autoFocus value={warmupOne} onChange={e => updateFields({warmupOne: e.target.value})} />
                </div>
            </div>
            <div className={formStyles['field_wrap']}>
                <div className={formStyles['input_wrap']}>
                    <label htmlFor="warmupTwo">Example two</label>
                    <input type="text" name="warmupTwo" id="warmupTwo" required value={warmupTwo} onChange={e => updateFields({warmupTwo: e.target.value})} />
                </div>
            </div>
            <div className={formStyles['field_wrap']}>
                <div className={formStyles['input_wrap']}>
                    <label htmlFor="warmupThree">Example three</label>
                    <input type="text" name="warmupThree" id="warmupThree" required value={warmupThree} onChange={e => updateFields({warmupThree: e.target.value})}/>
                </div>
            </div>
            <div className={formStyles['field_wrap']}>
                <div className={formStyles['input_wrap']}>
                    <label htmlFor="warmupAnswerOne">First Rhyme</label>
                    <input type="text" name="warmupAnswerOne" id="warmupAnswerOne" value={warmupAnswerOne} onChange={e => updateFields({warmupAnswerOne: e.target.value})} />
                </div>
                <div className={formStyles['input_wrap']}>
                    <label htmlFor="warmupClueOne">Clue</label>
                    <input type="text" name="warmupClueOne" id="warmupClueOne" value={warmupClueOne} onChange={e => updateFields({warmupClueOne: e.target.value})} />
                </div>
            </div>
            <div className={formStyles['field_wrap']}>
                <div className={formStyles['input_wrap']}>
                    <label htmlFor="warmupAnswerTwo">Second Rhyme</label>
                    <input type="text" name="warmupAnswerTwo" id="warmupAnswerTwo" value={warmupAnswerTwo} onChange={e => updateFields({warmupAnswerTwo: e.target.value})} />
                </div>
                <div className={formStyles['input_wrap']}>
                    <label htmlFor="warmupClueTwo">Clue</label>
                    <input type="text" name="warmupClueTwo" id="warmupClueTwo" value={warmupClueTwo} onChange={e => updateFields({warmupClueTwo: e.target.value})} />
                </div>
            </div>
            <div className={formStyles['field_wrap']}>
                <div className={formStyles['input_wrap']}>
                    <label htmlFor="warmupAnswerThree">Third Rhyme</label>
                    <input type="text" name="warmupAnswerThree" id="warmupAnswerThree" value={warmupAnswerThree} onChange={e => updateFields({warmupAnswerThree: e.target.value})} />
                </div>
                <div className={formStyles['input_wrap']}>
                    <label htmlFor="warmupClueThree">Clue</label>
                    <input type="text" name="warmupClueThree" id="warmupClueThree" value={warmupClueThree} onChange={e => updateFields({warmupClueThree: e.target.value})} />
                </div>
            </div>
        </FormWrapper>
    ) 
}

export default WarmupForm;