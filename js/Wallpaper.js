const owner = 'Augusto-p';
const repo = 'F1-Chrome-Extencion';
const branch = 'WallpapersUrls';
const SizeUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/Size.txt`;

// Función para obtener la cantidad de archivos
async function getFileCount(url) {
    const response = await fetch(url);
    const data = await response.text();
    return data;
}


function UploadWallpaper() {
    const MAX = 3;
    let Option = Math.floor(Math.random() * MAX) + 1
    switch (Option) {
        case 2:
            Service_backiee();
            break;
        case 3:
            Service_WSupercar();
            break;
        default:
            Service_hdcarwallpapers();
            break;
    }

}


async function Service_backiee() {
    const URLBase = "https://backiee.com"
    let Soap = document.createElement("div")
    let response = await fetch(`${URLBase}/categories/car`);
    Soap.innerHTML = await response.text();
    let MAX = Soap.querySelector("span.pager-text").textContent.replace(" ", "").split("of")[1]
    let Page = Math.floor(Math.random() * MAX) + 1;
    response = await fetch(`${URLBase}/categories/car?page=${Page}`);
    Soap.innerHTML = await response.text();
    let Walls = Soap.querySelectorAll("div.col-sm-4.col-md-4 a")
    let URL = Walls[Math.floor(Math.random() * Walls.length)]["href"];
    response = await fetch(`${URL}`);
    Soap.innerHTML = await response.text();
    let Wallpaper = Soap.querySelector("div.container-fluid div.dropdown-menu a.dropdown-item")["href"]
    document.body.style.backgroundImage = `url('${Wallpaper}')`
}


async function Service_WSupercar() {
    const URLBase = "https://www.wsupercars.com"
    let Soap = document.createElement("div")
    let response = await fetch(`${URLBase}/regular-wallpapers`);
    Soap.innerHTML = await response.text()
    let MAX = Soap.querySelector("div.pagination span.page-numbers.dots ~ a").textContent
    let Page = Math.floor(Math.random() * MAX) + 1;
    response = await fetch(`${URLBase}/regular-wallpapers/page/${Page}/`);
    Soap.innerHTML = await response.text();
    let Walls = Soap.querySelectorAll("div.wallpaper-box")
    let url = new URL(Walls[Math.floor(Math.random() * Walls.length)].querySelector("a:last-of-type")["href"]);
    let params = new URLSearchParams(url.search);
    document.body.style.backgroundImage = `url('${params.get('pic')}')`

}

async function Service_hdcarwallpapers() {
    const URLBase = "https://www.hdcarwallpapers.com"
    let Soap = document.createElement("div")
    let response = await fetch(`${URLBase}/random_wallpapers`);
    Soap.innerHTML = await response.text();
    let URL = Soap.querySelector("li.wall a")["href"].replace(window.origin, "")
    response = await fetch(`${URLBase}${URL}`);
    Soap.innerHTML = await response.text();
    let Img = Soap.querySelector("span.original a")["href"].replace(window.origin, "")
    document.body.style.backgroundImage = `url('${URLBase}${Img}')`
}

UploadWallpaper()

// Service_WSupercar()