function GetIcon(url) {
  if (url.split('?')[0] in faviconsJson){
    return faviconsJson[url.split('?')[0]]
  }else{
    return `https://www.google.com/s2/favicons?domain=${url.split('?')[0]}&sz=256`
  }
}

const faviconsJson = {

"http://127.0.0.1/pgadmin4/browser/" : "icons/Fav/pgAdmin.svg",
"https://eva.fing.edu.uy/login/index.php": "icons/Fav/fing.svg",
"https://github.com/Augusto-p": "icons/Fav/Github.svg",
"https://icomoon.io/app/#/select": "icons/Fav/iconmoon.svg",
"file:///C:/Users/augus/Documents/Chrome/OpenFing/index.html": "icons/Fav/Openfing2.svg"

}