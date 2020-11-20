const users = {}

users.start = function() {
    users.list()
}

users.list = function() {
    let list = document.querySelector('.list')
    if (!list) {
        return false
    }

    request.get('usuarios', function(res) {
        res.map(function(v) {

            let div = document.createElement('div')
            div.classList.add('user-item')
            div.innerHTML = '<div class="user-info name"> ' + v.Usuario + ' </div> <div class="user-info"> ' + v.Usuario + ' </div>     <a href="edit_user.html?id="' + v.IdUsuario + '" class="user-action"> <img src="../img/edit.png" alt=""> </a> <div href="#" class="user-action" onclick="modal.show(".modal")"> <img src="../img/remove.png" alt=""> </div>'

            list.appendChild(div)
        })
    })
}

users.start()