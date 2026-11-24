# Atalho instalável do app (Apropriação de Obra)

Esta pasta é um site mínimo que abre o app em tela cheia, com ícone próprio,
para instalar no celular ou tablet sem passar por loja de aplicativos.

## Como publicar (uma vez só)

1. Copie a pasta `docs` inteira para a raiz do repositório do app no GitHub
   (o mesmo repositório onde está o `app.py`).
2. O endereço do app já está configurado em `docs/index.html`:
   `https://raphaelapropriacaoonline.streamlit.app`
   Só mexa nessa linha se um dia o endereço do app mudar.
3. No GitHub: aba **Settings** → menu lateral **Pages** → em "Build and deployment",
   Source: **Deploy from a branch**; Branch: **main** e pasta **/docs** → **Save**.
4. Espere um ou dois minutos. O endereço do atalho será:
   `https://victor10raph-gif.github.io/Apropria-o-Online/`
   (o repositório precisa ser público para o GitHub Pages funcionar no plano gratuito)

## Como instalar no aparelho

- **Android (Chrome):** abra o endereço do atalho, toque no menu de três pontos e
  escolha **Instalar app** (ou "Adicionar à tela inicial").
- **iPhone / iPad (Safari):** abra o endereço, toque em **Compartilhar** e escolha
  **Adicionar à Tela de Início**. No iPhone isso só funciona pelo Safari.

Depois de instalado, o app abre em tela cheia, sem barra de navegador, com a logo
na tela inicial do aparelho.

## Confira no primeiro uso

- entrar com usuário e senha;
- salvar uma apropriação **com foto** (enviando arquivo e pela câmera);
- baixar um PDF (RDO ou boletim).

Se o envio de foto falhar com erro 403, acrescente esta linha em
`.streamlit/config.toml`, na seção `[server]`, e publique de novo:

    [server]
    enableXsrfProtection = false

Isso é necessário porque o app roda dentro desta página, em outro endereço, e
alguns navegadores bloqueiam o cookie de segurança usado no envio de arquivos.

## Depois, se for para a Play Store

Esta mesma pasta serve de base: é a partir dela que se gera o APK/AAB
(com Bubblewrap ou PWABuilder). O arquivo de verificação do domínio
(`.well-known/assetlinks.json`) também vai aqui dentro, nesta pasta.

## Arquivos

- `index.html` — a página que abre o app (contém o endereço a configurar)
- `manifest.webmanifest` — nome, cores e ícones do app instalado
- `sw.js` — guarda só a casca; o app vem sempre do servidor
- `offline.html` — tela mostrada quando não há internet
- `icons/` — ícones em vários tamanhos
- `.nojekyll` — evita que o GitHub Pages ignore arquivos iniciados por ponto
