if ('serviceWorker' in navigator) {
    console.log('service worker registered');
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('testfolder/sw_cached_pages.js')
        .then(reg => console.log('Service Worker: Registered'))
        .catch(err => console.log(`Service Worker: Error: ${err}`))
    })
}