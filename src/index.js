import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// redux store
import { store } from "REDUX/store";

import MainView from "APP_COMPONENTS/MainView/MainView";

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<MainView />
			</div>
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById("index"));

module.hot.accept();
