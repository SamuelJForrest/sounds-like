import { useState } from "react";

const WarmupRoundForm: React.FC = () => {
	const [fields, setFields] = useState<string[]>([""]);

	const allFields: string[] = fields.map((field: string, index: number) => {
		return { field };
	});

	return { allFields };
};

export default WarmupRoundForm;
