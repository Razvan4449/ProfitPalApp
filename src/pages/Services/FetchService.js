function ajax(url, requestMethod, jwt, requestBody) {

    const fetchData = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
        },
        method: requestMethod,
    };

    if (jwt) {
        fetchData.headers.Authorization = jwt;
    }

    if (requestBody) {
        fetchData.body = JSON.stringify(requestBody);
    }

    return fetch(url, fetchData).then((response) => { return response.json() })
}

export default ajax