const {
  lavaLinkHost,
  lavaLinkPort,
  lavaLinkPassword,
  lavaLinkSecure,
} = require('./lavalink')

module.exports = {
  Admins: ['246040430494351362', '213062480618979330'], // Admins of the bot, I don't know what this do. -Darren.
  ExpressServer: false, // If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || '>', // Default prefix, Server Admins can change the prefix
  Port: +process.env.Port || 3000, //Which port website gonna be hosted
  SupportServer: 'https://discord.gg/grcjpZzqQu', // Support Server Link
  Token: process.env.Token || '', // Discord Bot Token
  ClientID: process.env.Discord_ClientID || '', // Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || '', // Discord Client Secret
  Scopes: ['identify', 'guilds', 'applications.commands'], // Discord OAuth2 Scopes
  ServerDeafen: true, // If you want bot to stay deafened
  DefaultVolume: 100, // Sets the default volume of the bot, You can change this number anywhere from 1 to 9007199254740991 (JS Integer limit. If you do set it to that, you're a monster.)
  CallbackURL: '/api/callback', // Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  '24/7': true, // Make the bot stays in VC 24/7 (when you reboot the bot will **not** automatically rejoin.)
  CookieSecret: 'olokinhomeu', // A cookie for you, cookie for me. make sure you change this value!
  IconURL:
    'https://cdn.discordapp.com/attachments/699743525629067284/1092264880712716359/cachorro-funk-cachorro-dancante.gif', // URL of all embed author icons
  EmbedColor: 'RANDOM', // Color of most embeds | Custom Hex value are supported. I.e: "#36393F"
  Permissions: 2205281600, // Bot Inviting Permissions
  Website: process.env.Website || 'https://example.com', // Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  // If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.

  Presence: {
    status: 'online', // You can show online, idle, and dnd
    name: `Música 🎧🎶`, // The message shown
    type: 'LISTENING', // PLAYING, WATCHING, LISTENING, STREAMING
  },

  // You need a lavalink server for this bot to work!!!!
  // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink
  Lavalink: {
    id: 'Akshtt - v4 Free', //- Used for identifier. You can set this to whatever you want
    /*  
        host: The host name or IP of the lavalink server.
        port: The port number of the lavalink server.
        pass: The password of the lavalink server.
        secure: Whether the lavalink server uses SSL or not.
    */
    host: lavaLinkHost,
    port: lavaLinkPort,
    pass: lavaLinkPassword,
    secure: lavaLinkSecure,
    retryAmount: 250, //- The amount of times to retry connecting to the node if connection got dropped.
    retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
  },
  // Spotify Integration, allows you to enter a spotify link.
  Spotify: {
    ClientID: process.env.Spotify_ClientID || '', // Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || '', // Spotify Client Secret
  },
}

