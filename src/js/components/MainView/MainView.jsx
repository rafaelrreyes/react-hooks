import React, { useState, useEffect } from "react";
import Character from "APP_COMPONENTS/Character/Character";
import CharacterPicker from "APP_COMPONENTS/CharacterPicker/CharacterPicker";

// core components
import { Button, BUTTON_SIZES } from "CORE/Button/Button";
import { FilterDropdown, DROPDOWN_CONSTANTS } from "CORE/FilterDropdown/FilterDropdown";

const MainView = (props) => {
	const [selectedChar, setSelectedChar] = useState(1);
	const [side, setSide] = useState(`light`);
	const [destroyed, setDestroyed] = useState(false);
	const [activeFilters, setActiveFilters] = useState(new Set().add("WO"));

	//this needs to get hooked into redux
	const testFilters = ["WO", "CO", "S-1", "S-2", "FSCC", "S-4", "S-6", "AirO", "LOC", "BAS", "PAO"]; // this will be a getAllRolesFilter from reducer

	const [state, setState] = useState({
		selectedChar: "1",
		side: "light",
		destroyed: false
	});

	useEffect(() => {
		console.log(state);
		console.log(activeFilters);
	}, [state, activeFilters]);

	const sideHandler = (side) => {
		setState({ ...state, side });
	};

	const charSelectHandler = (event) => {
		const charId = event.target.value;
		setState({ ...state, selectedChar: charId });
	};

	const destroyHandler = () => {
		setState({ ...state, destroyed: true });
	};

	return (
		<div className="main-view">
			<CharacterPicker {...state} onCharSelect={charSelectHandler} />
			<Character />

			<Button
				buttonSize={BUTTON_SIZES.LARGE}
				onClickCallback={() => {
					sideHandler("light");
				}}
			>
				Light
			</Button>
			<Button
				buttonSize={BUTTON_SIZES.LARGE}
				onClickCallback={() => {
					sideHandler("dark");
				}}
			>
				Dark
			</Button>

			<FilterDropdown
				allFilters={testFilters}
				activeFilters={activeFilters}
				handleCheckboxChange={(newFilters) => {
					// reducer setter
					setActiveFilters(newFilters);
				}}
			/>
			<p>this is a paragraph rendering under the filter dropdown</p>
		</div>
	);
};

export default MainView;
