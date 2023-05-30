import { useState } from "react";
import style from "./GameForm.module.css";

import WarmupRoundForm from "./WarmupRoundForm";

const GameForm = (props) => {
	const [formPage, setFormPage] = useState<number>(0);

	return (
		<form method="" className={style.form}>
			{formPage === 0 && <WarmupRoundForm />}
		</form>
	);
};

export default GameForm;
