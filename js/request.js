const request = {}

request.url = "http://127.0.0.1:3000/"

request.post = function(path, callback, params = {}) {

    fetch(request.url + path, {
            method: 'post',
            body: JSON.stringify(params)
        })
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            if (!data.message) {
                callback(data)
            } else if (data.message) {
                helper.alert.error(data.message)
            }
        })
        .catch(function(error) {
            helper.alert.error('Ocorreu um erro ao realizar a requisição.')
            console.log('Request failed', error);
        });
}


request.get = function(path, callback, params = {}) {
    fetch(request.url + path, {
            method: 'get',
        })
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            if (!data.message) {
                callback(data)
            } else if (data.message) {
                helper.alert.error(data.message)
            }
        })
        .catch(function(error) {
            helper.alert.error('Ocorreu um erro ao realizar a requisição.')
            console.log('Request failed', error);
        });
}