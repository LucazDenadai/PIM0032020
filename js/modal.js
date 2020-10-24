const modal = {}

modal.start = function() {
    modal.dismiss()
    modal.show()
}

modal.show = function(my_modal) {
    let modal = document.querySelector(my_modal)
    if (modal) {
        modal.classList.remove('hidden')
    }
}

modal.dismiss = function() {
    let dismiss = document.querySelectorAll('.dismiss-modal')
    let lenght = dismiss.length
    for (let i = 0; i < lenght; i++) {
        dismiss[i].addEventListener('click', function(e) {
            e.preventDefault()
            let modal = this.parentElement.parentElement.parentElement
            console.log(modal)
            if (modal) {
                modal.classList.add('hidden')
            }
        })
    }
}

modal.start()