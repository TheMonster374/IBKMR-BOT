import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});

const handler = async (m, {conn, text, usedPrefix, command: cmd}) => {
  let num = m.quoted?.sender || m.mentionedJid?.[0] || text;
  if (!num) throw `*Ejemplo*: ${usedPrefix + cmd} @tag / 50499698074`;
  num = num.replace(/\D/g, '') + '@s.whatsapp.net';
  if (!(await conn.onWhatsApp(num))[0]?.exists) throw 'Este usuario no existe, asegurese de escribir bien el numero.';
  const img = await conn.profilePictureUrl(num, 'image').catch((_) => './src/avatar_contact.png');
  const bio = await conn.fetchStatus(num).catch((_) => { });
  const name = await conn.getName(num);
  const business = await conn.getBusinessProfile(num);
  const format = PhoneNum(`+${num.split('@')[0]}`);
  const country = regionNames.of(format.getRegionCode('international'));
  const wea = `*WhatsApp Stalking 🪴*\n\n\t\t*° Pais :* ${country.toUpperCase()}\n\t\t*° Nombre :* ${name ? name : '-'}\n\t\t*° Formato:* ${format.getNumber('international')}\n\t\t*° Url:* wa.me/${num.split('@')[0]}\n\t\t*° Tag :* @${num.split('@')[0]}\n\t\t*° Bio :* ${bio?.status || '-'}\n\t\t*° Bio Uptade:* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*Business Info 🫐*\n\n\t\t*° BusinessId:* ${business.wid}\n\t\t*° Website:* ${business.website ? business.website : '-'}\n\t\t*° Email:* ${business.email ? business.email : '-'}\n\t\t*° Categoria:* ${business.category}\n\t\t*° Direccion:* ${business.address ? business.address : '-'}\n\t\t*° Zona Horaria:* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n\t\t*° Descripcion*: ${business.description ? business.description : '-'}` : '*Cuenta De WhatsApp*'}`;
	img ? await conn.sendMessage(m.chat, {image: {url: img}, caption: wea, mentions: [num]}, {quoted: m}) : m.reply(wea);
};

handler.help = ['whatsappStalk'];
handler.tags = ['stalkear'];
handler.command = /^whatsappStalk$/i;

export default handler;
