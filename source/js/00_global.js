(function() {
    'use strict';

    // signal site js loaded
    window.vs.js = true;
    var html = document.documentElement;
    html.classList.add('js-site');

    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('/worker.js', {
            scope: '/'
        });
    }

})();
