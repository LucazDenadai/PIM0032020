const users = {}

users.start = function() {
    users.list()
    users.profile()
    users.edit()
    users.add()
}

users.list = function() {
    let list = document.querySelector('.list')
    if (!list) {
        return false
    }

    request.get('cliente', function(res) {
        console.log(res)
        list.innerHTML = ''
        res.map(function(v) {

            let div = document.createElement('div')
            div.classList.add('user-item')
            div.innerHTML = '<div class="user-info name"> ' + v.NomCli + ' </div> <div class="user-info"> ' + v.Email + ' </div>     <a href="edit_user.html?userId=' + v.IdCliente + '" class="user-action"> <img src="../img/edit.png" alt=""> </a> <div href="#" class="user-action" id-cliente="' + v.IdCliente + '" onclick="users.setDelete(this)"> <img src="../img/remove.png" alt=""> </div>'

            list.appendChild(div)
        })
    })
}

users.profile = function() {
    let user = session.get('user')
    helper.setFields(user)
}

users.edit = function() {
    let id = helper.getUrlParam('userId')
    if (id) {
        request.get('cliente/' + id, function(res) {
            let user = res[0]
            user.IdUsuario = session.get('user').id
            if (user) {
                helper.setFields(user)
            }
        })
    }
}

users.add = function() {
    let id = helper.getUrlParam('userId')
    if (!id) {
        let user = {}
        if (session.get('user')) {
            user.IdUsuario = session.get('user').id
            helper.setFields(user)
        }
    }
}

users.addSubmit = function(btn) {
    helper.setLoading(btn)
    let cliente = users.cliente()

    if (cliente.nome && cliente.cpfcnpj && cliente.cpfcnpj && cliente.datanascimento && cliente.email && cliente.telcli_01 && cliente.telcli_02) {
        request.put('cliente', function(res) {
            console.log(res)
            setTimeout(function() {
                window.location.href = session.host + 'panel/home.html'
                helper.removeLoading()
            }, 1000)

        }, cliente)

        setTimeout(function() {
            helper.removeLoading()
        }, 300)
    } else {
        helper.removeLoading()
        helper.alert.error('preencha todos campos obrigatórios')
    }
}

users.editSubmit = function(btn) {
    helper.setLoading(btn)
    let cliente = users.cliente()
    cliente.id = helper.getUrlParam('userId')
    console.log(cliente)

    if (cliente.id && cliente.nome && cliente.cpfcnpj && cliente.cpfcnpj && cliente.datanascimento && cliente.email && cliente.telcli_01 && cliente.telcli_02) {
        request.post('cliente', function(res) {
            console.log(res)
            setTimeout(function() {
                // window.location.href = session.host + 'panel/home.html'
                helper.removeLoading()
            }, 1000)

        }, cliente)

        setTimeout(function() {
            helper.removeLoading()
        }, 300)
    } else {
        helper.removeLoading()
        helper.alert.error('preencha todos campos obrigatórios')
    }
}

users.profileSubmit = function(btn) {
    helper.setLoading(btn)
    let usuario = document.querySelector('[name="usuario"]')
    let senha = document.querySelector('.valid')
    let id = session.get('user').id

    if (usuario && senha) {
        request.put('usuarios/' + id, function(res) {
            console.log(res)
            setTimeout(function() {
                helper.removeLoading()
                window.location.href = session.host + 'panel/home.html'
            }, 1000)
        }, {
            usuario: usuario.value,
            senha: senha.value,
            tipoUsuario: 1,
        })
    } else {
        helper.removeLoading()
        helper.alert.error('preencha todos campos obrigatórios')
    }
}

users.validatePass = function() {
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Senha válida.';
        document.getElementById('password').classList.remove('invalid')
        document.getElementById('password').classList.add('valid')
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Senhas não conhecidem.';
        document.getElementById('password').classList.add('invalid')
    }
}

users.delete = function(el) {
    helper.setLoading(el)
    id = el.getAttribute('id-cliente')

    request.delete('cliente/' + id, function(res) {
        console.log(res)
        users.list()
        helper.alert.success('Cliente foi removido.')
        setTimeout(function() {
            helper.removeLoading()
            modal.hide(el)
        }, 300)
    })
}

users.setDelete = function(el) {
    id = el.getAttribute('id-cliente')
    document.querySelector('.remove-cliente').setAttribute('id-cliente', id)
    modal.show(".modal")
}

users.addUsuario = function(btn) {
    helper.setLoading(btn)
    let usuario = document.querySelector('[name="usuario"]')
    let senha = document.querySelector('.valid')

    if (usuario && senha) {
        request.post('usuarios', function(res) {
            console.log(res)
            setTimeout(function() {
                helper.removeLoading()
                window.location.href = session.host
            }, 1000)
        }, {
            usuario: usuario.value,
            senha: senha.value,
            tipoUsuario: 1,
        })
    } else {
        helper.removeLoading()
        helper.alert.error('preencha todos campos obrigatórios')
    }

}

users.cliente = function() {
    return {
        nome: document.querySelector('[name="NomCli"]').value,
        email: document.querySelector('[name="Email"]').value,
        telcli_01: document.querySelector('[name="TelCli_01"]').value,
        telcli_02: document.querySelector('[name="TelCli_02"]').value,
        datanascimento: document.querySelector('[name="DataNascimento"]').value,
        idendereco: "1",
        cpfcnpj: document.querySelector('[name="CpfCnpj"]').value,
        idUsuario: session.get('user').id.toString()
    }
}

users.start()