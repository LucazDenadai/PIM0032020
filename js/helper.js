const helper = {}

helper.start = function() {
    helper.loadLink()
}

helper.alert = {}
helper.alert.create = function(message) {
    let div = document.createElement('DIV')
    div.classList.add('alert')
    div.innerHTML = message

    return div
}

helper.alert.success = function(message) {
    let div = helper.alert.create(message)
    div.classList.add('success')
    document.querySelector('body').appendChild(div)
    helper.alert.remove()
}

helper.alert.error = function(message) {
    let div = helper.alert.create(message)
    div.classList.add('error')
    document.querySelector('body').appendChild(div)
    helper.alert.remove()
}

helper.alert.remove = function() {
    setTimeout(function() {
        document.querySelector('.alert').classList.add('fadeDown')
        setTimeout(function() {
            document.querySelector('.alert').remove()
        }, 500)
    }, 3000)
}

helper.setLoading = function(element, load = "") {
    var currentHtml = element.innerHTML;
    element.classList.add("loading");
    element.innerHTML =
        '<img src="' + session.host + "img/loading" + load + '.gif">';
    if (element.nodeName === "BUTTON") {
        element.setAttribute("disabled", "disabled");
    }

    helper.removeLoading = function() {
        element.innerHTML = currentHtml;
        element.classList.remove("loading");
        if (element.nodeName === "BUTTON") {
            element.removeAttribute("disabled");
        }
    };
};

helper.loadLink = function() {
    let submitButton = document.querySelectorAll('[type="load"]');
    let callback = function() {
        helper.setLoading(this);
        this.setAttribute("disabled", "disabled");
    };
    helper.multiEventListener(submitButton, "click", callback);
};

helper.multiEventListener = function(element, event, callback, type = "add") {
    if (element && event && callback) {
        let length = element.length;
        for (let i = 0; i < length; i++) {
            if (element[i]) {
                if (type === "add") {
                    element[i].removeEventListener(event, callback);
                    element[i].addEventListener(event, callback);
                }

                if (type === "remove") {
                    element[i].removeEventListener(event, callback);
                }
            }
        }
    } else {
        if (!event) {
            console.log(
                "É necessário enviar um evento, ex: click, focus, input, change"
            );
        }
        if (!callback) {
            console.log("É necessário enviar um função para ser executada");
        }
        if (!element) {
            console.log(
                "É necessário enviar um elemento ou um array de elementos"
            );
        }
    }
}

helper.start()