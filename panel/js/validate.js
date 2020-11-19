const allow = {}

allow.host = 'http://localhost/unip/pim'

allow.url = {
    start: allow.host + '/index.html',
    loginRequired: [
        '/panel'
    ]
}

allow.start = function() {
    allow.getUser()
}

allow.getUser = function() {
    user = session.get('user')

    if (!user) {
        window.location.href = allow.url.start
    }
}

allow.start()