const lavaLinkString = `
Host : us1.lavalink.creavite.co
Port : 20080
Password : auto.creavite.co
Secure : false
`
const lavaLinkList = lavaLinkString.split('\n').slice(1, -1)
const lavaLinkHost = lavaLinkList[0].split(' : ')[1].replace(/"/g, '') + ''
const lavaLinkPort = +lavaLinkList[1].split(' : ')[1]
const lavaLinkPassword = lavaLinkList[2].split(' : ')[1].replace(/"/g, '') + ''
const lavaLinkSecure = lavaLinkList[3].split(' : ')[1].trim() === 'true'

console.log(`LavaLink:`,)
console.log('host:', lavaLinkHost)
console.log('port:', lavaLinkPort)
console.log('password:', lavaLinkPassword)
console.log('secure:', lavaLinkSecure)
console.log('Lavalink configurado!')

module.exports = {
  lavaLinkHost,
  lavaLinkPort,
  lavaLinkPassword,
  lavaLinkSecure,
}

