console.log('Array')


// Dichiaro array per email providers

const email = ['LiberoMail', 'GMail', 'Hotmail', 'ColdMail', 'Outlook']
console.log(email)


// Chiedo il provider all'utente tramite il prompt
const sceltaUtente = prompt('Seleziona il tuo email provider tra: LiberoMail, GMail, Hotmail, ColdMail, Outlook')
console.log(sceltaUtente)

const provider = sceltaUtente


// Se la scelta dell'utente corrisponde a mail disponibili:
if  (provider === email ){
    console.log(" Bella Mail" )
}
else {

}







