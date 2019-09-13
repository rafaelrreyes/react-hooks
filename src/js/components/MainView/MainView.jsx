import React, { useState, useEffect } from "react";
import Character from "APP_COMPONENTS/Character/Character";
import CharacterPicker from "APP_COMPONENTS/CharacterPicker/CharacterPicker";
import Notifications from "APP_COMPONENTS/Notifications/Notifications";
import ReduxHooksView from "APP_COMPONENTS/ReduxHooksView/ReduxHooksView";
import LoginView from "APP_COMPONENTS/LoginView/LoginView";

// core components
import { Button, BUTTON_SIZES } from "CORE/Button/Button";
import { FilterDropdown, DROPDOWN_CONSTANTS } from "CORE/FilterDropdown/FilterDropdown";

const MainView = (props) => {
	const [selectedCharId, setSelectedCharId] = useState(1);
	const [side, setSide] = useState(`light`);
	const [destroyed, setDestroyed] = useState(false);
	// const [activeFilters, setActiveFilters] = useState(new Set().add("WO"));

	//this needs to get hooked into redux
	// const testFilters = ["WO", "CO", "S-1", "S-2", "FSCC", "S-4", "S-6", "AirO", "LOC", "BAS", "PAO"]; // this will be a getAllRolesFilter from reducer

	const SITH_LORDS = [{ name: "Darth Vader", id: 4 }];

	const sideHandler = (side) => {
		setSide(side);
		// if side is set to dark AND if selectedChar is a sith lord, set destroyed to true
		if (side === "dark" && SITH_LORDS.find((character) => selectedCharId === character.id)) {
			setDestroyed(true);
		} else {
			setDestroyed(false);
		}
	};

	const charSelectHandler = (event) => {
		const selectedCharId = parseInt(event.target.value);
		setSelectedCharId(selectedCharId);
	};

	return (
		<div className="main-view">
			<CharacterPicker onCharSelect={charSelectHandler} />
			<Character characterId={selectedCharId} />

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

			{destroyed && <span className="destroyed-label">YOU ARE DESTROYED BY THE SITH</span>}
			{/* <FilterDropdown
				allFilters={testFilters}
				activeFilters={activeFilters}
				handleCheckboxChange={(newFilters) => {
					// reducer setter
					setActiveFilters(newFilters);
				}}
			/> */}
			{/* <p>this is a paragraph rendering under the filter dropdown</p> */}
			<Notifications />

			<ReduxHooksView />
			<LoginView />
		</div>
	);
};

export default MainView;
