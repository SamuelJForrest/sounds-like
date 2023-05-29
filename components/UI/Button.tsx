import { useState, useEffect } from 'react';
import style from './Button.module.css';

const Button: FC = (props) => {
    const [buttonColor, setButtonColor] = useState<string>('button');

    useEffect(() => {
        if (props.yellow) {
            setButtonColor('button--yellow');
        }
        
        if (props.red) {
            setButtonColor('button--red');
        }
    }, [buttonColor])

    return <button className={style[`${buttonColor}`]}>{props.children}</button>
}

export default Button;