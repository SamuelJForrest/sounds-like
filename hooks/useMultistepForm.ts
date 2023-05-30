import { ReactElement, useState } from 'react';

const useMultistepForm = (steps: ReactElement[]) => {
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

    const next = () => {
        setCurrentStepIndex(currIndex => {
            if (currIndex >= steps.length - 1) return currIndex;

            return currIndex + 1;
        })
    }

    const back = () => {
        setCurrentStepIndex(currIndex => {
            if (currIndex <= 0) return currIndex;

            return currIndex - 1;
        })
    }

    const goTo = (index: number) => {
        setCurrentStepIndex(index);
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        goTo,
        next,
        back,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
    }
}

export default useMultistepForm;