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
    document.querySelector('.nome').innerHTML = user.nome
    document.querySelector('.email').innerHTML = user.usuario
}

panel.start()