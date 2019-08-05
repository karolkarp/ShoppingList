
import * as commonActions from './actions/common';
// import * as purchasesActions from './actions/purchases';

export const mapDispatchToProps = (dispatch: object): object => {
	return {
		setLoader: (processing: boolean): void=>dispatch(commonActions.setLoader(processing)),
	};
};

export const mapStateToProps = (state: object): object => {
	return state;
};
