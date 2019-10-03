if('serviceWorker' in navigator){
  navigator.serviceWorker.register('../sw.js')
  .then((req) => console.log('Service worker registrado'))
  .catch((err) => console.log('Service worker não registrado', err));
}
