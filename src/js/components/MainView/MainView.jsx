import React, { useState, useEffect } from "react";
import Character from "APP_COMPONENTS/Character/Character";
import CharacterPicker from "APP_COMPONENTS/CharacterPicker/CharacterPicker";

// core components
import { Button, BUTTON_SIZES } from "CORE/Button/Button";

const MainView = (props) => {
	const [selectedChar, setSelectedChar] = useState(1);
	const [side, setSide] = useState(`light`);
	const [destroyed, setDestroyed] = useState(false);

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
		</div>
	);
};

export default MainView;
