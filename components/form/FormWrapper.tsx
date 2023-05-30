import { ReactNode } from 'react';
import style from './FormWrapper.module.css';

type FormWrapperProps = {
    title: string,
    children: ReactNode,
}

const FormWrapper: React.FC = (props: FormWrapperProps) => {
    return (
        <div className={style['form-wrapper']}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}

export default FormWrapper;