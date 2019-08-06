export function addNewList(addNew: boolean): object{
	return{
		type:'ADD_NEW',
		addNew
	};
}

export function setTemporaryList(element:string): object{
	return{
		type:'SET_TEMPORARY_LIST',
		element
	};
}

export function setShopLists(shopList: object[]): object{
	return{
		type:'SET_LIST',
		shopList
	};
}

export function setShopArchivedLists(shopArchivedLists: object[]): object{
	return{
		type:'SET_ARCHIVED_LIST',
		shopArchivedLists
	};
}