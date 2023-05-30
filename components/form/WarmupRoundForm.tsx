import { useState } from "react";

const WarmupRoundForm: React.FC = () => {
	const [fields, setFields] = useState<string[]>(["text", "another text"]);

	return (
		<>
			<h1>Warm up round</h1>
			<p>This is the warm up round</p>
			{fields.map((field: string, index: number) => (
				<li>
					{field}: {index}
				</li>
			))}
		</>
	);
};

export default WarmupRoundForm;
