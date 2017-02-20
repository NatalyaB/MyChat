(function() {
    var contactButton = document.getElementsByClassName("contacts-button")[0];
    var conteiner = document.getElementsByClassName("conteiner")[0];

    
    function collapse() {
        if(conteiner.classList.contains('collapse')) {
            conteiner.classList.remove("collapse");
        } else {
            conteiner.classList.add("collapse");
        }
    }

    contactButton.addEventListener("click", collapse);
})();