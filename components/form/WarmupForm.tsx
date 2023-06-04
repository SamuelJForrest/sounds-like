import FormWrapper from './FormWrapper';
import formStyles from './FormStyles.module.css';
import FieldWrap from './FieldWrap';
import InputWrap from './InputWrap';

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

const WarmupForm = (props: Partial<UserFormProps>) => {
    const {
        warmupOne,
        warmupTwo,
        warmupThree,
        warmupAnswerOne,
        warmupClueOne,
        warmupAnswerTwo,
        warmupClueTwo,
        warmupAnswerThree,
        warmupClueThree,
        updateFields
    } = props;

    return (
        <FormWrapper title={'Warmup Round'}>
            <p>This is the description text for the warmup round - please fill out <strong>All</strong> fields</p>
            <FieldWrap>
                <InputWrap label='Example one' inputName="warmupOne" inputValue={warmupOne} updateFields={updateFields} autofocus={true} placeholder='Example one' />
            </FieldWrap>
            <FieldWrap>
                <InputWrap label="Example two" inputName="warmupTwo" inputValue={warmupTwo} updateFields={updateFields} placeholder='Example two' />
            </FieldWrap>
            <FieldWrap>
                <InputWrap label="Example three" inputName="warmupThree" inputValue={warmupThree} updateFields={updateFields} placeholder='Example three' />
            </FieldWrap>
            <FieldWrap>
                <InputWrap label="First Rhyme" inputName="warmupAnswerOne" inputValue={warmupAnswerOne} updateFields={updateFields} placeholder='First rhyme' />
                <InputWrap label="Clue" inputName="warmupClueOne" inputValue={warmupClueOne} updateFields={updateFields} placeholder='Clue' />
            </FieldWrap>
            <FieldWrap>
                <InputWrap label="Second Rhyme" inputName="warmupAnswerTwo" inputValue={warmupAnswerTwo} updateFields={updateFields} placeholder='Second rhyme' />
                <InputWrap label="Clue" inputName="warmupClueTwo" inputValue={warmupClueTwo} updateFields={updateFields} placeholder='Clue' />
            </FieldWrap>
            <FieldWrap>
                <InputWrap label="Third Rhyme" inputName="warmupAnswerThree" inputValue={warmupAnswerThree} updateFields={updateFields} placeholder='Third rhyme' />
                <InputWrap label="Clue" inputName="warmupClueThree" inputValue={warmupClueThree} updateFields={updateFields} placeholder='Clue' />
            </FieldWrap>
        </FormWrapper>
    ) 
}

export default WarmupForm;