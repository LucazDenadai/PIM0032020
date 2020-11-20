const session = {}

session.host = 'http://localhost/unip/pim/'

session.set = function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

session.get = function(key) {
    return JSON.parse(localStorage.getItem(key));
};

session.clear = function() {
    localStorage.clear();
}