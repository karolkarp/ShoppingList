export function setLoader(processing: object[]): object{
	return{
		type:'SET_LOADER',
		processing
	};
}