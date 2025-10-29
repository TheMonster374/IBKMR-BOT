import axios from 'axios';
const handler = async (m, {conn, text}) => {
  if (!text) return conn.reply(m.chat, '*_ingresa el nombre de alguin de github_*\n\n*ejemplo*: githubstalk AleXD0009', m);

  await m.reply('*B U S C A N D O ✅*');
  const request = await githubstalk(text);
  const {username, following, followers, type, bio, company, blog, location, email, public_repo, public_gists, profile_pic} = request;
  const thumb = await (profile_pic);
  const hasil = `*⬤── 「 𝙂𝙄𝙏𝙃𝙐𝘽 𝙎𝙏𝘼𝙇𝙆 」 ──⬤*
➸ *nombre de usuario*: ${username}
➸ *Bio*: ${bio}
➸ *Compañía*: ${company}
➸ *Email:* ${email}
➸ *Blog:* ${blog}
➸ *Repositorios públicos:* ${public_repo}
➸ *Gists Publik:* ${public_gists}
➸ *Follower:* ${followers}
➸ *Following:* ${following}
➸ *Lokasi:* ${location}
➸ *Type:* ${type}
`;

  conn.sendFile(m.chat, catalogo, 'githubstalk.jpg', hasil, m);
};
handler.help = ['githubstalk'].map((v) => v + '');
handler.tags = ['stalkear'];
handler.command = /^(githubstalk)$/i;

export default handler;

async function githubstalk(user) {
  return new Promise((resolve, reject) => {
    axios.get('https://api.github.com/users/'+user)
        .then(({data}) => {
          const hasil = {
            username: data.login,
            nickname: data.name,
            bio: data.bio,
            id: data.id,
            nodeId: data.node_id,
            profile_pic: data.avatar_url,
            url: data.html_url,
            type: data.type,
            admin: data.site_admin,
            company: data.company,
            blog: data.blog,
            location: data.location,
            email: data.email,
            public_repo: data.public_repos,
            public_gists: data.public_gists,
            followers: data.followers,
            following: data.following,
            ceated_at: data.created_at,
            updated_at: data.updated_at,
          };
          resolve(hasil);
        });
  });
}
