import fs from 'fs'
function handler(m, { conn }) {
let text = `
*ββ π΄π» π½ππΌπ΄ππΎ π³π΄ πΌπΈ πΎππ½π΄π π΄π wa.me/529983537578*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πΈπ½π΅πΎππΌπ°π²πΈπΎπ½ - πΎππ½π΄π',
body: 'ΚΚ α΄Κα΄ α΄Κsα΄α΄ οΉ£ Κα΄α΄',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://wa.me/529983537578`}}})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
