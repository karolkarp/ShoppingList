/* eslint-disable indent */
interface Actions {
	type: string;
	shopLists: object[];
}

const initialState = {
	shopLists: [],
};

export const purchases = (state = initialState, action: Actions): object => {
	switch (action.type) {
		case 'SET_LIST':
			return {
				...state,
				shopLists: action.shopLists,
			};
		default:
			return state;
	}
};
