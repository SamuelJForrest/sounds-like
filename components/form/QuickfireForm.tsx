import FormWrapper from './FormWrapper';
import FieldWrap from './FieldWrap';
import InputWrap from './InputWrap';

type UserData = {
    quickFireRedClueOne: string,
    quickFireRedAnswerOne: string,
    quickFireRedClueTwo: string,
    quickFireRedAnswerTwo: string,
    quickFireRedClueThree: string,
    quickFireRedAnswerThree: string,
    quickFireRedClueFour: string,
    quickFireRedAnswerFour: string,
    quickFireRedClueFive: string,
    quickFireRedAnswerFive: string,
    quickFireRedClueSix: string,
    quickFireRedAnswerSix: string,
    quickFireRedClueSeven: string,
    quickFireRedAnswerSeven: string,
    quickFireRedClueEight: string,
    quickFireRedAnswerEight: string,
    quickFireRedClueNine: string,
    quickFireRedAnswerNine: string,
    quickFireRedClueTen: string,
    quickFireRedAnswerTen: string,
    quickFireRedClueEleven: string,
    quickFireRedAnswerEleven: string,
    quickFireRedClueTwelve: string,
    quickFireRedAnswerTwelve: string,
    quickFireRedClueThirteen: string,
    quickFireRedAnswerThirteen: string,
    quickFireRedClueFourteen: string,
    quickFireRedAnswerFourteen: string,
    quickFireRedClueFifteen: string,
    quickFireRedAnswerFifteen: string,
    quickFireBlueClueOne: string,
    quickFireBlueAnswerOne: string,
    quickFireBlueClueTwo: string,
    quickFireBlueAnswerTwo: string,
    quickFireBlueClueThree: string,
    quickFireBlueAnswerThree: string,
    quickFireBlueClueFour: string,
    quickFireBlueAnswerFour: string,
    quickFireBlueClueFive: string,
    quickFireBlueAnswerFive: string,
    quickFireBlueClueSix: string,
    quickFireBlueAnswerSix: string,
    quickFireBlueClueSeven: string,
    quickFireBlueAnswerSeven: string,
    quickFireBlueClueEight: string,
    quickFireBlueAnswerEight: string,
    quickFireBlueClueNine: string,
    quickFireBlueAnswerNine: string,
    quickFireBlueClueTen: string,
    quickFireBlueAnswerTen: string,
    quickFireBlueClueEleven: string,
    quickFireBlueAnswerEleven: string,
    quickFireBlueClueTwelve: string,
    quickFireBlueAnswerTwelve: string,
    quickFireBlueClueThirteen: string,
    quickFireBlueAnswerThirteen: string,
    quickFireBlueClueFourteen: string,
    quickFireBlueAnswerFourteen: string,
    quickFireBlueClueFifteen: string,
    quickFireBlueAnswerFifteen: string,
    team: boolean,
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

const QuickfireForm = (props: UserFormProps) => {
    const teamChoice = props.team;
    const isRedTeam = teamChoice === 'red';
    const {
        quickFireRedAnswerOne,
        quickFireRedClueOne,
        quickFireRedAnswerTwo,
        quickFireRedClueTwo,
        quickFireRedAnswerThree,
        quickFireRedClueThree,
        quickFireRedAnswerFour,
        quickFireRedClueFour,
        quickFireRedAnswerFive,
        quickFireRedClueFive,
        quickFireRedAnswerSix,
        quickFireRedClueSix,
        quickFireRedAnswerSeven,
        quickFireRedClueSeven,
        quickFireRedAnswerEight,
        quickFireRedClueEight,
        quickFireRedAnswerNine,
        quickFireRedClueNine,
        quickFireRedAnswerTen,
        quickFireRedClueTen,
        quickFireRedAnswerEleven,
        quickFireRedClueEleven,
        quickFireRedAnswerTwelve,
        quickFireRedClueTwelve,
        quickFireRedAnswerThirteen,
        quickFireRedClueThirteen,
        quickFireRedAnswerFourteen,
        quickFireRedClueFourteen,
        quickFireRedAnswerFifteen,
        quickFireRedClueFifteen,
        quickFireBlueAnswerOne,
        quickFireBlueClueOne,
        quickFireBlueAnswerTwo,
        quickFireBlueClueTwo,
        quickFireBlueAnswerThree,
        quickFireBlueClueThree,
        quickFireBlueAnswerFour,
        quickFireBlueClueFour,
        quickFireBlueAnswerFive,
        quickFireBlueClueFive,
        quickFireBlueAnswerSix,
        quickFireBlueClueSix,
        quickFireBlueAnswerSeven,
        quickFireBlueClueSeven,
        quickFireBlueAnswerEight,
        quickFireBlueClueEight,
        quickFireBlueAnswerNine,
        quickFireBlueClueNine,
        quickFireBlueAnswerTen,
        quickFireBlueClueTen,
        quickFireBlueAnswerEleven,
        quickFireBlueClueEleven,
        quickFireBlueAnswerTwelve,
        quickFireBlueClueTwelve,
        quickFireBlueAnswerThirteen,
        quickFireBlueClueThirteen,
        quickFireBlueAnswerFourteen,
        quickFireBlueClueFourteen,
        quickFireBlueAnswerFifteen,
        quickFireBlueClueFifteen,
    } = props;
    const inputValues = [
        {
            answerLabel: 'First Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerOne' : 'quickFireBlueAnswerOne',
            answerValue: isRedTeam ? quickFireRedAnswerOne : quickFireBlueAnswerOne,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueOne' : 'quickFireBlueClueOne',
            clueValue: isRedTeam ? quickFireRedClueOne : quickFireBlueClueOne,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Second Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerTwo' : 'quickFireBlueAnswerTwo',
            answerValue: isRedTeam ? quickFireRedAnswerTwo : quickFireBlueAnswerTwo,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueTwo' : 'quickFireBlueClueTwo',
            clueValue: isRedTeam ? quickFireRedClueTwo : quickFireBlueClueTwo,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Third Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerThree' : 'quickFireBlueAnswerThree',
            answerValue: isRedTeam ? quickFireRedAnswerThree : quickFireBlueAnswerThree,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueThree' : 'quickFireBlueClueThree',
            clueValue: isRedTeam ? quickFireRedClueThree : quickFireBlueClueThree,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Fourth Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerFour' : 'quickFireBlueAnswerFour',
            answerValue: isRedTeam ? quickFireRedAnswerFour : quickFireBlueAnswerFour,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueFour' : 'quickFireBlueClueFour',
            clueValue: isRedTeam ? quickFireRedClueFour : quickFireBlueClueFour,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Fifth Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerFive' : 'quickFireBlueAnswerFive',
            answerValue: isRedTeam ? quickFireRedAnswerFive : quickFireBlueAnswerFive,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueFive' : 'quickFireBlueClueFive',
            clueValue: isRedTeam ? quickFireRedClueFive : quickFireBlueClueFive,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Sixth Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerSix' : 'quickFireBlueAnswerSix',
            answerValue: isRedTeam ? quickFireRedAnswerSix : quickFireBlueAnswerSix,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueSix' : 'quickFireBlueClueSix',
            clueValue: isRedTeam ? quickFireRedClueSix : quickFireBlueClueSix,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Seventh Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerSeven' : 'quickFireBlueAnswerSeven',
            answerValue: isRedTeam ? quickFireRedAnswerSeven : quickFireBlueAnswerSeven,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueSeven' : 'quickFireBlueClueSeven',
            clueValue: isRedTeam ? quickFireRedClueSeven : quickFireBlueClueSeven,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Eigth Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerEight' : 'quickFireBlueAnswerEight',
            answerValue: isRedTeam ? quickFireRedAnswerEight : quickFireBlueAnswerEight,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueEight' : 'quickFireBlueClueEight',
            clueValue: isRedTeam ? quickFireRedClueEight : quickFireBlueClueEight,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Ninth Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerNine' : 'quickFireBlueAnswerNine',
            answerValue: isRedTeam ? quickFireRedAnswerNine : quickFireBlueAnswerNine,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueNine' : 'quickFireBlueClueNine',
            clueValue: isRedTeam ? quickFireRedClueNine : quickFireBlueClueNine,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Tenth Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerTen' : 'quickFireBlueAnswerTen',
            answerValue: isRedTeam ? quickFireRedAnswerTen : quickFireBlueAnswerTen,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueTen' : 'quickFireBlueClueTen',
            clueValue: isRedTeam ? quickFireRedClueTen : quickFireBlueClueTen,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Eleventh Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerEleven' : 'quickFireBlueAnswerEleven',
            answerValue: isRedTeam ? quickFireRedAnswerEleven : quickFireBlueAnswerEleven,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueEleven' : 'quickFireBlueClueEleven',
            clueValue: isRedTeam ? quickFireRedClueEleven : quickFireBlueClueEleven,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Twelfth Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerTwelve' : 'quickFireBlueAnswerTwelve',
            answerValue: isRedTeam ? quickFireRedAnswerTwelve : quickFireBlueAnswerTwelve,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueTwelve' : 'quickFireBlueClueTwelve',
            clueValue: isRedTeam ? quickFireRedClueTwelve : quickFireBlueClueTwelve,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Thirteenth Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerThirteen' : 'quickFireBlueAnswerThirteen',
            answerValue: isRedTeam ? quickFireRedAnswerThirteen : quickFireBlueAnswerThirteen,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueThirteen' : 'quickFireBlueClueThirteen',
            clueValue: isRedTeam ? quickFireRedClueThirteen : quickFireBlueClueThirteen,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Fourteenth Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerFourteen' : 'quickFireBlueAnswerFourteen',
            answerValue: isRedTeam ? quickFireRedAnswerFourteen : quickFireBlueAnswerFourteen,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueFourteen' : 'quickFireBlueClueFourteen',
            clueValue: isRedTeam ? quickFireRedClueFourteen : quickFireBlueClueFourteen,
            cluePlaceholder: 'Clue placeholder'
        },
        {
            answerLabel: 'Fifteenth Rhyme',
            answerName: isRedTeam ? 'quickFireRedAnswerFifteen' : 'quickFireBlueAnswerFifteen',
            answerValue: isRedTeam ? quickFireRedAnswerFifteen : quickFireBlueAnswerFifteen,
            answerPlaceholder: 'Answer placeholder',
            clueName: isRedTeam ? 'quickFireRedClueFifteen' : 'quickFireBlueClueFifteen',
            clueValue: isRedTeam ? quickFireRedClueFifteen : quickFireBlueClueFifteen,
            cluePlaceholder: 'Clue placeholder'
        },
    ]

    return (
        <FormWrapper title="Quick Fire Round">
            <p>Quick fire form - {teamChoice} team</p>
            <>
                { inputValues.map(inputVal => {
                    return (
                        <FieldWrap key={inputVal.answerName}>
                            <InputWrap label={inputVal.answerLabel} inputName={inputVal.answerName} inputValue={inputVal.answerValue} updateFields={props.updateFields} placeholder={inputVal.answerPlaceholder} />
                            <InputWrap label="Clue" inputName={inputVal.clueName} inputValue={inputVal.clueValue} updateFields={props.updateFields} placeholder={inputVal.cluePlaceholder} />
                        </FieldWrap>
                    )
                })}
            </>
        </FormWrapper>
    )
}

export default QuickfireForm;