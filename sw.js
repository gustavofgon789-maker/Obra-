self.addEventListener('install', (e) => {
  console.log('SW Instalado');
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Necessário para o Chrome validar o PWA
});
