// Bom de Tela: service worker desligado (derrubava o Chrome do iPhone, 23/11/2026).
// Este arquivo so remove a versao antiga que ficou instalada nos aparelhos.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))).then(()=>self.registration.unregister()))});
// 202611232200
