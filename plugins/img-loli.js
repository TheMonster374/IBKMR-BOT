const handler = async (m, {conn, text, command}) => {
  const yh = global.loli;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {
    image: {
      url: url,
    },
    caption: '*_loli_*',
  }, {
    quoted: m,
  });
};
handler.command = /^(loli)$/i;
handler.tags = ['img'];
handler.help = ['loli'];
export default handler;

global.loli = [
  'https://i.pinimg.com/originals/b4/a1/91/b4a191e1d7f4d288f3b1204b159a9ff8.gif',
  'https://i.pinimg.com/originals/da/4b/9b/da4b9b9a26146c50c951410d9d2f1037.jpg',
  'https://i.pinimg.com/originals/8f/3c/a5/8f3ca5a8841f26959aa69.jpg',
  'https://i.pinimg.com/originals/3b/ca/e5/3bcae57f89d9289f8e6d4.jpg',
  'https://i.pinimg.com/originals/77/cd/4b/77cd4b654273b5cde1ce8.jpg',
  'https://i.pinimg.com/originals/fe/b1/55/feb1553dffb7410556c8f.jpg',
  'https://i.pinimg.com/originals/34/3d/26/343d26ea0d2621d47539c.jpg',
  'https://i.pinimg.com/originals/2b/c1/06/2bc10639d4f5cf5685185.jpg',
  'https://i.pinimg.com/originals/e9/8a/c8/e98ac8fe1f41e5ee062a3.jpg',
  'https://i.pinimg.com/originals/f7/d7/a3/f7d7a32e9ef6752de56e7.jpg',
  'https://i.pinimg.com/originals/23/aa/da/23aadaec3f564f1f481bf.jpg',
  'https://i.pinimg.com/originals/9e/b5/37/9eb537c835d143e26250b.jpg',
  'https://i.pinimg.com/564x/da/4b/9b/da4b9b9a26146c50c951410d9d2f1037.jpg',
  'https://i.pinimg.com/736x/8f/3c/a5/8f3ca5a8841f26959aa69.jpg',
  'https://i.pinimg.com/564x/3b/ca/e5/3bcae57f89d9289f8e6d4.jpg',
];
