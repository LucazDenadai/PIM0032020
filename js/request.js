const request = {}

request.url = "http://adspim-com-br.umbler.net/"

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
            callback()
            console.log('Request succeeded with JSON response', data);
        })
        .catch(function(error) {
            alert.error('Ocorreu um erro ao realizar a requisição')
            console.log('Request failed', error);
        });
}