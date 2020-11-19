const request = {}

request.url = "http://localhost:3000/"

request.post = function(path, callback, params = {}) {

    fetch(request.url + path, {
            method: 'post',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": '*'
            },
            body: JSON.stringify(params)
        })
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            console.log('Request succeeded with JSON response', data);
        })
        .catch(function(error) {
            console.log('Request failed', error);
        });
}