var authEmailPassButton = document.getElementById("authEmailPassButton");
var authFacebookButton = document.getElementById("authFacebookButton");
var authTwitterButton = document.getElementById("authTwitterButton");
var authGoogleButton = document.getElementById("authGoogleButton");
var authGitHubButton = document.getElementById("authGitHubButton");
var authAnonymouslyButton = document.getElementById("authAnonymouslyButton");
var createUserButton = document.getElementById("createUserButton");
var logOutButton = document.getElementById('logOutButton');

// Inputs
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById("passwordInput");
var displayName = document.getElementById("displayName");

createUserButton.addEventListener("click", function() {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then((authData) => {
            alert("Bem Vindo " + emailInput.value);
        }).catch( (_error)=> {
            console.error(error.code);
            console.error(error.message);
            alert("Falha ao cadastrar, verifique o erro no console!");
        });

});

authEmailPassButton.addEventListener("click", function() {
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then (function(x){
            displayName.innerHTML = 'Bem vindo, ' + emailInput.value;
            alert('Autenticado ' + emailInput.value); 
            
        })
        .catch( function(error) {
            var erroCode = error.code;
            var erroMessage = error.message;
            console.error(error.code);
            console.error(error.message);

            switch(erroCode) {
               case 'auth/wrong-password':
                 alert("Falha ao autenticar, verifique o erro no console!"); 
                 break;
               case 'auth/invalid-email':
                 alert("Falha ao autenticar 2 , verifique o erro no console!"); 
                 break;
           }
            console.log(error);
            alert(erroCode);
        });

});

logOutButton.addEventListener("click", function(){
    firebase
        .auth()
        .signOut()
        .then( function() {
            displayName.innerText ="Você não está autenticado";
            alert("você se deslogou");
         }), function(error) {
            console.error(error);
        }

})

















