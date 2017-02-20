(function() {
    var logIn = document.getElementById("logIn");
    var signIn = document.getElementById("signIn");
    var sectionLogIn = document.getElementsByClassName("logIn")[0];
    var sectionSignIn = document.getElementsByClassName("signIn")[0];

    
    function switchLogIn() {
        if(!(sectionLogIn.classList.contains("switchElement"))) {
            sectionLogIn.classList.add("switchElement"); 
            sectionSignIn.classList.remove("switchElement");
            logIn.classList.add("active"); 
            signIn.classList.remove("active");
            console.log("login");
        }
    }

    logIn.addEventListener("click", switchLogIn);

    function switchSignIn() {
        if(!(sectionSignIn.classList.contains('switchElement'))) {
            sectionSignIn.classList.add("switchElement"); 
            sectionLogIn.classList.remove("switchElement");
            logIn.classList.remove("active"); 
            signIn.classList.add("active");
            console.log("signin");
        }
    }

    signIn.addEventListener("click", switchSignIn);

})();