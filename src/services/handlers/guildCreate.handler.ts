import EventHandler from './event-handler';
import { Guild, TextChannel } from 'discord.js';

export default class GuildCreateHandler implements EventHandler {
    on = 'guildCreate';

    invoke(guild: Guild | null): Promise<any> {
        return this.sendWelcomeMessage(guild?.systemChannel);
    }

    private sendWelcomeMessage(channel: TextChannel | null) {
        return channel?.send(`Thanks For Inviting Me Im NewBot! Check me Out @ http://newbot.onthewifi.com`);
    }    
}