/* eslint-disable indent */
interface Actions {
	type: string;
	addNew: boolean;
	shopLists: object[];
	shopArchivedLists: object[];
	temporaryList: string[];
	element: string;
}

const initialState = {
	shopLists: [],
	shopArchivedLists: [],
	addNew: false,
	temporaryList: []
};

export const purchases = (state = initialState, action: Actions): object => {
	switch (action.type) {
		case 'ADD_NEW':
			return {
				...state,
				addNew: action.addNew,
			};
		case 'SET_TEMPORARY_LIST':
			return {
				...state,
				temporaryList: [...state.temporaryList, action.element],
			};
		case 'SET_LIST':
			return {
				...state,
				shopLists: action.shopLists,
			};
		case 'SET_ARCHIVED_LIST':
			return {
				...state,
				shopArchivedLists: action.shopArchivedLists,
			};
		default:
			return state;
	}
};
