// background.js

function set_storage_with_default (key, default_value){
  chrome.storage.sync.get(key, (dict) => {
      let d = dict[key];
      if (d === undefined) {
          console.log("setting default value");
          chrome.storage.sync.set({ [key]: default_value });
      }
  });
}

chrome.runtime.onInstalled.addListener(() => {
  set_storage_with_default("counter", 0);
  set_storage_with_default("is_enabled", false);
  set_storage_with_default("method", "かんたん");
  //chrome.storage.sync.set({ "counter": 0 });
  //chrome.storage.sync.set({ "is_enabled": false });
  //chrome.storage.sync.set({ "method": "かんたん" });
});

