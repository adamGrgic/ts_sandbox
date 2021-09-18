if ('serviceWorker' in navigator) {
    // console.log('service worker registered');
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('test.js')
        .then(reg => console.log('Service Worker: Registered'))
        .catch(err => console.log(`Service Worker: Error: ${err}`))
    })
}