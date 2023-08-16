chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: downloadFiles
    });
  });
  
  function downloadFiles() {
    // Your download logic here
    var token = "";
    document.querySelectorAll('[data-id]').forEach(function(item) {
      var URL = "https://drive.google.com/uc?export=download&id=" + item.getAttribute('data-id') + token;
      var win = window.open(URL, '_blank');
      win.test = function() {
        console.log('New script appended!');
      };
      win.test();
      setTimeout(function() {
        document.querySelector('[type="submit"]').click();
        console.log('New script appended!');
      }, 10);
    });
  }
  