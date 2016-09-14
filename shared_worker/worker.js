'use strict';

let ports = [];
self.addEventListener('connect', (e) => {
    setupInterval();
    ports.push(e.ports[0]);
});

let intervalID;
function setupInterval () {
    if (!intervalID) {
        intervalID = setInterval(() => {
            sendToAll(getRandColor());
        }, 1000);
    }
}

function sendToAll(message) {
    ports.forEach(port => port.postMessage(message));
}

function getRandColor() {
    return [
        '#',
        Math.round(Math.random() * 255).toString(16),
        Math.round(Math.random() * 255).toString(16),
        Math.round(Math.random() * 255).toString(16)
    ].join('');
}