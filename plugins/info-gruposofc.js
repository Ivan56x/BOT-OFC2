let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola ππ», unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de Luis King - Bot*

*β€ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/H18N0f8seDsBdOyAuweUIT

*2.-* https://chat.whatsapp.com/CViICouF14MCcpiRFBAm5l

*3.-* https://chat.whatsapp.com/GkeP7U13SLMA2moZmRqtYd
`.trim(), wm, media, [['πΈπ π°π» πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
