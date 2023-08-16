chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'downloadFiles') {
      // Your download logic here
      var token = "";
     
      document.querySelectorAll('[data-id]').forEach(function(item) {
        var downloadURL = "";
        var URL = "https://drive.google.com/uc?export=download&id=" + item.getAttribute('data-id');
        var win = window.open(URL, '_blank');
        win.test = function() {
          downloadURL = URL + document.getElementById('download-form').action
          console.log('New script appended!');
        };
        win.test();
        setTimeout(function() {
          //document.querySelector('[type="submit"]').click();
  
         
          window.open(downloadURL, '_blank');
  
          console.log('New script appended!');
        }, 10);
      });
    }
  });
  