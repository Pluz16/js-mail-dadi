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

// DADI

// const dado1 = [1, 2, 3, 4, 5, 6]
// const dado2 = [1, 2, 3, 4, 5, 6]

let dado1 = []
let dado2 = []
// const numeriDaGenerare = Math.floor(Math.random() * 100)

for (let i = 0; i < 1; i++) {
	let num = Math.floor(Math.random() * 6) + 1
	dado1.push(num)
}

for (let i = 0; i < 1; i++) {
	let num = Math.floor(Math.random() * 6) + 1
	dado2.push(num)
}

console.log(dado1, dado2)

if (dado1 < dado2){
    console.log('Dado2 vince')
} else if ( dado1 > dado2) {
    console.log('Dado1 vince')

} else console.log('Pareggio')












