const mineflayer = require('mineflayer')
const { mineflayer: mineflayerViewer } = require('prismarine-viewer')

const bot = mineflayer.createBot({
  host: 'localhost', // minecraft server ip (Change it if you plan on joining a server)
  username: 'Testing', // minecraft username
  // password: '(remove comment and add pass)' // minecraft password, comment out if you want to log into online-mode=false servers
   port: (porthere),                // only set if you need a port that isn't 25565
   version: '(putversionhere)',             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // auth: 'mojang'              // only set if you need microsoft auth, then set this to 'microsoft'
})
function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: false }) // port is the minecraft server port, if first person is false, you get a bird's-eye view
})

bot.on('message', function(message) {

  console.log("Message: " + message)
    //This sends a string with the whole chat message in the console!
   
} )

bot.on('physicTick', lookAtNearestPlayer)