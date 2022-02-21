// Initialize button with user's preferred color
let enableButton = document.getElementById("enableButton");

//let methods = ["かんたん", "機械学習(Word2Vec)"]
let methods = ["かんたん"]
let methods_to_elem = {}

for (let x of methods) {
    let methodsList = document.getElementById("methodsList");
    let e = document.createElement("button");
    e.innerHTML = x;
    e.className = "methodsOption";
    methodsList.append(e);
    methods_to_elem[x] = e;
    e.addEventListener("click", () => {
        chrome.storage.sync.set({method: x}, update_ui);
    });
}

function update_ui () {
    chrome.storage.sync.get("is_enabled", ({is_enabled}) => {
        if (is_enabled === true) {
            enableButton.innerHTML = "God Emperor Removal: Enabled"
            enableButton.className = "enabled"
        } else if (is_enabled === false) {
            enableButton.innerHTML = "God Emperor Removal: Disabled"
            enableButton.className = ""
        } else {
            chrome.storage.sync.set({is_enabled: false});
            enableButton.innerHTML = "God Emperor Removal: Disabled"
        }
    });
    
    chrome.storage.sync.get("counter", ({counter}) => {
        let counterBar = document.getElementById("counterBar");
        counterBar.innerHTML = counter + " x GE removed!"
    });
    
    chrome.storage.sync.get("method", ({method}) => {
        let selected = false;
        for (let m in methods_to_elem) {
            let e = methods_to_elem[m]
            if (m === method){
                e.className = "methodsOption enabled"
                selected = true;
            } else {
                e.className = "methodsOption"
            }
        }
        if (selected === false) {
            chrome.storage.sync.set({method: "かんたん"})
            console.log("set default method...")
            methods_to_elem["かんたん"].className = "methodsOption enabled"
        }
    });
}

update_ui();

enableButton.addEventListener("click", async () => {
  chrome.storage.sync.get("is_enabled", ({is_enabled}) => {
    if (is_enabled === true) {
        chrome.storage.sync.set({is_enabled: false}, update_ui);
    } else {
        chrome.storage.sync.set({is_enabled: true}, update_ui);
    }
  });

  /*
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {...},
  });*/
});