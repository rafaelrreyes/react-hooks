import { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "redux";
import axios from "axios";

const INITIAL_STATE = {
	isLoading: false,
	isError: false,
	data: {}
};

const getReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "GET_INIT":
			return {
				...state,
				isLoading: true,
				isError: false
			};
		case "GET_SUCCESS":
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload
			};
		case "GET_FAILURE":
			return {
				isLoading: false,
				isError: true
			};
		default:
			throw new Error(`Error processing GET request`);
	}
};

const useGetRequest = (URL) => {
	const [state, dispatch] = useReducer(getReducer, INITIAL_STATE);

	useEffect(() => {
		HTTP_GET(URL, dispatch);
	}, [URL]);

	return [state];
};

const HTTP_GET = async (URL, dispatch) => {
	try {
		dispatch({ type: "GET_INIT" });

		const { data } = await axios.get(URL);
		dispatch({ type: "GET_SUCCESS", payload: data.results });
	} catch (err) {
		dispatch({ type: "GET_FAILURE" });
	}
};

export default useGetRequest;
