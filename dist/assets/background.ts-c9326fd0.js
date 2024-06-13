chrome.tabs.onUpdated.addListener((o,n,e)=>{console.log(`Change URL: ${e.url}`)});chrome.bookmarks.getRecent(10,o=>{console.log("bookmarks:",o)});console.log("this is background service worker");
