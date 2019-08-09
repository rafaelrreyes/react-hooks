import React, { useState } from "react";
import Checkbox from "CORE/Checkbox/Checkbox";

const FilterDropdown = ({ allFilters, activeFilters, handleCheckboxChange }) => {
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);

	return (
		<div className="filter-dropdown" onClick={(e) => onDropdownClick(e, isDropdownVisible, setIsDropdownVisible)}>
			Select filters
			{renderFilterItems(allFilters, activeFilters, isDropdownVisible, handleCheckboxChange)}
		</div>
	);
};

const onDropdownClick = (e, isDropdownVisible, setIsDropdownVisible) => {
	e.stopPropagation();
	setIsDropdownVisible(!isDropdownVisible);
};

const renderFilterItems = (allFilters, activeFilters, isDropdownVisible, handleCheckboxChange) => {
	if (isDropdownVisible) {
		let items = allFilters.map((filter) => {
			return (
				<li className="filter-item" key={filter}>
					<Checkbox label={filter} activeFilters={activeFilters} onChangeHandler={handleCheckboxChange} />
					<span className="filter-item-label">{filter}</span>
				</li>
			);
		});
		return (
			<ul className="filter-list" onClick={(e) => e.stopPropagation()}>
				{items}
			</ul>
		);
	}

	return null;
};

export default FilterDropdown;
