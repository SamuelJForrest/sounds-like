import useMultistepForm from '../../hooks/useMultistepForm';
import style from './GameForm.module.css';
import buttonStyle from '../UI/Button.module.css';

import PunchlineForm from './PunchlineForm';
import QuickfireForm from './QuickfireForm';
import SoundsLikeForm from './SoundsLikeForm';
import WarmupForm from './WarmupForm';

const formPages = [
    <WarmupForm />, 
    <QuickfireForm />, 
    <PunchlineForm />, 
    <SoundsLikeForm />
];

const GameForm = () => {
    const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } = useMultistepForm(formPages);
    
    return (
        <>
            <div className={style['gameform-count']}>
                <p>{ currentStepIndex + 1 } / {steps.length}</p>
            </div>
            <form action="">
                {step}
                <div className={style['gameform-buttons']}>
                    { !isFirstStep && <button type="button" className={buttonStyle['button--yellow']} onClick={back}>Back</button>}
                    <button type="button" onClick={next} className={buttonStyle['button--red']}>
                        { isLastStep ? 'Start Game' : 'Next' }
                    </button>
                </div>
            </form>
        </>
    )
}

export default GameForm;