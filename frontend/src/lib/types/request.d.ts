// an interface that specifies the HTTP payload
// key must be a string, value can be a string, number, boolean or object
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