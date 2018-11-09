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
        .then (function(result){
            console.log(result);
            displayName.innerHTML = 'Bem vindo, ' + emailInput.value;
            alert('Autenticado ' + emailInput.value); 
            
        })
        .catch( function(error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha em autenticar, verifique o console!');
        });

});

logOutButton.addEventListener("click", function(){
    firebase
        .auth()
        .signOut()
        .then( function() {
            displayName.innerText ="Você não está autenticado";
            alert("você se deslogou");
         }, function(error) {
            console.error(error);
        });

});

authAnonymouslyButton.addEventListener("click", function(){
    firebase
        .auth()
        .signInAnonymously()
        .then(function (result){
            console.log(result);
            displayName.innerText = 'Bem vindo, desconhecido!';
            alert('Autenticado anonimamente!');
        })
        .catch(function(error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha em autenticar, verifique o erro no console!');
        })

});

// autenticação github
authGitHubButton.addEventListener("click", function(){
    // Providers
    var provider = new firebase.auth.GithubAuthProvider();
    signIn(provider);
});

// autenticação google
authGoogleButton.addEventListener("click", function(){
    // Providers
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});

function signIn(provider){
    firebase.auth()
        .signInWithRedirect(provider)
        //.signInWithPopup(provider);
        .then( function(result) {
           console.log(result);
           //var token = result.credential.accessToken;
           displayName.innerText = 'Bem vindo, ' + result.user.displayName;
        }).catch( function(error) {
            console.log(error);
            alert('Falha na autenticação');
        })
}




















