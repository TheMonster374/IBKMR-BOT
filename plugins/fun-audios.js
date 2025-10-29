const handler = async (m, {conn, command, text}) => {
  const chatbot = `
┏━⊜「 *🎶​ 𝘼𝙐𝘿𝙄𝙊𝙎*」
┃
┃ 🔊​ anadieleimporta | a nadie le 
┃ importa
┃
┃ 🔊​ araara | ara ara
┃
┃ 🔊​ un Pato| un pato| un pato 
┃ que va caminando alegremente|
┃ Un pato | Un Pato 
┃
┃ 🔊​ UwU|uwu|Uwu|uwU|UWU
┃
┃ 🔊​ vetealavrg|vete a la vrg|
┃ vete a la verga
┃
┃ 🔊​ fiesta viernes| viernes |
┃ Viernes | viernes fiesta 
┃
┃ 🔊​ vivan!! | vivan los novios
┃ vivanlosnovios
┃
┃ 🔊​ Yamete | yamete | Yamete 
┃ kudasai | yamete kudasai
┃
┃ 🔊​ epico | esto va a ser epico
┃
┃ 🔊​ shitpost
┃
┃ 🔊​ AUUGH
┃
┃ 🔊​ Ah
┃
┃ 🔊​ Bruh
┃
┃ 🔊​ Chag | GigaChad
┃
┃ 🔊​ Chino | China
┃
┃ 🔊​ Como | Que | Por que
┃
┃ 🔊​ Eh
┃
┃ 🔊​ Elsa pato | Elsa Pato 
┃ | Pato| Elsa| Zapato
┃
┃ 🔊​ FBI|Policia
┃
┃ 🔊​ Gay|Gei|Maricon|Marica|Mk
┃
┃ 🔊​ Gemido|Gemir|Sexo
┃
┃ 🔊​ Puto | Puta | Hijo de puta
┃ | Sorra | Zorra| Hija de puta|
┃ Perra | Hijo de perra | Hija 
┃ de perra
┃
┃ 🔊​ Kawai|Lindo|Linda|Cute|
┃ Hermoso|Hermosa
┃
┃ 🔊​ Loligod|LoliGod|Loli
┃
┃ 🔊​ Masturbar|Masturbacion|
┃ Paja|Pajas|Ganso|Jalar|Jalarsela
┃
┃ 🔊​ Moka|Chan|Moka Chan
┃
┃ 🔊​ Ohayou|Buenos dias|Buenas
┃
┃ 🔊​ Ohio
┃
┃ 🔊​ Or or or | Freddy Fazbear|
┃ Freddy fazbear | Freddy 
┃ |Fazbear | Five nights at 
┃ freddys | Five Nights At 
┃ Freddys | Fnaf
┃
┃ 🔊​ Pito|Pene|Verga
┃
┃ 🔊​ Peru|Peruano|Pe|Pony|
┃ Cumear|Cumeado
┃
┃ 🔊​ Smurfcat | SmurfCat | 
┃ Smurf | Pitufo gato | 
┃ Pitufo Gato | We lie |
┃ We love | We live | 
┃ Alan Walker
┃
┃ 🔊​ Triste|Llora|Llorando|
┃ Sad|Cry|Tristeza|Mal
┃
┃ 🔊​ Whistle|Silbido|Josh 
┃ Hutcherson|Josh|Hutcherson
┃
┃ 🔊​ Wow|WOW|Sorprendente|
┃ Sorpresa|Increible|Genial
┃
┃ 🔊​ Y el chiste master?|
┃ Y el chiste master¿ | Chiste|
┃ Chiste malo
┃
┗━━━━━━━━━━━━━⬣
*Puedes escribir cualquiera de las anteriores palabras para usar los audios sin necesidad del prefijo (es decir, el ".")*

Recuerda que los audios deben estar activados en este grupo, usa *.on2 audios*

> ${wm} ${author}
`.trim();
  m.reply(chatbot, null, {mentions: conn.parseMention(chatbot)});
};

handler.help = ['audi'];
handler.tags = ['fun'];
handler.command =/^(audi|Audi)/i;
handler.fail = null;
handler.register = true;
export default handler;
