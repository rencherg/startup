let registerForm = document.getElementById("websocket-content");
let websocketData = JSON.parse(localStorage.getItem("sampleWebsocketData"))

websocketData["data"].forEach(comment => {

    let pTag = document.createElement("p")
    pTag.textContent = comment
    registerForm.appendChild(pTag);

});
