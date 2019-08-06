import consts from './consts';


// const { SUCCESS, NOT_FOUND } = consts;
class AuthService {

	public async fetch(url:string, options:object):Promise<object|void> {
		const headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json; charset=utf-8',
		};

		return fetch(url, {
			headers,
			...options,
		})
			.then((response):object => {
				return response.json()
					.then((data):object => { return { status: response.status, body: data }; });
			})
			.catch((e):void => console.error(e));
	}

}

export default AuthService;
