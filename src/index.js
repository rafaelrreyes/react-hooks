import React, { Component } from "react";
import ReactDOM from "react-dom";

import MainView from "APP_COMPONENTS/MainView/MainView";

const App = () => {
	return (
		<div>
			<MainView />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("index"));

module.hot.accept();
