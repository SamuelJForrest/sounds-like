import style from './Intro.module.css';
import buttonStyle from '../UI/Button.module.css';
import Link from 'next/link';

const Intro = () => {
    return (
        <>
            <h1>What does it sound like?</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe porro aut itaque praesentium aliquam doloremque placeat asperiores esse dolor. At quae nulla quam quos iusto!</p>
            <div className={style['intro-buttons']}>
                <Link href="/new-game" className={buttonStyle['button--yellow']}>New game</Link>
                <Link href="/new-game" className={buttonStyle['button--red']}>Play past game</Link>
            </div>
        </>
    )
}

export default Intro;