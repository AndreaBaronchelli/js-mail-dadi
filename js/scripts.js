/**************************************************
 * Mail Login
 *************************************************/
/*
Tasks
1 - Creare arrey con db di email
2 - prompt per richiesta email a utente
3 - verifica della presenza dell'email in arrey
 */

//1
var emailList = ["pinco@gmail.com", "pallino@gmail.com", "giancarlo@gmail.com", "ciao@gmail.com"];
//console.log(emailList);

//2
var userMail = prompt("Inserisci la tua email");
//console.log(userMail);

//3
for(var i = 0; i < emailList.length; i++) {
    if(userMail === emailList[i]) {
        alert("Accesso consentito");
        break;
    }
}
//console.log(emailList[i])
if(i >= emailList.length) {
    alert("Accesso Negato")
}