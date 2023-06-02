import FormWrapper from './FormWrapper';
import RedForm from './RedForm';

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
    const redProps = {
        quickFireRedAnswerOne: props.quickFireRedAnswerOne,
        quickFireRedClueOne: props.quickFireClueOne,
    }

    return (
        <FormWrapper title="Quick Fire Round">
            <p>Quick fire form - {teamChoice} team</p>
            <RedForm 
                data={...props.data} 
                teamInfo = {...redProps}
                updateFields={props.updateFields}
            />
        </FormWrapper>
    )
}

export default QuickfireForm;