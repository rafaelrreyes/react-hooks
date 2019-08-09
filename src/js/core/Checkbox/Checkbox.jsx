import React, { useState, useEffect } from "react";
import "./Checkbox.scss";
import { DROPDOWN_CONSTANTS } from "../FilterDropdown/FilterDropdown";

const Checkbox = ({ activeFilters, onChangeHandler, label }) => {
	const [checked, setChecked] = useState(activeFilters.has(label));

	useEffect(() => {
		setChecked(activeFilters.has(label));
	}, [activeFilters]);

	return (
		<label className="checkbox-component">
			{label}
			<input
				type="checkbox"
				checked={checked}
				value={label}
				onChange={() => {
					setChecked(!checked);
					onChangeHandler(label, checked);
				}}
			/>
			<span className="checkmark" />
		</label>
	);
};

export default Checkbox;
