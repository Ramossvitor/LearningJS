var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)

if(hora > 5 && hora < 12) {
    console.log('Bom dia!')
}else if(hora >= 13 && hora < 19) {
    console.log('Boa tarde!')
}else if(hora > 18 || hora < 6) {
    console.log('Boa noite!')
}