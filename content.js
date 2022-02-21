function rs (s) {
    return s[Math.floor(Math.random() * s.length)]
}

chrome.storage.sync.get("is_enabled", ({is_enabled}) => {
    if (is_enabled === true) {
        chrome.storage.sync.get("method", ({method}) => {
            if (method === "かんたん") {
                let i = 0;
                document.body.innerHTML = document.body.innerHTML.replace(/天皇/g, ()=>{i++; return rs(["点","店","展","転","添","篆","典","貼","添","填","貂","恬","ten"]) + rs(["脳","嚢","能","農","膿","悩","濃","応","王","喃","納","know"])})
                console.log("Total match : " + i);
                chrome.storage.sync.get("counter", ({counter}) => {
                    chrome.storage.sync.set({counter: counter + i})
                })
            }
        })
    }
})