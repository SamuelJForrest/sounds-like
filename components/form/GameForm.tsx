import { useState } from 'react';

const GameForm = (props) => {
    const [formPage, setFormPage] = useState<number>(0);

    return (
        <form method="">
            <label htmlFor="text">Text</label>
            <input type="text" name="text" id="text" />
        </form>
    )
}

export default GameForm;