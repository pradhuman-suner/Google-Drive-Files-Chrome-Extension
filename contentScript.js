chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {


  // Action to Download FIles
  if (request.action === "downloadFiles") {
    // Your download logic here

    document.querySelectorAll("[data-id]").forEach(async function (item) {
      var downloadURL = "";
      var HTMLData;
      var URL =
        "https://drive.google.com/uc?export=download&id=" +
        item.getAttribute("data-id");
      //var win = window.open(URL, "_blank");
    
      try {
        // Fetch HTML content using the fetch API
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        HTMLData = await response.text();
    
        // Regular expression to match the form element and capture the action attribute value
        const formRegex =
         /<form id="download-form" action="(.*?)" method="post">/s;
    
        // Find and capture the action attribute value using the regular expression
        var match = HTMLData.match(formRegex);
    
        if (match && match[1]) {
          const actionAttributeValue = match[1];
          const decodedURL = actionAttributeValue.replace(/&amp;/g, '&');
          console.log("Action attribute value:", decodedURL);
          window.open(decodedURL, "_blank");
        } else {
          console.log("Form element or action attribute not found.");
        }
      } catch (error) {
        console.error("There was a problem fetching the HTML:", error);
      }
    });
  }
});
