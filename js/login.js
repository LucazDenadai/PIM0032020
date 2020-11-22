const login = {}

login.start = function() {
    login.checkSession()
}

login.checkSession = function() {
    let user = session.get('user')

    if (user) {
        session.set('user', user)
        window.location.href = session.host + 'panel/home.html'
    }
}

login.getUser = function(usuario, senha) {
    if (!usuario || !senha) {
        helper.removeLoading()
        helper.alert.error('Preencha os campos usuário e senha para fazer o login')
        return false
    }

    request.post('login', function(res) {
        if (!res.message) {
            let user = {
                usuario: res.Usuario,
                id: res.IdUsuario
            }

            session.set('user', user)
            setTimeout(function() {
                window.location.href = session.host + 'panel/home.html'
            }, 1000)
        } else {
            setTimeout(function() {
                helper.removeLoading()
            }, 300)
        }
    }, {
        usuario: usuario,
        senha: senha
    })
}

login.submit = function(btn) {
    helper.setLoading(btn)
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
    let user = login.getUser(usuario, senha)
}

login.start()