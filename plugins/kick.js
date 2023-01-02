let handler = async (m, { conn, participants, usedPrefix, command }) => { 
 if (!global.db.data.settings[conn.user.jid].restrict) throw '*podaaaaa*'
 let kicktext = `*test\n\n*cheyyatte:*\n*${usedPrefix + command}@$ {global.suittag}*` 
 if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)})  
 let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender 
 let owr = m.chat.split`-`[0] 
 await conn.groupParticipantsUpdate(m.chat, [user], 'remove')} 
 handler.command = /^(kick|echar|hechar|sacar)$/i 
 handler.admin = true 
 handler.group = true 
 handler.botAdmin = true 

module.exports = handler
