# Golden-Vac Equipamentos

Site institucional em Next.js App Router, TypeScript e Tailwind CSS, configurado para exportação estática. O site apresenta os equipamentos, serviços, trabalhos, informações institucionais e canais de orçamento.

## Preparar e executar

Requer Node.js 20.9 ou superior e pnpm 11.25.0. Instale as dependências e inicie o modo local:

```bash
pnpm install
pnpm dev
```

O build estático é criado em `out/`:

```bash
pnpm build
```

Envie o conteúdo da pasta `out/` para a raiz pública da hospedagem. Não é necessário manter um servidor Node em produção. O script de build cria os placeholders e converte imagens JPEG/PNG adicionadas às pastas de fotos em WebP responsivo.

## Publicar pelo GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` gera o site e publica a pasta `out/` quando houver envio para `main` ou `master` (ou execução manual pela aba **Actions**). Para ativar:

1. Envie este projeto para um repositório GitHub.
2. No repositório, abra **Settings → Pages** e escolha **GitHub Actions** como origem de publicação.
3. Envie uma alteração para `main` ou `master` e acompanhe a execução em **Actions**. Ao terminar, o GitHub mostrará o endereço publicado.

O workflow instala a versão travada pelo `pnpm-lock.yaml`, configura o caminho base para repositórios de projeto (`usuario.github.io/nome-do-repositorio`) e também funciona em um repositório de site de usuário (`usuario.github.io`).

## Atualizar os dados

- **Logo:** o arquivo de marca transparente `public/logo-golden-vac.png` é usado no cabeçalho e no rodapé. Atualize também o texto alternativo se a marca ou o nome mudar.
- **Telefones, e-mail, endereço, redes, cobertura e FINAME:** edite `src/config/site.ts`. Confirme os comentários `TODO` antes de publicar. A seção FINAME aparece apenas quando `finame` é `true`.
- **Equipamento:** inclua um item em `src/data/equipamentos.ts`, com slug, resumo, specs, fotos e aplicações. Use “Consulte” em qualquer especificação ainda não confirmada. A página individual e sua rota estática são geradas a partir da lista.
- **Fotos da galeria:** os 16 arquivos recebidos estão em `public/galeria/`; os originais também permanecem na pasta `FOTOSEVIDEOS/`. Para novas fotos, coloque os arquivos em `public/galeria/` e adicione um item em `src/data/galeria.ts`, com texto alternativo descritivo, categoria e equipamento. Use caminhos como `/galeria/foto-entrega.jpg`. No build, são geradas versões WebP em 640, 1280 e 1920 px e servidas por `srcset`; SVGs e vídeos locais podem ser cadastrados diretamente. Fotos de equipamentos podem ficar em `public/equipamentos/`.
- **Projetos sob medida:** os textos e itens ficam em `src/data/sob-medida.ts`. O vídeo, poster e legendas ficam em `public/video/`. A origem recebida em `FOTOSEVIDEOS/V1.mp4` tinha 24,17 segundos; o arquivo final foi ajustado para cerca de 29 segundos, preservando o tom da narração, para acompanhar o VTT e o VideoObject. Para repetir a preparação dessa origem com H.264, áudio AAC e carregamento progressivo:

  ```bash
  ffmpeg -i FOTOSEVIDEOS/V1.mp4 -vf "setpts=29/24.169116*PTS,scale=720:1280:force_original_aspect_ratio=decrease,pad=720:1280:(ow-iw)/2:(oh-ih)/2,format=yuv420p" -af "atempo=24.169116/29" -c:v libx264 -preset veryfast -crf 28 -maxrate 410k -bufsize 820k -c:a aac -b:a 96k -t 29 -movflags +faststart public/video/sob-medida.mp4
  ```

  O comando acima foi ajustado para esta origem e gerou um arquivo de 1,44 MB. Para outro vídeo, substitua a entrada e atualize os fatores de `setpts` e `atempo` com a duração obtida pelo `ffprobe`; confira o tamanho final e, se passar de 2 MB, aumente o CRF gradualmente. Para extrair o poster do primeiro segundo:

  ```bash
  ffmpeg -ss 1 -i public/video/sob-medida.mp4 -frames:v 1 -c:v libwebp -quality 82 public/video/sob-medida-poster.webp
  ```

  As legendas estão em `public/video/sob-medida.vtt`. Para ajustar a sincronização, edite os horários de início e fim dos sete blocos, distribuindo-os conforme a duração das frases dentro dos 29 segundos. Mantenha cada bloco com no máximo duas linhas.
- **Textos de serviços, segmentos, etapas e FAQ:** edite `src/data/site-content.ts` e remova/atualize os `TODO` após confirmação interna.
- **Envio complementar do formulário:** preencha `formspreeId` em `src/config/site.ts`. O pedido continua sendo preparado para envio pelo WhatsApp.

## Antes de publicar

Confirme os itens marcados `TODO` em `src/config/site.ts` e `src/data/site-content.ts`, substitua placeholders por fotos autorizadas e revise o endereço completo e a política de privacidade. O formulário é enviado ao WhatsApp configurado; só há envio complementar ao Formspree quando um ID é definido.

## Estrutura principal

```text
src/
  app/                    páginas, metadata, sitemap e robots
  components/             seções, navegação, galeria e formulários
  config/site.ts          dados da empresa e contatos
  data/                   equipamentos, galeria e conteúdo das seções
public/
  galeria/                fotos de trabalhos
  equipamentos/           fotos de produtos
scripts/                  geração dos placeholders e conversão WebP
```
