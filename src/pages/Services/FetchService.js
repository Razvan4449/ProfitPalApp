function ajax(url, requestMethod, jwt, requestBody) {

    url = 'http://localhost:5000' + url;

    const fetchData = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
        },
        method: requestMethod,
    };

    if (jwt) {
        fetchData.headers['Authorization'] = "Bearer " + jwt;
    }

    if (requestBody) {
        fetchData.body = JSON.stringify(requestBody);
    }

    return fetch(url, fetchData).then((response) => { return response.json() })
}

export default ajax