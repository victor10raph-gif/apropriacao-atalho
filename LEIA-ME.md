# Site + atalho — Apropriação de Obra

Estes arquivos substituem o conteúdo do repositório `apropriacao-atalho`.

## Nesta versão

O site foi refeito para mostrar o app inteiro: planejamento e replanejamento, custo real,
empresas, identidade visual por obra e todo o resto. Tem uma seção nova, **"Tudo o que o app
faz, por dentro"**, com um bloco por módulo e a lista do que cada um faz.

A versão do `sw.js` subiu para `obra-v5` — é isso que faz quem já visitou o site receber a
página nova em vez da guardada no celular. **Se você mexer no site de novo, suba esse número**,
senão o visitante antigo continua vendo a versão velha.

Para atualizar: basta substituir `index.html`, `sw.js` e `LEIA-ME.md` no repositório. O resto
(`app/`, ícones, manifest, offline) não mudou.

## O que mudou na estrutura (da primeira publicação)

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
