# Site + atalho — Apropriação de Obra

Estes arquivos substituem o conteúdo do repositório `apropriacao-atalho`.

## O que mudou

Antes, o endereço abria direto o app. Agora:

- `/` (raiz) → **site da marca**, que explica o produto e tem os botões de instalar
- `/app/` → o **atalho** que abre o app (é o que estava na raiz antes)

Quem já instalou o atalho no celular continua abrindo o app normalmente: a página da
raiz detecta que está rodando como app instalado e manda direto para `/app/`.

## Como subir no GitHub

1. Abra o repositório `apropriacao-atalho`.
2. Apague os arquivos antigos da raiz: `index.html`, `sw.js`, `manifest.webmanifest`.
   (os ícones e o `offline.html` podem ficar — eles são substituídos pelos daqui)
3. Clique em **Add file → Upload files** e arraste **o conteúdo desta pasta**
   (os arquivos e as pastas `app/` e `icons/`), não a pasta inteira.
4. Confirme com **Commit changes**.
5. Espere 1 a 2 minutos e abra o endereço do GitHub Pages.

## Ver o site quando o app já está instalado

No Android, tocar num link que pertence ao app instalado abre o app, não o navegador — e a
página da raiz, ao perceber que está rodando dentro do app, vai direto para `/app/`.

Para ver o site mesmo assim, use o endereço com `?site=1` no fim:

    https://victor10raph-gif.github.io/apropriacao-atalho/?site=1

Esse é o link para divulgar a quem já tem o app instalado (você, por exemplo, ao mostrar para
um cliente). Nele aparece um botão **↩ Voltar ao app** no canto inferior direito.

Dentro do app há também um **i** discreto no canto inferior esquerdo que leva ao site.

Para quem ainda não instalou nada, o link normal (sem `?site=1`) mostra o site direto.

## Depois de subir

- No celular, **feche o atalho pelo gerenciador de apps e abra de novo**: o service worker
  só troca de versão quando todas as janelas são fechadas.
- Para divulgar, mande o endereço da **raiz** (o site), não mais o do app.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O site da marca |
| `app/index.html` | O atalho que abre o app dentro de uma casca própria |
| `manifest.webmanifest` | Diz ao celular o nome, o ícone e que ao instalar deve abrir `/app/` |
| `sw.js` | Guarda a casca para abrir rápido e avisar quando está sem internet |
| `offline.html` | Tela de "sem internet" |
| `icons/` | Ícones do app |
| `.nojekyll` | Impede o GitHub de processar os arquivos como blog |
