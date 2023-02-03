console.log('Array')


// Dichiaro array per email providers

const email = ['LiberoMail', 'GMail', 'Hotmail', 'ColdMail', 'Outlook']
console.log(email)


// Chiedo il provider all'utente tramite il prompt
const sceltaUtente = prompt('Seleziona il tuo email provider tra: LiberoMail, GMail, Hotmail, ColdMail, Outlook')
console.log(sceltaUtente)

const provider = sceltaUtente


let emailFound =false

// Se la scelta dell'utente corrisponde a mail disponibili:

for(let i= 0; i < 6 ; i++){

    let MailRegistered = email[i]

if  (provider === MailRegistered ){
    console.log(" Bella Mail" )
    emailFound =true
    // let mailConfirmed = mails[i]
}
}

if (emailFound ==false){
    console.log('Cambia mail')
}








