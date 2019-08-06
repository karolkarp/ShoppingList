/* eslint-disable indent */
interface Actions {
	type: string;
	shopLists: object[];
	shopArchivedLists: object[];
}

const initialState = {
	shopLists: [],
	shopArchivedLists: [],
};

export const purchases = (state = initialState, action: Actions): object => {
	switch (action.type) {
		case 'SET_LIST':
			return {
				...state,
				shopLists: action.shopLists,
			};
		case 'SET_ARCHIVED_LIST':
			return {
				...state,
				shopLists: action.shopLists,
			};
		default:
			return state;
	}
};
