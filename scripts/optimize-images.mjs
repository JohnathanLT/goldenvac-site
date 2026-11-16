import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
async function ensurePlaceholders() {
  const dirs = ['public/galeria','public/equipamentos','public/placeholders'];
  for (const d of dirs) await fs.mkdir(path.join(root,d), {recursive:true});
  const svg = (title, subtitle='Foto a substituir') => `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900" viewBox="0 0 1400 900"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#29292b"/><stop offset="1" stop-color="#151516"/></linearGradient><linearGradient id="gold"><stop stop-color="#e6c65a"/><stop offset="1" stop-color="#a8821e"/></linearGradient><pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#fff" stroke-opacity=".035"/></pattern></defs><rect width="1400" height="900" fill="url(#bg)"/><rect width="1400" height="900" fill="url(#grid)"/><path d="M0 730h1400" stroke="#c9a227" stroke-opacity=".25"/><circle cx="700" cy="365" r="78" fill="none" stroke="url(#gold)" stroke-width="8"/><text x="700" y="398" text-anchor="middle" fill="url(#gold)" font-family="Arial,sans-serif" font-size="100" font-weight="700">G</text><text x="700" y="520" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="30" font-weight="700" letter-spacing="5">${title}</text><text x="700" y="570" text-anchor="middle" fill="#aaa" font-family="Arial,sans-serif" font-size="22">${subtitle}</text></svg>`;
  await fs.writeFile(path.join(root,'public/placeholders/hero.svg'),svg('GOLDEN-VAC EQUIPAMENTOS','Saneamento e limpeza urbana'));
  await fs.writeFile(path.join(root,'public/placeholders/equipment.svg'),svg('EQUIPAMENTO GOLDEN-VAC'));
  await fs.writeFile(path.join(root,'public/placeholders/factory.svg'),svg('FÁBRICA GOLDEN-VAC'));
  for(let i=1;i<=12;i++) await fs.writeFile(path.join(root,`public/galeria/trabalho-${String(i).padStart(2,'0')}.svg`),svg('GOLDEN-VAC',`Foto a substituir · trabalho ${String(i).padStart(2,'0')}`));
}
await ensurePlaceholders();
for (const dir of ['public/galeria','public/equipamentos']) {
  const abs=path.join(root,dir);
  for(const file of await fs.readdir(abs)) {
    if(!/\.(jpe?g|png|tiff?)$/i.test(file)) continue;
    const input=path.join(abs,file), stem=path.parse(file).name;
    await fs.mkdir(path.join(abs,'optimized'), {recursive:true});
    const meta=await sharp(input).metadata();
    for(const width of [640,1280,1920]) {
      await sharp(input).resize({width,withoutEnlargement:false}).webp({quality:82,effort:5}).toFile(path.join(abs,'optimized',`${stem}-${width}.webp`));
    }
  }
}
console.log('Placeholders prontos; imagens de galeria convertidas para WebP responsivo.');
