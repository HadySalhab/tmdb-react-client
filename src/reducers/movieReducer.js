import {
	GET_MOVIE,
	LOADING_MOVIE,
	ALERT_MOVIE,
	REMOVE_ALERT_MOVIE,
	RESET_MOVIE,
} from "../actions/types";

const movieState = {
	movie: null,
	loading: false,
	alert: null,
};
export default (state = movieState, action) => {
	switch (action.type) {
		case GET_MOVIE:
			return {
				...state,
				movie: action.payload,
				loading: false,
				alert: null,
			};
		case LOADING_MOVIE:
			return { ...state, loading: true, alert: null };
		case ALERT_MOVIE:
			return { ...state, loading: false, alert: action.payload };
		case REMOVE_ALERT_MOVIE:
			return { ...state, alert: null };
		case RESET_MOVIE:
			return {
				...state,
				movie: null,
				loading: false,
				alert: null,
			};
		default:
			return state;
	}
};
