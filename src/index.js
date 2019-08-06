import React, { Component } from "react";
import ReactDOM from "react-dom";

import Character from "./js/components/Character/Character";

const App = () => {
	return (
		<div>
			<Character />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("index"));

module.hot.accept();
