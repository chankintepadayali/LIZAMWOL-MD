let handler = async(m, { conn, text, participants }) => {
let teks = `*|══✪〘 attention please  〙✪══|*\n\n * ❢dear:* ${text ? text : 'members'}\n\n`
for (let mem of participants) {
let count = 1
let teks = ''
teks += `${count++} @${mem.id.split('@')[0]}\n` }
teks += `\n⋙ LIZAMWOL3.0-MD ⋘`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, {quoted: m})
}
handler.command = /^(invocar|tagall)$/i
handler.group = true
handler.admin = true
module.exports = handler
