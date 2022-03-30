var connectionRequests=2;
var currentConnections=500;

function addConnection(element) {
    removeRequest(element);
    currentConnections++;
    document.getElementById("connectionCount").innerText=currentConnections;
}

function removeRequest(element) {
    element.parentElement.parentElement.remove();
    connectionRequests--;
    document.getElementById("requestCount").innerText=connectionRequests;  
}

function changeName() {
    document.getElementById("mainUsername").innerText="Rey Skywalker";
}