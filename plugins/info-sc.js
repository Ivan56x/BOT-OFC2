import fs from 'fs'
let handler = async (m, { conn }) => {
conn.reply(m.chat, `*https://github.com/BrunoSobrino/TheMystic-Bot-MD*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ππ²ππΈπΏπ ππ·π°πππ°πΏπΏ π±πΎπ πΌπ³',
body: 'Κα΄Ιͺs α΄ΙͺΙ΄Ι’ οΉ£ Κα΄α΄ οΉ£ α΄α΄',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
}
handler.command = ['sc','script']
handler.help = ['sc']
handler.tags = ['General']
export default handler
