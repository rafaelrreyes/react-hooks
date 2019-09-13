import React, { useEffect, useState } from "react";

const useWindowTitle = (defaultTitle) => {
	const [title, setTitle] = useState("");

	useEffect(() => {
		setWindowTitle(title);
	}, [title]);

	return [setTitle];
};

const setWindowTitle = (title) => {
	window.document.title = title;
};

export default useWindowTitle;
