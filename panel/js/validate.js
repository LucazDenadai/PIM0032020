const allow = {}

allow.url = {
    start: session.host + '/index.html',
    loginRequired: [
        '/panel'
    ]
}

allow.start = function() {
    allow.validatetUser()
}

allow.validatetUser = function() {
    let user = session.get('user')

    if (!user) {
        window.location.href = allow.url.start
    }
}

allow.start()