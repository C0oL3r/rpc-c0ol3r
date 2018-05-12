const DiscordRPC = require('discord-rpc');
const ClientId = '444849442332344321';
const action = 'Watching "Hot Stepsister gives amazing blowjob to young brother"'
DiscordRPC.register(ClientId);
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
    console.log("RPC Loaded Successfully.");
    var secunde = 0;
    var minute = 0;
    var ore = 0;
    var timeInterval = setInterval(function() {
        secunde++;
        rpc.setActivity({
            details: action,
            state: `For ${secunde} seconds`,
            largeImageKey: 'ph',
            instance: false,
        });
        if(secunde >= 60) {
            secunde = 0;
            minute++;
            rpc.setActivity({
                details: action,
                state: `For ${secunde} minutes`,
                largeImageKey: 'ph',
                instance: false,
            });
        }
        if(minute >= 60) {
            minute = 0;
            ore++;
            rpc.setActivity({
                details: action,
                state: `For ${secunde} hours`,
                largeImageKey: 'ph',
                instance: false,
            });
        }
    }, 1000);
});
rpc.login(ClientId).catch(console.error);
