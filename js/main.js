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

    // var headerMenu = document.getElementById("toggle-button");
  
    // headerMenu.addEventListener("click", function(event) {
    //     var el = this.nextElementSibling;

    //     el.style.display = (el.style.display === '') ? 'block' : '';
    // });
})();