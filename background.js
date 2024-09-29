
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.Type === "GET") {
    fetch(request.URL_API)
      .then(response => response.text())
      .then(data => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {
            Action: request.Action,
            Body: data,
            URL_API: request.URL_API,
            Type: "SHOW",
            API: request.API
          });
        });
      })
      .catch(error => console.error("Error en la solicitud Fetch:", error));
  }
});
