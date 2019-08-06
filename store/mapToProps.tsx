
import * as commonActions from './actions/common';
import * as purchasesActions from './actions/purchases';

export const mapDispatchToProps = (dispatch: object): object => {
	return {
		setLoader: (processing: boolean): void =>dispatch(commonActions.setLoader(processing)),
		addShopList: (): void =>dispatch(purchasesActions.getShopList()),
		addShopArchivedList: (): void =>dispatch(purchasesActions.getArchivedList()),
	};
};

export const mapStateToProps = (state: object): object => {
	return state;
};
