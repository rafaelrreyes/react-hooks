import React, { useState, useEffect } from "react";
import axios from "axios";

const CharacterPicker = (props) => {
	const [loadedCharacters, setLoadedCharacters] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get("https://swapi.co/api/people")
			.then((response) => {
				if (response.status === 200) {
					const { results } = response.data;
					setIsLoading(false);
					setLoadedCharacters(
						results.map((character, index) => {
							return {
								name: character.name,
								id: index + 1
							};
						})
					);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const renderCharacterOptions = () => {
		if (isLoading) {
			return <option>Loading characters...</option>;
		}

		return loadedCharacters.map((character, index) => {
			return (
				<option key={character + index} value={character.id}>
					{character.name}
				</option>
			);
		});
	};

	return <select onChange={props.onCharSelect}>{renderCharacterOptions()}</select>;
};

export default CharacterPicker;
