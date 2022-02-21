function rs (s) {
    return s[Math.floor(Math.random() * s.length)]
}

chrome.storage.sync.get("method", ({method}) => {
    if (method === "かんたん") {
        document.body.innerHTML = document.body.innerHTML.replace(/天皇/g, ()=>(rs("点店展転添篆典貼添") + rs("脳嚢能農膿悩濃応王")))
    }
})