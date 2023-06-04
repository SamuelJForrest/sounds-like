import { useState } from 'react'; 
import useMultistepForm from '../../hooks/useMultistepForm';
import style from './GameForm.module.css';
import buttonStyle from '../UI/Button.module.css';

import PunchlineForm from './PunchlineForm';
import QuickfireForm from './QuickfireForm';
import SoundsLikeForm from './SoundsLikeForm';
import WarmupForm from './WarmupForm';
import { FormData, INITIAL_DATA } from './FormData';

const GameForm = () => {
    const [data, setData] = useState(INITIAL_DATA);

    const updateFields = (fields: Partial<FormData>) => {
        setData(prevData => {
            return {...prevData, ...fields};
        })
    }
        
    const formPages = [
        <WarmupForm data={data} updateFields={updateFields} />, 
        <QuickfireForm data={data} updateFields={updateFields} team='red' />, 
        <QuickfireForm data={data} updateFields={updateFields} team='blue' />, 
        <PunchlineForm />, 
        <SoundsLikeForm />
    ];

    const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } = useMultistepForm(formPages);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(data);
        next();
    }
    
    return (
        <>
            <div className={style['gameform-count']}>
                <p>{ currentStepIndex + 1 } / {steps.length}</p>
            </div>
            <form action="" className={style.gameform} onSubmit={onSubmit}>
                {step}
                <div className={style['gameform-buttons']}>
                    { !isFirstStep && <button type="button" className={buttonStyle['button--yellow']} onClick={back}>Back</button>}
                    <button type="submit" className={buttonStyle['button--red']}>
                        { isLastStep ? 'Start Game' : 'Next' }
                    </button>
                    
                    {/* Testing button */}
                    <button type="button" onClick={next}>
                        Next page
                    </button>
                </div>
            </form>
        </>
    )
}

export default GameForm;