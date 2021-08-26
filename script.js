for (let id in require('powercord/webpack').getModule(['getGuild'], false).getGuilds()) {
  require('powercord/webpack').getModule(['updateGuildNotificationSettings'], false).updateGuildNotificationSettings(id, {muted: true});
}
