import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = [
        "mp3",
        "mp4", 
        "mp3doc",
        "mp4doc"
    ]
    let ytmsg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { "extendedTextMessage": { "text":'Downloader YouTube', "title": 'Jotchua-Bot', 'jpegThumbnail': global.ytlogo}}}
    
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature)) return conn.reply(m.chat, `*Ingresa el formato en que deseas descargar más el titulo de un video o musica de YouTube.*\n\nEjemplo : ${usedPrefix + command} *mp3* SUICIDAL-IDOL - ecstacy\n\nFormatos disponibles :\n${usedPrefix + command} *mp3*\n${usedPrefix + command} *mp3doc*\n${usedPrefix + command} *mp4*\n${usedPrefix + command} *mp4doc*`, m, )
    if (lister.includes(feature)) {
        if (feature == "mp3") {
            if (!inputs) return conn.reply(m.chat, `*Ingresa el titulo de un video o musica de YouTube.*`, m, )
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
    let txt = `╭──────────\n`
       txt += `│🐶 *Título ∙* ${vid.title}\n`
       txt += `│🕜 *Duración ∙* ${vid.timestamp}\n`
       txt += `│👁 *Visitas ∙* ${vid.views}\n`
       txt += `│📚 *Autor ∙* ${vid.author.name}\n`
       txt += `│☁ *Publicado ∙* ${vid.ago}\n`
       txt += `│🔗 *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
       txt += `╰──────────\n\n`
       txt += `*Espera @${m.sender.split`@`[0]},en lo que envio el audio*`
let buttonMessage= {
'document': { url: `https://github.com/AleXD0009/Jotchua-Test` },
'mimetype': `application/pdf`,
'fileName': `🐶 | 𝚈𝚘𝚞𝚝𝚞𝚋𝚎 𝙿𝚕𝚊𝚢`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'mentionedJid': [m.sender],
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${vid.url}`,
'mediaType': 2,
'previewType': 'VIDEO',
'title': `${vid.title}`,
'body': null,
'thumbnail': await (await fetch(vid.thumbnail)).buffer(),
'sourceUrl': 'https://youtube.com/' }},
'caption': txt,
'footer': '\nVideos de YouTube',
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: ytmsg })
    }} catch {
    throw '_*𝐘𝐓 𝐏𝐋𝐀𝐘*_\n\n*Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*';    
    }}
    if (command == 'play2') {
    try {   
    const video = global.API('CFROSAPI', `/api/v1/ytmp4?url=${yt_play[0].url}`)
    const ttl2 = await yt_play[0].title
    const buff_vid = await getBuffer(video);
    const fileSizeInBytes2 = buff_vid.byteLength;
    const fileSizeInKB2 = fileSizeInBytes2 / 1024;
    const fileSizeInMB2 = fileSizeInKB2 / 1024;
    const size2 = fileSizeInMB2.toFixed(2);       
    if (size2 >= limit2) {  
    await conn.sendMessage(m.chat, {text: `_*𝐘𝐓 𝐏𝐋𝐀𝐘*_\n\n*Descargue su vídeo en ${video}*`}, {quoted: m});
    return;    
    }     
    if (size2 >= limit1 && size2 <= limit2) {  
    await conn.sendMessage(m.chat, {document: buff_vid, mimetype: 'video/mp4', fileName: ttl2 + `.mp4`}, {quoted: m});   
    return;
    } else {
    await conn.sendMessage(m.chat, {video: buff_vid, mimetype: 'video/mp4', fileName: ttl2 + `.mp4`}, {quoted: m});   
    return;    
    }} catch {
    throw '_*𝐘𝐓 𝐏𝐋𝐀𝐘*_\n\n*Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*';    
    }
  }
};
handler.command = /^(playtest|play2|musicaTest)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? 'd ' : 'd ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? 'h ' : 'h ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? 'm ' : 'm ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? 's' : 's') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

const getBuffer = async (url, options) => {
    options ? options : {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1,}, ...options, responseType: 'arraybuffer'});
    return res.data;
};
