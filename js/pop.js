document.addEventListener('DOMContentLoaded', function () {
    chrome.bookmarks.getTree(function (bookmarks) {
      displayBookmarks(bookmarks[0].children);
    });
  });
  
  function displayBookmarks(bookmarks) {
    var bookmarksList = document.getElementById('bookmarksList');
    cont = 1
    bookmarks.forEach(function (bookmark) {
      if (bookmark.children) {
        // Si hay más carpetas, recursivamente mostrar sus contenidos
        displayBookmarks(bookmark.children);
      } else {
        // Si es un marcador, agregar a la lista
        if (cont <= 14){
          

          let li = document.createElement('li');
          let a = document.createElement('a');
          let img = document.createElement('img')
          let span = document.createElement('span')
          
          img.src = faviconURL(bookmark.url)
          // img.src = `https://www.google.com/s2/favicons?domain=${bookmark.url.split('?')[0]}&sz=256`
          img.src = GetIcon(bookmark.url)
          a.href = bookmark.url;
          span.textContent = bookmark.title;
          a.appendChild(img)
          a.appendChild(span)
          li.appendChild(a);
          bookmarksList.appendChild(li);
          cont++
        }
      }
    });
  }
  


  
  function faviconURL(u) {
    const url = new URL(chrome.runtime.getURL("/_favicon/"));
    url.searchParams.set("pageUrl", u);
    url.searchParams.set("size", "1000");
    return url.toString();
  }

