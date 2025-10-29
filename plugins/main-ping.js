import speed from 'performance-now';
import {spawn, exec, execSync} from 'child_process';

const handler = async (m, {conn}) => {
  const timestamp = speed();
  const latensi = speed() - timestamp;
  exec(`neofetch --stdout`, (error, stdout, stderr) => {
    const child = stdout.toString('utf-8');
    const ssd = child.replace(/Memory:/, 'Ram:');
    m.reply(' *`» Velocidad`* [🛜]:' + `\n> ${latensi.toFixed(4)} _ms_`);
  });
};
handler.help = ['ping'];
handler.tags = ['main'];
handler.command = ['ping', 'speed', 'p'];

export default handler;
