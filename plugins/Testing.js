Function({
	pattern: 'kick ?(.*)',
	fromMe: true,
	desc: 'kick someone in the group. Reply to message or tag a person to use command.',
	type: 'group'
}, async (message, match, client) => {
	if (!message.isGroup) return await message.reply('_This command only works in group chats_')
	const isbotAdmin = await isBotAdmins(message, message.client)
	if (!isbotAdmin) return await message.reply("I'm not an admin")
	if (message.reply_message !== false) {
		if (message.reply_message.data.key.fromMe) return false
		await message.client.sendMessage(message.jid, {
			text: `@${message.reply_message.data.participant.split('@')[0]}, Kicked From The Group`,
			mentions: [message.reply_message.data.participant]
		})
		await message.client.groupParticipantsUpdate(message.jid, [message.reply_message.data.participant], 'remove')
	} else if (message.reply_message === false && message.mention !== false) {
		var etiketler = '';
		message.mention.map(async (user) => {
			etiketler += '@' + user.split('@')[0] + ',';
		});
		await message.client.sendMessage(message.jid, {
			text: `${etiketler} Kicked From The Group`,
			mentions: message.mention
		})
		await message.client.groupParticipantsUpdate(message.jid, message.mention, 'remove')
	} else {
		return await message.reply('*Give me a user!*');
	}
})
