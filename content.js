function rs (s) {
    return s[Math.floor(Math.random() * s.length)]
}

// from https://stackoverflow.com/questions/5558613/replace-words-in-the-body-text
function replaceInText(element, pattern, replacement) {
    for (let node of element.childNodes) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                replaceInText(node, pattern, replacement);
                break;
            case Node.TEXT_NODE:
                node.textContent = node.textContent.replace(pattern, replacement);
                break;
            case Node.DOCUMENT_NODE:
                replaceInText(node, pattern, replacement);
        }
    }
}

function mainReplacementFunction () {
    let timeA = new Date().getTime();
    
    chrome.storage.sync.get("is_enabled", ({is_enabled}) => {
        if (is_enabled === true) {
            chrome.storage.sync.get("method", ({method}) => {
                if (method === "かんたん") {
                    let i = 0;
                    
                    //document.body.innerHTML = document.body.innerHTML.replace(/天皇/g, ()=>{i++; return rs(["点","店","展","転","添","篆","典","貼","添","填","貂","恬","ten"]) + rs(["脳","嚢","能","農","膿","悩","濃","応","王","喃","納","know"])})
                    
                    replaceInText(document.body, /天皇/g, ()=>{i++; return rs(["点","店","展","転","添","篆","典","貼","添","填","貂","恬","ten"]) + rs(["脳","嚢","能","農","膿","悩","濃","応","王","喃","納","know"])})
                    
                    console.log("Total match : " + i);
                    
                    chrome.storage.sync.get("counter", ({counter}) => {
                        chrome.storage.sync.set({counter: counter + i})
                    })
                }
            })
        }
    });
    
    let timeB = new Date().getTime();
    
    console.log(timeB - timeA)
    
    setTimeout(mainReplacementFunction, Math.max((timeB - timeA)*200, 1000))
}

window.addEventListener("load", () => {
    mainReplacementFunction();
})