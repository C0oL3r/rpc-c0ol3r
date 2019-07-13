const DiscordRPC = require("discord-rpc");

const clientId = '444849442332344321';
const action = 'woow'
DiscordRPC.register(clientId);
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
 
rpc.on('ready', () => {
    console.log("RPC Loaded Successfully.");
    var secunde = 0;
    var minute = 0;
    var ore = 0;
    var trecutora = false;
    var timeInterval = setInterval(function() {
        secunde++;
        if(secunde >= 60) { secunde = 0; minute++; }
        if(trecutora) 
        {
            minute = 0;
            ore++;
            rpc.setActivity({
                details: action,
                state: `For ${ore} hours`,
                largeImageKey: 'ph',
                instance: false,
            });
        }
        else if(minute <= 0 && !trecutora)
        {
            rpc.setActivity({
                details: action,
                state: `For ${secunde} seconds`,
                largeImageKey: 'ph',
                instance: false,
            });
        }
        else if(minute >= 1 && !trecutora) {
            rpc.setActivity({
                details: action,
                state: `For ${minute} minutes`,
                largeImageKey: 'ph',
                instance: false,
            });
        }
    }, 1000);
});
 
// Log in to RPC with client id
rpc.login({ clientId }).catch(console.error);

//444849442332344321