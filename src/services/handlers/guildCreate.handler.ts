import EventHandler from './event-handler';
import { Guild, TextChannel } from 'discord.js';

export default class GuildCreateHandler implements EventHandler {
    on = 'guildCreate';

    invoke(guild: Guild | null): Promise<any> {
        return this.sendWelcomeMessage(guild?.systemChannel);
    }

    private sendWelcomeMessage(channel: TextChannel | null) {
        return channel?.send(`Thanks For Inviting Me Im NewBot#4779 Goto http://newbot.onthewifi.com to find out more about me and my services/commands! Also if you just invited me to the server and do not have allow dms on the bot will not be able to explain to you how to use it and you will need to use the website instead!`);
    }    
}