import React, { useState } from "react";
import Checkbox from "CORE/Checkbox/Checkbox";
import "./FilterDropdown.scss";

export const DROPDOWN_CONSTANTS = {
	ALL: "SELECT/DESELECT ALL"
};

export const FilterDropdown = ({ allFilters, activeFilters, handleCheckboxChange }) => {
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);

	return (
		<div className="filter-dropdown" onClick={(e) => onDropdownClick(e, isDropdownVisible, setIsDropdownVisible)}>
			<span className="filter-dropdown-default">Select filters</span>
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
					<span className="filter-item-label">
						<Checkbox
							label={filter}
							activeFilters={activeFilters}
							onChangeHandler={(newFilter, checked) => {
								onCheckboxChecked(newFilter, checked, activeFilters, allFilters, handleCheckboxChange);
							}}
						/>
					</span>
				</li>
			);
		});
		return (
			<ul className="filter-list" onClick={(e) => e.stopPropagation()}>
				<li className="filter-item" key={"selectAllFilter"}>
					<span className="filter-item-label">
						<Checkbox
							label={DROPDOWN_CONSTANTS.ALL}
							activeFilters={activeFilters}
							onChangeHandler={(newFilter, checked) => {
								onCheckboxChecked(newFilter, checked, activeFilters, allFilters, handleCheckboxChange);
							}}
						/>
					</span>
				</li>
				{items}
			</ul>
		);
	}
	return null;
};

const onCheckboxChecked = (filter, checked, activeFilters, allFilters, parentCallback) => {
	let currentFilters = new Set([...activeFilters]);
	if (filter === DROPDOWN_CONSTANTS.ALL && !checked) {
		currentFilters.add(DROPDOWN_CONSTANTS.ALL);
		parentCallback(new Set([...currentFilters, ...allFilters]));
		return;
	} else if (filter === DROPDOWN_CONSTANTS.ALL && checked) {
		currentFilters.clear();
	} else {
		if (checked) {
			currentFilters.delete(DROPDOWN_CONSTANTS.ALL);
		}
		if (currentFilters.has(filter)) {
			currentFilters.delete(filter);
		} else {
			currentFilters.add(filter);
		}
	}
	parentCallback(currentFilters);
};
