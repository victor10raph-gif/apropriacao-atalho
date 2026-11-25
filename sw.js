/* Service worker: guarda só a casca (o site, a página do atalho, os ícones e o aviso de "sem internet").
   O app em si NUNCA é guardado em cache: ele vem sempre do servidor, ao vivo. */
const VERSAO = "obra-v3";
const CASCA = ["./", "./index.html", "./app/", "./app/index.html", "./offline.html", "./manifest.webmanifest",
               "./icons/icone-192.png", "./icons/icone-512.png", "./icons/apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(CASCA)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSAO).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;   // o app fica fora disto
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).catch(() => caches.match(req).then((r) => r || caches.match("./app/index.html"))
      .then((r) => r || caches.match("./offline.html"))));
    return;
  }
  e.respondWith(caches.match(req).then((r) => r || fetch(req)));
});
