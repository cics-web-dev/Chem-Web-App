import { error, type NumericRange } from '@sveltejs/kit';

/* the base URL of the backend API
 if you are running in the containerized enviornment 
 it must use the container name and port IP in the container */
const baseURL = 'http://localhost:8080/api';

// an interface that specifies the HTTP payload
// key must be a key, value can be a string, number, boolean or object
interface HttpPayload {
	[key: string]: string | number | boolean | object;
}

// an interface that specifies the HTTP request options
interface HttpRequestFetch {
	// The four most common HTTP methods
	method: 'GET' | 'POST' | 'DELETE' | 'PUT';

	// the path name of the endpoint (eg. /auth/login)
	path: string;

	// the data to be sent to the server in the JSON format
	// can be used for POST and PUT requests since not every endpoint requires a request body
	data?: HttpPayload;

	// the jsob web token to be sent to the server to verify the user's identity
	token?: string;
}

async function send({ method, path, data, token }: HttpRequestFetch): Promise<HttpPayload> {
	const options: RequestInit = {};

	// specifying the HTTP request options and method
	options.method = method;
	options.headers = {};

	// check if there is data, transform it to JSON and add to the body
	if (data) {
		options.headers['Content-Type'] = 'application/json';
		options.body = JSON.stringify(data);
	}

	// check if there is a web token, add that to authorization header
	if (token) {
		options.headers['Authorization'] = `Bearer ${token}`;
	}

	// start fetching the endpoint and convert the response body to json
	const response = await fetch(`${baseURL}${path}`, options);
	const json = await response.json();

	// successful response status
	if (response.ok || response.status === 201) {
		return json;
	}

	// client errors ranging from 400 to 499
	if (response.status >= 400 || response.status <= 499) {
		return { error: json, status: response.status };
	}

	// unexpected server errors ranging from 500 to 599
	error(response.status as NumericRange<500, 599>);
}

export function get(path: string, token?: string) {
	return send({ method: 'GET', path, token });
}

export function post(path: string, data?: HttpPayload, token?: string) {
	return send({ method: 'POST', path, data, token });
}

export function del(path: string, token?: string) {
	return send({ method: 'DELETE', path, token });
}

export function put(path: string, data?: HttpPayload, token?: string) {
	return send({ method: 'PUT', path, data, token });
}