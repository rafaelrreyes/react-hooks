import React, { useState, useEffect } from "react";

const Checkbox = ({ activeFilters, onChangeHandler, label }) => {
	const [checked, setChecked] = useState(activeFilters.has(label));

	useEffect(() => {
		setChecked(activeFilters.has(label));
	}, [activeFilters]);

	return (
		<input
			type="checkbox"
			checked={checked}
			value={label}
			onChange={() => {
				setChecked(!checked);
				onChangeHandler(label);
			}}
		/>
	);
};

export default Checkbox;
