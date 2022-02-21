function rs (s) {
    return s[Math.floor(Math.random() * s.length)]
}

chrome.storage.sync.get("method", ({method}) => {
    if (method === "かんたん") {
        document.body.innerHTML = document.body.innerHTML.replace(/天皇/g, ()=>(rs(["点","店","展","転","添","篆","典","貼","添","填","貂","恬","ten"]) + rs(["脳","嚢","能","農","膿","悩","濃","応","王","喃","納","know"])))
    }
})