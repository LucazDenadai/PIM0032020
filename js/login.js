const login = {}

login.start = function() {
    request.post('usuarios', function(http) {
        console.log(http)
    })
}

login.start()