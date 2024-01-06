const lavaLinkString = `
Host : lavalink.lexnet.cc
Port : 2333
Password : "lexn3tl@val!nk"
Secure : false
`
const lavaLinkList = lavaLinkString.split('\n').slice(1, -1)
const lavaLinkHost = lavaLinkList[0].split(' : ')[1].replace(/"/g, '') + ''
const lavaLinkPort = +lavaLinkList[1].split(' : ')[1]
const lavaLinkPassword = lavaLinkList[2].split(' : ')[1].replace(/"/g, '') + ''
const lavaLinkSecure = !!lavaLinkList[3].split(' : ')[1]

console.log('configurando lavalink...')
console.log('lavalink host:', lavaLinkHost)
console.log('lavalink port:', lavaLinkPort)
console.log('lavalink password:', lavaLinkPassword)
console.log('lavalink secure:', lavaLinkSecure)
console.log('lavalink configurado!')

module.exports = {
  lavaLinkHost,
  lavaLinkPort,
  lavaLinkPassword,
  lavaLinkSecure,
}
