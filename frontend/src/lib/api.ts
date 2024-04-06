import { error, type NumericRange } from '@sveltejs/kit';

/* the base URL of the backend API */
const baseURL = 'http://localhost:8080/api';

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
