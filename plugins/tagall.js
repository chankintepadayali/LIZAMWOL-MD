let handler = async(m, { conn, text, participants }) => {
let teks = `*|══✪〘 attention please  〙✪══|*\n\n ❣*group:* ${text ? text : 'members'}\n\n`
for (let mem of participants) {
teks += `🦋 @${mem.id.split('@')[0]}\n` }
teks += `\n⋙ ©𝑆𝑖𝑚𝑝𝑙𝑒𝐵𝑜𝑡 ⋘`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, {quoted: m})
}
handler.command = /^(invocar|tagall)$/i
handler.group = true
handler.admin = true
module.exports = handler
