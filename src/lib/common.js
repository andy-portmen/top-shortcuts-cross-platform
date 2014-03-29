var storage, get, popup, window, Deferred, content_script, tab, version;
/*
Storage Items:
  "history"
  "from"
  "to"
  "isTextSelection"
  "isDblclick"
  "enableHistory"
  "numberHistoryItems"
*/
/********/
if (typeof require !== 'undefined') {
  var firefox = require("./firefox.js");
  storage = firefox.storage;
  get = firefox.get;
  popup = firefox.popup;
  window = firefox.window;
  content_script = firefox.content_script;
  tab = firefox.tab;
  version = firefox.version;
  Deferred = firefox.Promise.defer;
}
else {
  storage = _chrome.storage;
  get = _chrome.get;
  popup = _chrome.popup;
  content_script = _chrome.content_script;
  tab = _chrome.tab;
  version = _chrome.version;
  Deferred = task.Deferred;
}
/********/
if (storage.read("version") != version()) {
  storage.write("version", version());
  tab.open("http://add0n.com/top-shortcuts.html");
}

popup.receive('open-tab-request', function (type) {
  switch (type) {
  case 'facebook':
    tab.open('https://www.facebook.com/');
    break;
  case 'plus':
    tab.open('https://plus.google.com/');
    break;
  case 'twitter':
    tab.open('https://twitter.com/');
    break;
  case 'linkedin':
    tab.open('https://www.linkedin.com/');
    break;
  case 'gmail':
    tab.open('https://mail.google.com/mail/');
    break;
   case 'yahoo':
    tab.open('https://mail.yahoo.com/');
    break;
  case 'microsoft':
    tab.open('https://mail.live.com/');
    break;
  case 'dropbox':
    tab.open('https://www.dropbox.com/');
    break;
  case 'amazon':
    tab.open('http://www.amazon.com/');
    break;
  case 'youtube':
    tab.open('https://www.youtube.com/');
    break;
  case 'flicker':
    tab.open('https://www.flickr.com/');
    break;
  case 'pandora':
    tab.open('http://www.pandora.com/');
    break;
  case 'bing':
    tab.open('http://www.bing.com/');
    break;
  case 'paypal':
    tab.open('https://www.paypal.com/');
    break;
  case 'ebay':
    tab.open('https://www.ebay.com/');
    break;
  case 'wikipedia':
    tab.open('https://www.wikipedia.org/');
    break;
  default:
    tab.open('');
    break;
}
});