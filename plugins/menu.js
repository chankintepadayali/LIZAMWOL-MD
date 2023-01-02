let fs = require('fs')
let owner = ᴄʜᴀɴᴋɪɴᴛᴇ ᴩᴀᴅᴀyᴀʟɪ
let uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let menu = `
╭〘 *𝙻𝙸𝚉𝙰𝙼𝚆𝙾𝙻-𝙼𝙳* 〙 
│
│ ➮*ᴏɪɪ🎈, ${taguser} :D*
│ ➮*ʙᴏᴛ ɴᴀᴍᴇ : ʟɪᴢᴀᴍᴡᴏʟ-ᴍᴅ*
│ ➮*ᴏᴡɴᴇʀ : ${owner}*
│ ➮*ᴩʀᴇꜰɪx :.*
│ ➮*ʜᴏꜱᴛ ɴᴀᴍᴇ : ᴛᴇʀᴍᴜx*
│ ➮*ᴩʟᴀᴛꜰᴏʀᴍ : ʟɪɴᴜx*
│
 ——————————————⋆
 ——————————————⋆
│ *『 𝖈𝖔𝖒𝖒𝖆𝖓𝖉𝖘 』*
│
│ 🦋⃟💎_a_
│ 🦋⃟💎_${usedPrefix}𝖈𝖆𝖙_
│ 🦋⃟💎_${usedPrefix}𝖉𝖔𝖌_
│ 🦋⃟💎_${usedPrefix}𝖒𝖊𝖒𝖊𝖘_
│ 🦋⃟💎_${usedPrefix}𝖑𝖔𝖌𝖔𝖘_
│ 🦋⃟💎_${usedPrefix}𝖗𝖚𝖓𝖙𝖎𝖒𝖊_
│ 🦋⃟💎_${usedPrefix}𝖎𝖓𝖋𝖔𝖍𝖔𝖘𝖙_
│ 🦋⃟💎_${usedPrefix}𝖔𝖓 𝖜𝖊𝖑𝖈𝖔𝖒𝖊_
│ 🦋⃟💎_${usedPrefix}𝖔𝖋𝖋 𝖜𝖊𝖑𝖈𝖔𝖒𝖊_
│ 🦋⃟💎_${usedPrefix}𝖎𝖌 *[url]*_
│ 🦋⃟💎_${usedPrefix}𝖒𝖊𝖉𝖎𝖆𝖋𝖎𝖗𝖊 *[𝚄𝚛𝚕]*_
│ 🦋⃟💎_${usedPrefix}𝖙𝖎𝖐𝖙𝖔𝖐 *[𝚄𝚛𝚕]*_
│ 🦋⃟💎_${usedPrefix}𝖘𝖙𝖎𝖈𝖐𝖊𝖗 *[𝚄𝚛𝚕]*_
│ 🦋⃟💎_${usedPrefix}𝖆𝖙𝖙𝖕 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖆𝖙𝖙𝖕2 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖆𝖙𝖙𝖕3 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖙𝖙𝖕 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖙𝖙𝖕2 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖙𝖙𝖕3 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖙𝖙𝖕4 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖙𝖙𝖕5 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖜𝖎𝖐𝖎𝖕𝖊𝖉𝖎𝖆 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖌𝖔𝖔𝖌𝖑𝖊 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖎𝖒𝖆𝖌𝖊 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖕𝖑𝖆𝖞 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖕𝖑𝖆𝖞2 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖕𝖑𝖆𝖞3 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖎𝖓𝖛𝖔𝖈𝖆𝖗 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖞𝖙𝖘𝖊𝖆𝖗𝖈𝖍 *[𝚃𝚎𝚡𝚝]*_
│ 🦋⃟💎_${usedPrefix}𝖌𝖊𝖙𝖆𝖚𝖉 *[𝚄𝚛𝚕]*_
│ 🦋⃟💎_${usedPrefix}𝖌𝖊𝖙𝖛𝖎𝖉 *[𝚄𝚛𝚕]*_
│ 🦋⃟💎_${usedPrefix}𝖞𝖙𝖒𝖕3 *[𝚄𝚛𝚕]*_
│ 🦋⃟💎_${usedPrefix}𝖞𝖙𝖒𝖕4 *[𝚄𝚛𝚕]*_
│ 🦋⃟💎_${usedPrefix}𝖙𝖙𝖘 *[𝚕𝚗 𝚎𝚗]*_
│ 🦋⃟💎_${usedPrefix}𝖙𝖔𝖎𝖒𝖌 *[𝚜𝚝𝚒𝚌𝚔𝚎𝚛]*_
│ 🦋⃟💎_${usedPrefix}𝖘𝖙𝖎𝖈𝖐𝖊𝖗 *[𝚒𝚖𝚊𝚐𝚎]*_
│ 🦋⃟💎_${usedPrefix}𝖙𝖔𝖚𝖗𝖑 *[𝚒𝚖𝚊𝚐𝚎]*_
│ 🦋⃟💎_${usedPrefix}𝖙𝖔𝖚𝖗𝖑 *[𝚟𝚒𝚍𝚎𝚘]*_
│ 🦋⃟💎_${usedPrefix}𝖙𝖔𝖚𝖗𝖑 *[𝚊𝚞𝚍𝚒𝚘]*_
│ 🦋⃟💎_${usedPrefix}𝖋𝖆𝖙 *[nota de voz]*_
│ 🦋⃟💎_${usedPrefix}𝖇𝖆𝖘𝖘 *[nota de voz]*_
│ 🦋⃟💎_${usedPrefix}𝖇𝖑𝖔𝖜𝖓 *[nota de voz]*_
│ 🦋⃟💎_${usedPrefix}𝖉𝖊𝖊𝖕 *[nota de voz]*_
│ 🦋⃟💎_${usedPrefix}𝖋𝖆𝖘𝖙 *[nota de voz]*_
│ 🦋⃟💎_${usedPrefix}𝖗𝖔𝖇𝖔𝖙 *[nota de voz]*_
│ 🦋⃟💎_${usedPrefix}𝖘𝖑𝖔𝖜 *[nota de voz]*_
│ 🦋⃟💎_${usedPrefix}𝖙𝖚𝖕𝖆𝖎 *[nota de voz]*_
│ 🦋⃟💎_${usedPrefix}𝖛𝖎𝖇𝖗𝖆 *[nota de voz]*_
│ 🦋⃟💎_${usedPrefix}𝖓𝖎𝖌𝖍𝖙𝖈𝖔𝖗𝖊 *[nota de voz]*_
│ 🦋⃟💎_${usedPrefix}𝖊𝖆𝖗𝖗𝖆𝖕𝖕𝖊 *[nota de voz]*_
│ 🦋⃟💎_${usedPrefix}𝖗𝖊𝖛𝖊𝖗𝖘𝖊 *[nota de voz]*_
│ 🦋⃟💎 _${usedPrefix}𝖘𝖒𝖔𝖔𝖙𝖍 *[nota de voz]*_
│
│ *『 𝖔𝖜𝖓𝖊𝖗 』*
│
│ 🌸⃟🍃 _${usedPrefix}𝖚𝖕𝖉𝖆𝖗𝖊_
│ 🌸⃟🍃 _${usedPrefix}𝖇𝖆𝖓𝖈𝖍𝖆𝖙_
│ 🌸⃟🍃 _${usedPrefix}𝖚𝖓𝖇𝖆𝖓𝖈𝖍𝖆𝖙_
 ——————————————————————————⋆       
`.trim()
let buttons = [
{ buttonId: '#owner', buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },
{ buttonId: '#runtime', buttonText: { displayText: 'ʀᴜɴ ᴛɪᴍᴇ' }, type: 1 },
{ buttonId: '#infohost', buttonText: { displayText: 'ɪɴꜰᴏ ʜᴏꜱᴛ' }, type: 1 }]
let buttonMessage = {
image: fs.readFileSync('./Menu2.jpg'),
caption: menu.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'ᴛᴇʀᴍᴜx ʜᴏꜱᴛ',
body: null,
thumbnail: fs.readFileSync('./src/logo.png'),
sourceUrl: `https://chat.whatsapp.com/F0fU7LSlBBcBm6ny5fVSuT`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(menucompleto|comandos|allmenu|info|speed|estado|menú|menu|help|\?)$/i
handler.fail = null
module.exports = handler
