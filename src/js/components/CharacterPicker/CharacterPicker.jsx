import React, { useEffect } from "react";

const CharacterPicker = (props) => {
	useEffect(() => {});
	const characters = [
		{
			name: "Luke Skywalker"
		},
		{
			name: "Darth Vader"
		},
		{
			name: "R2D2"
		},
		{
			name: "C3PO"
		},
		{
			name: "Chewbacca"
		},
		{
			name: "Han Solo"
		},
		{
			name: "Yoda"
		}
	];
	return <select onChange={props.onCharSelect}>{renderCharacterOptions(characters)}</select>;
};

export default CharacterPicker;

const renderCharacterOptions = (characters) => {
	return characters.map((character, index) => {
		return (
			<option key={character + index} value={character.name}>
				{character.name}
			</option>
		);
	});
};
