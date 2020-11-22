const panel = {}

panel.start = function() {
    panel.logout()
    panel.setUser()
}

panel.logout = function() {
    document.querySelector('.sair').addEventListener('click', function() {
        session.clear()
        allow.validatetUser()
    })
}

panel.setUser = function() {
    let user = session.get('user')
    document.querySelector('.nome').innerHTML = user.usuario
    document.querySelector('.email').innerHTML = 'Bem-vindo'
}

panel.start()