
var ports = [];
self.addEventListener('connect', function(e) {
    setupInterval();
    ports.push(e.ports[0]);
});

var intervalID;
function setupInterval () {
    if (!intervalID) {
        setInterval(function () {
            sendToAll('>> ' + Math.random());
        }, 1000);
    }
}

function sendToAll(message) {
    ports.forEach(function (port) {
        port.postMessage(message);
    });
}