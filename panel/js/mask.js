function mascaras() {
    VMasker(document.querySelectorAll(".telefone")).maskPattern("(99) 9999-9999");
    VMasker(document.querySelectorAll(".celular")).maskPattern("(99) 99999-9999");
    VMasker(document.querySelectorAll(".cpf")).maskPattern("999.999.999-99");
    VMasker(document.querySelectorAll(".data")).maskPattern("99/99/9999");
}

window.onload = function() {
    mascaras()
}