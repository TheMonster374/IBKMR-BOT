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

/*NUMERS OWNERS*/
global.owner = [
 ['5491141493818', '👑 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 👑', true],
 ['5491156673266', '?', true],
];
/*└────ׂ─ׂ─ׂ─ׂ───*/

global.suittag = [''];
global.prems = [''];
global.mods = [];

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

//━━━━━━━STICKERS━━━━━━━━━━━━ 
global.packname = '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕 | 𝑴𝑰𝑵𝑰';
global.author = '𝑩𝒚 𝑨𝑳𝑺';
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



//fake
global.fsizedoc = '999999'
global.fpagedoc = '9999'
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

  
//━━━━━━━MARCA━━━━━━━━ 
global.desc = 'WhatsApp Bot Multi Device By ALS'

//Enlaces
global.yt = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np'
global.ig = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np'
global.paypal = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np'
global.md = 'https://atom.bio/als';
global.git = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np'
global.linkwabot = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np'
global.email = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np'
global.group = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' //Grupo ofc
global.group2 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' //enlace curiosity
global.group3 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' //Curiosity global
global.group4 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' //colaboración multi bots
global.group5 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' //Colaboración CuriosityBot - NovaBot
global.group6 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' //Colaboración GataBot - CuriosityBot
global.group7 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' //Colaboración CuriosityBot - Criwilop
global.group8 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' //Colaboración CuriosityBot - SakuraBot
global.group9 = 'https://chat.whatsapp.com/F4L8yH7CipS5RWp5LXT0np' //Colaboración OnyxBot - CuriosityBot
global.channel = 'https://whatsapp.com/channel/F4L8yH7CipS5RWp5LXT0np'
global.channel2 = 'https://whatsapp.com/channel/F4L8yH7CipS5RWp5LXT0np'
global.linkSity = [yt, ig, md, paypal, git, channel, channel2]

//━━━━━━━MARCA━━━━━━━━ 
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.fgif2 = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${wm}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${packname}\n      ${wm}`, 'jpegThumbnail': catalogo }}}
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': packname, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];

//━━━━━━━━━━━━━━━━━━━━━━ 
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
global.gt = '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊';

global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired

global.nomorown = '5491144775561';
global.wm2 = `${dia} ${fecha}\n𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊`
global.multiplier = 99;
/* RPG */
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];

global.cmenut = "❖––––––『"
global.cmenub = "┊✦ "
global.cmenuf = "╰━═┅═━––––––๑\n"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
 
global.dmenut = "*❖─┅──┅〈*"
global.dmenub = "*┊»*"
global.dmenub2 = "*┊*"
global.dmenuf = "*╰┅────────┅✦*"
global.htjava = "⫹⫺"

global.htki = "*⭑•̩̩͙⊱•••• ☪*"
global.htka = "*☪ ••••̩̩͙⊰•⭑*"

global.comienzo = "• • ◕◕════"
global.fin = " • •"

//* ************************
/*global.mysticbot = '𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊';
global.mysticbot = 'https://atom.bio/als';
global.wm2 = `${dia} ${fecha}\n𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊`;*/



const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
