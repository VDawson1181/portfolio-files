// Description: This script is used to listen for messages from the iframe and redirect the parent window to the prize page.
window.addEventListener("message", ev => {    
    if(ev.origin !== "http://127.0.0.1:5500/") return; //Check origin for security..... if necessary.

    console.log(ev.data);
    window.location.replace(ev.data);
})