// Código elaborado por: Monster 🗿🚬

import fetch from 'node-fetch';
import fs from 'fs';
const commandAddData = [];

const handler = async (m, {command, usedPrefix, conn, text}) => {
// mensaje de ayuda
  const helpMessage = `
> *Problema - Error en un comando*

_Este comando te permite enviar un informe sobre algun comando que este fallando a mi propietario, luego analizará si tu informe es válido o no._

*Uso:*
\`${usedPrefix + command}\` nombre del comando + error/falla

*Parámetros:*
\`name\` » Nombre del comando (sin espacios).\n
\`error\` » Realiza una breve descripción del problema que presenta el comando \n

*Ejemplo:*
\`${usedPrefix + command}\` issues + enviar al propietario un informe sobre la falla de algun comando 
`.trim();
  if (!text) return conn.reply(m.chat, helpMessage, m);

  try {
    const [name, error] = text.split('+').map((item) => item.trim());
    if ( !name || !error) {
      return conn.reply(m.chat, '> *Faltan parámetros.* Asegúrate de proporcionar todos los datos requeridos.', m);
    }


    const formattedName = name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
    const formattedError = error.replace(/"/g, '\'');

    // contenido del mensaje
    commandAddData.push({
      commandName: formattedName,
      error: formattedError,
    });

    const reply = await conn.reply(m.chat, '> *¡Informe enviado exitosamente!*\n\nResponde a este mensaje con "enviar" o "👍" sólo si deseas enviar los informes a mis creadores para que lo arreglen en *Inabakumori-Bot*.', m);
    // envio al owner
    handler.before = async function(m, {conn}) {
      if (m.quoted && m.quoted.id === reply.id && ['enviar', '👍'].includes(m.text.toLowerCase())) {
        const databaseCommandAdd = Buffer.from(JSON.stringify(commandAddData, null, 2), 'utf-8');
        const jsonString = JSON.stringify(commandAddData, null, 2);
        await conn.reply('573136737414@s.whatsapp.net', `*Solicitud de @${m.sender.split('@')[0]} Para reparar comandos en Inabakumori-Bot*`, null, {mentions: [m.sender]});
        await conn.sendMessage('573136737414@s.whatsapp.net', {document: databaseCommandAdd, mimetype: 'application/json', fileName: `commandAdd_${m.sender}.json`}, {quoted: m});
        await conn.reply('573136737414@s.whatsapp.net', `${jsonString}`, m);
        await conn.reply(m.chat, `¡Archivo enviado a mis creadores!`, m);
      }
    };
  } catch (error) {
    console.error('Error al procesar la solicitud: ', error);
    conn.reply(m.chat, '¡Ocurrió un error al procesar la solicitud!', m);
  }
};

handler.command = /^(issues)$/i;
handler.tags = ['main'];
handler.help = ['issues'];
handler.exp = 50;
handler.fail = null;
export default handler;
