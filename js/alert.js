const alert = {}

alert.create = function(message) {
    let div = document.createElement('DIV')
    div.classList.add('alert')
    div.innerHTML = message

    return div
}

alert.success = function(message) {
    let div = alert.create(message)
    div.classList.add('success')
    document.querySelector('body').appendChild(div)
}

alert.error = function(message) {
    let div = alert.create(message)
    div.classList.add('error')
    document.querySelector('body').appendChild(div)
}