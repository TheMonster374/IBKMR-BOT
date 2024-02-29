import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
import { es as esDefault, en as enDefault } from "./lib/multi-language/_default.js"
import { en, es, id, ar, pt } from "./lib/idiomas/total-idiomas.js"
/* © 2024 ALS | All rights reserved */

global.botnumber = "" //Ejemplo: +59309090909
global.confirmCode = ""

global.owner = [
  ['5491141493818', '👑 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 👑', true],
  ['5491156673266', '?', true],
];

global.suittag = [''];
global.prems = [''];
global.mods = [];

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰❰ Multi Idioma Dinámico : Dynamic Multi Language (MID-GB) ❱❱
// [ES] > Agregué uno de los idiomas disponibles para el Bot en "mid".
// [EN] > I added one of the languages available for the Bot in "mid".

// ❰❰ IDIOMAS DISPONIBLES : AVAILABLE LANGUAGES ❱❱
// Español 👉 es           
// English 👉 en
global.lenguajeGB = es
global.mid = esDefault
global.version_language = '1.0 (MID-GB)'

// [ES] > Si "default_language" esta vacío, su idioma predeterminado será Español o se usará el idioma que cada usuario haya seleccionado al momento de registrarse. 
// [EN] > If "default_language" is empty, your default language will be Spanish or the language that each user has selected at the time of registration will be used.
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

//━━━━━━━STICKERS━━━━━━━━━━━━ 
global.packname = '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕 | 𝑴𝑰𝑵𝑰';
global.author = '𝑩𝒚 𝑨𝑳𝑺';
//━━━━━━━━━━━━━━━━━━━━━━ 

global.wm = '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕 | 𝑴𝑰𝑵𝑰';
global.titulowm = '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕 | 𝑴𝑰𝑵𝑰';
global.titulowm2 = `𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕 | 𝑴𝑰𝑵𝑰`
global.igfg = '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕 | 𝑴𝑰𝑵𝑰';
//━━━━━ESPERAS━━━━━━━━ 
global.wait = '*𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐. ⏳*'; 
global.waitt = '*𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐.. ⏳*';
global.waittt = '*𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐... ⏳*';
global.waitttt = '*𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐.... ⏳*';
//━━━━━━━IMAGENES━━━━━━━━━━━━ 
global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.img = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'
global.img2 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'

global.img3 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg' //prem
global.img4 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg' //prem

global.img5 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'
global.img6 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'
global.img7 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'
global.img8 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'
global.img9 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'

global.img10 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'
global.img11 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'
global.img12 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'
global.img13 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'
global.img14 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'
global.img15 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'

global.img16 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg' //+18

global.img17 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'
global.img18 = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'

global.logogit = 'https://telegra.ph/file/74d2dc8efd57a7b51422e.jpg'
//━━━━━━━IMAGENES1.2━━━━━━━━━━━━ 
global.imgPerfil = fs.readFileSync('./storage/img/perfil.png')
global.imgRegistro = fs.readFileSync('./storage/img/registro.png')
global.imgEliminarRegistro = fs.readFileSync('./storage/img/eliminar_registro.png')
//━━━━━━IMAGENES 2━━━━━━━━━━ 

global.imgmenu = fs.readFileSync('./Menu3.png') 
global.ytlogo = fs.readFileSync('./Menu3.png') 
global.miniurl = fs.readFileSync('./Menu.png') 
global.catalogo = fs.readFileSync('./storage/img/catalogo.png')
global.thumbnail = fs.readFileSync('./Menu.png')


// ❰ RANDOMS ❱
global.welgata = [tk, ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb, tk, ths, asistencia]
global.redesMenu = [nna, nn, nn2, nnn, nnnt, nnntt, nnnttt, nnnttt1, nnnttt2, nnnttt3, nnnttt4, nnnttt5, md, ig, paypal, yt, asistencia, fb, tk]
global.accountsgb = [channel1, channel2, channel3, tk, ig, yt, paypal, fb, ths, md, nna, asistencia]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18]
global.gataVidMenu = ['https://qu.ax/AAvg.mp4', 'https://qu.ax/SeFS.mp4', 'https://qu.ax/NqZN.mp4']
global.gataImg = [imagen1, imagen2, imagen3, imagen4]
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

  
//━━━━━━━MARCA━━━━━━━━ 
/*global.test = conn.sendMessage(m.chat, { image: { url: pp }, caption: str, contextInfo: { forwardingScore: 9999, externalAdReply: { showAdAttribution: true, title: packname, body: desc, sourceUrl: null, mediaType: 1, thumbnail: imgPerfil }}}*/


global.desc = 'WhatsApp Bot Multi Device'

global.group = 'https://chat.whatsapp.com/GR9pMnqYI8DB9HoJnl2HkB'
//━━━━━━━MARCA━━━━━━━━ 
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.fgif2 = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${wm}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${packname}\n      ${wm}`, 'jpegThumbnail': catalogo }}}

//━━━━━━━━━━━━━━━━━━━━━━ 
global.yt = "https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np"
global.yt2 = "https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np"
global.ig = "https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np"
global.fb = "https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np"
global.tk = "https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np"
global.ths = "https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np"
global.paypal = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np'
global.asistencia = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' //Contacto
global.bot = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' //𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 💖🐈


global.nna = 'https://atom.bio/als' // Cuentas
global.nn2 = 'https://atom.bio/als' // Grupo tg GataBot
global.nna2 = 'https://atom.bio/als' // Help
global.nn = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' // Grupo 1
global.nnn = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' // Grupo 2
global.nnnt = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' // Grupo 3
global.nnntt = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' // Grupo 4
global.nnnttt = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' // Grupo 5
global.nnnttt1 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' // Grupo 6 COL
global.nnnttt2 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' // Grupo 7 COL
global.nnnttt3 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' // Grupo 8 COL
global.nnnttt4 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' // Grupo 9 COL
global.nnnttt5 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' // MULTI - BOTS
global.nnnttt6 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' // A.T.M.M
global.channel1 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np'
global.channel2 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np'
global.channel3 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np'
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •


global.addescargas = `𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕 | 𝑴𝑰𝑵𝑰 𝑩𝒚 𝑨𝑳𝑺`
global.adimagen = `𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕 | 𝑴𝑰𝑵𝑰 𝑩𝒚 𝑨𝑳𝑺` 

//━━━━━━━━━━━━━━━━━━━━━━ 
global.apikasu = "https://apikasu.onrender.com"
global.apikeykasu = "SebastianDevelop"
global.xyro = '' //xyroine api key
global.clayza = '' //clayzaaubert api key

//Reacciones
global.rwait = '⏰'
global.done = '✅'
global.error = '❌'




global.nn = 'https://atom.bio/als'
//━━━━━━━━━━━━━━━━━━━━━━ 
//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\n𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊`;
global.gt = '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊';
global.mysticbot = '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊';
global.md = 'https://atom.bio/als';
global.mysticbot = 'https://atom.bio/als';
global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.nomorown = '5491144775561';
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': packname, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
