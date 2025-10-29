// Código elaborado por: https://github.com/GataNina-Li

import fetch from 'node-fetch';
const numPersonaje = 10;
let currentPage = null;
const fantasyDBPath = './fantasy.json';

const handler = async (m, {command, usedPrefix, conn, text}) => {
  const jsonURL = 'https://raw.githubusercontent.com/TheMonster374/anime/main/anime.json';
  const response = await fetch(jsonURL);
  const data = await response.json();

  const allCharacters = data.infoImg.map((character) => `• ${character.name}`).join('\n');
  const totalCharacters = data.infoImg.length;

  const classOrder = ['Común', 'Poco Común', 'Raro', 'Épico', 'Legendario', 'Sagrado', 'Supremo', 'Transcendental'];
  const charactersByClass = {};
  data.infoImg.forEach((character) => {
    const classType = character.class;
    if (!charactersByClass[classType]) {
      charactersByClass[classType] = [];
    }
    charactersByClass[classType].push(`• ${character.name}`);
  });
  const sortedCharactersByClass = Object.fromEntries(
      Object.entries(charactersByClass).sort(
          (a, b) => classOrder.indexOf(a[0]) - classOrder.indexOf(b[0]),
      ));

  const charactersByType = {};
  data.infoImg.forEach((character) => {
    const types = character.type.split(',').map((type) => type.trim());
    types.forEach((type) => {
      if (!charactersByType[type]) {
        charactersByType[type] = [];
      }
      charactersByType[type].push(`• ${character.name}`);
    });
  });

  let databaseFY = [];
  if (fs.existsSync(fantasyDBPath)) {
    const data = fs.readFileSync(fantasyDBPath, 'utf8');
    databaseFY = JSON.parse(data);
  }
  const calculatePrice = (calificacionesPersonaje, character) => {
    const likes = calificacionesPersonaje.filter((voto) => voto.like).length || 0;
    const superlikes = calificacionesPersonaje.filter((voto) => voto.superlike).length || 0;
    const dislikes = calificacionesPersonaje.filter((voto) => voto.dislike).length || 0;
    const incrementos_like = Math.floor(likes / 1);
    const incrementos_superlike = Math.floor(superlikes / 1);
    const incrementos_dislike = Math.floor(dislikes / 1);
    const aumento_por_like = (likes >= 50) ? incrementos_like * 0.01 : incrementos_like * 0.02;
    const aumento_por_superlike = (superlikes >= 50) ? incrementos_superlike * 0.03 : incrementos_superlike * 0.05;
    const decremento_por_dislike = incrementos_dislike * 0.01;
    const nuevoPrecio = character.price + (character.price * aumento_por_like) + (character.price * aumento_por_superlike) - (character.price * decremento_por_dislike);
    const roundedPrice = Math.round(nuevoPrecio);
    return (roundedPrice < 50) ? 50 : roundedPrice;
  };

  const lowCostCharacters = data.infoImg
      .filter((character) => character.price !== undefined && character.price >= 0 && character.price <= 700)
      .map((character) => {
        const personaje = character.name;
        const calificacionesPersonaje = [];
        for (const usuarioObj of databaseFY) {
          const usuario = Object.values(usuarioObj)[0];
          const flow = usuario.flow || [];
          const calificaciones = flow.filter((voto) => voto.character_name === personaje);
          calificacionesPersonaje.push(...calificaciones);
        }
        const finalPrice = calculatePrice(calificacionesPersonaje, character);
        const priceText = (finalPrice !== character.price) ? `~\`${character.price}\`~ 👉 \`${finalPrice}\` ${rpgshopp.emoticon('money')}` : `\`\`\`${character.price}\`\`\` *${rpgshopp.emoticon('money')}*`;
        return {name: character.name, price: priceText, finalPrice};
      }).sort((a, b) => {
        if (a.finalPrice !== b.finalPrice) {
          return a.finalPrice - b.finalPrice;
        } else {
          return a.price - b.price;
        }
      }).map((character) => `• ${character.name} » ${character.price}`);

  const highCostCharacters = data.infoImg
      .filter((character) => character.price !== undefined && character.price > 700)
      .map((character) => {
        const personaje = character.name;
        const calificacionesPersonaje = [];
        for (const usuarioObj of databaseFY) {
          const usuario = Object.values(usuarioObj)[0];
          const flow = usuario.flow || [];
          const calificaciones = flow.filter((voto) => voto.character_name === personaje);
          calificacionesPersonaje.push(...calificaciones);
        }
        const finalPrice = calculatePrice(calificacionesPersonaje, character);
        const priceText = (finalPrice !== character.price) ? `~\`${character.price}\`~ 👉 \`${finalPrice}\` ${rpgshopp.emoticon('money')}` : `\`\`\`${character.price}\`\`\` *${rpgshopp.emoticon('money')}*`;
        return {name: character.name, price: priceText, finalPrice};
      }).sort((a, b) => {
        if (a.finalPrice !== b.finalPrice) {
          return a.finalPrice - b.finalPrice;
        } else {
          return a.price - b.price;
        }
      }).map((character) => `• ${character.name} » ${character.price}`);

  currentPage = text ? parseInt(text) : 1;
  let totalPages = 1;

  const maxSectionLength = Math.max(
      allCharacters.split('\n').length,
      ...Object.values(sortedCharactersByClass).map((characters) => characters.length),
      ...Object.values(charactersByType).map((characters) => characters.length),
      lowCostCharacters.length,
      highCostCharacters.length,
  );

  if (maxSectionLength > numPersonaje) {
    totalPages = Math.ceil(maxSectionLength / numPersonaje);
  }

  if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
    return conn.reply(m.chat, `Número de página inválido. Utiliza un número entre 1 y ${totalPages}.`, m);
  }

  const pp = 'https://telegra.ph/file/23aadaec3f564f1f481bf.jpg';
  await conn.sendFile(m.chat, pp, 'error.jpg', getFormattedReply(), fkontak, true, {
    contextInfo: {
      'forwardingScore': 200,
      'isForwarded': false,
      'externalAdReply': {
        showAdAttribution: false,
        title: `🌟 FANTASÍA RPG`,
        body: `🎈 Lista de personajes`,
        mediaType: 1,
        sourceUrl: 'https://whatsapp.com/channel/0029VaPhM3S3wtbBXOzf6t0j',
        thumbnailUrl: 'https://i.imgur.com/yafZkFB.jpeg',
      }}});

  function formatCharacterList(characterList) {
    let result = '';
    for (const [classType, characters] of Object.entries(characterList)) {
      if (characters.length <= numPersonaje) {
        result += `*${classType}:*\n${characters.join('\n')}\n\n`;
      } else {
        const pages = chunkArray(characters, numPersonaje);
        const currentPageContent = pages[currentPage - 1];
        if (currentPageContent) {
          result += `*${classType}*\n${currentPageContent.join('\n')}\n\n`;
        }
      }
    }
    return result.trim();
  }

  function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  function getFormattedReply() {
    return `
${totalPages !== 1 ? `_Para ir a una página específica escriba *${usedPrefix +command} [Número página]*_\n\n` : ''}
*❱❱ Número total de personajes:* ${totalCharacters}

*❱❱ Personajes:*
\`\`\`Página ${currentPage} de ${totalPages}\`\`\`
*⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯*
${chunkArray(allCharacters.split('\n'), numPersonaje)[currentPage - 1].join('\n')}

*❱❱ Personajes de Menor Costo:*
\`\`\`Página ${currentPage} de ${totalPages}\`\`\`
*⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯*
${chunkArray(lowCostCharacters, numPersonaje)[currentPage - 1] ? chunkArray(lowCostCharacters, numPersonaje)[currentPage - 1].join('\n') : lowCostCharacters.join('\n')}

*❱❱ Personajes de Mayor Costo:*
\`\`\`Página ${currentPage} de ${totalPages}\`\`\`
*⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯*
${chunkArray(highCostCharacters, numPersonaje)[currentPage - 1] ? chunkArray(highCostCharacters, numPersonaje)[currentPage - 1].join('\n') : highCostCharacters.join('\n')}

*❱❱ Personajes por Clase:*
\`\`\`Página ${currentPage} de ${totalPages}\`\`\`
*⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯*
${formatCharacterList(sortedCharactersByClass)}

*❱❱ Personajes por Tipo:*
\`\`\`Página ${currentPage} de ${totalPages}\`\`\`
*⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯*
${formatCharacterList(charactersByType)}
`.trim();
  }
};

handler.help = ['fyl'];
handler.tags = ['rpg'];
handler.command = /^(fylista|fyl|fantasyl|fantasylista)$/i;
handler.register = true;
export default handler;


