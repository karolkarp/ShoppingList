import consts from './consts';


const { SUCCESS, NOT_FOUND } = consts;
class AuthService {

	async fetch(url:string, options:object) {
		const headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json; charset=utf-8',
		};

		return fetch(url, {
			headers,
			...options,
		})
			.then((response) => {
				return response.json().then((data) => { return { status: response.status, body: data }; });
			})
			.catch(e => console.error(e));
	}

	
}

export default AuthService;
