import fg from 'api-dylux';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) {
    return m.text(

        `*◦Ingresa un enlace de un video de Facebook.*\n*◦Ejemplo:* ${

          usedPrefix + command

        } https://fb.watch/hPoaWhs8af/`,

    );
  }


  try {
    const result = await fg.fbdl(args[0]);

    conn.sendFile(

        m.chat,

        result.videoUrl,

        'fb.mp4',

        `🤍 ⤿ Título: ${result.title}`,

        m,

    );
  } catch {

    /* m.reply(

      "*_ Lo siento, hubo un problema al intentar descargar el archivo._*"
*/


  }
};

handler.help = ['facebook'].map((v) => v + ' *<enlace>*');

handler.tags = ['downloader'];

handler.command = /^((facebook|fb)(downloder|dl)?)$/i;

export default handler;
