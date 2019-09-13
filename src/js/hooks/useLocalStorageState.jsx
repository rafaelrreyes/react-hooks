import { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultValue) => {
	const [state, setState] = useState(() => {
		// initialize value if it is not set yet, this should be invoked anytime useLocalStorage state is invoked
		let value;
		console.log("invoked useLocalStorageState");
		try {
			// try getting the local storage value first
			console.log("Here", JSON.parse(window.localStorage.getItem(key)));
			value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
		} catch (e) {
			console.log(e);
			value = defaultValue;
		}
		console.log(`setting key ${key} in localstorage to: ${value}`);
		// return whatever value is, into this state hook
		return value;
	});

	// anytime the state is changed from the setState mutator (which is invoked from where the useLocalStorageState is being used, update local storage key)
	useEffect(() => {
		console.log(`setting new state of key ${key} in localstorage to: ${state}`);
		window.localStorage.setItem(key, state);
	}, [state]);

	return [state, setState];
};

export default useLocalStorageState;
