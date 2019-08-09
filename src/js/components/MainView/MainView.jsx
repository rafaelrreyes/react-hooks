import React, { useState, useEffect } from "react";
import Character from "APP_COMPONENTS/Character/Character";
import CharacterPicker from "APP_COMPONENTS/CharacterPicker/CharacterPicker";

// core components
import { Button, BUTTON_SIZES } from "CORE/Button/Button";
import FilterDropdown from "CORE/FilterDropdown/FilterDropdown";

const MainView = (props) => {
	const [selectedChar, setSelectedChar] = useState(1);
	const [side, setSide] = useState(`light`);
	const [destroyed, setDestroyed] = useState(false);
	const [activeFilters, setActiveFilters] = useState(new Set().add("WO"));

	//this needs to get hooked into redux
	const testFilters = ["WO", "CO", "S-1", "S-2"];

	const [state, setState] = useState({
		selectedChar: "1",
		side: "light",
		destroyed: false
	});

	useEffect(() => {
		console.log(state);
	}, [state]);

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
				handleCheckboxChange={(filter) => {
					let copyActiveFilters = activeFilters;
					if (copyActiveFilters.has(filter)) {
						copyActiveFilters.delete(filter);
					} else {
						copyActiveFilters.add(filter);
					}

					setActiveFilters(copyActiveFilters);
					console.log(copyActiveFilters);
				}}
			/>
		</div>
	);
};

export default MainView;
