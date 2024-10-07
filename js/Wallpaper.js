const owner = 'Augusto-p';
const repo = 'F1-Chrome-Extencion';
const branch = 'WallpapersUrls';
const SizeUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/Size.txt`;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function mergeHTMLCollections(collection1, collection2) {
    // Crea un contenedor temporal
    let container = document.createElement('div');

    // Clona y agrega los elementos del primer HTMLCollection
    Array.from(collection1).forEach(element => container.appendChild(element.cloneNode(true)));

    // Clona y agrega los elementos del segundo HTMLCollection
    Array.from(collection2).forEach(element => container.appendChild(element.cloneNode(true)));

    // Retorna el HTMLCollection combinado
    return container.children;
}

function getURLParameter(paramName, url) {
    let params = new URLSearchParams(new URL(url).search);
    return params.get(paramName);
}

function filterItemsWithoutClass(collection, classToRemove) {
    // Creamos un contenedor temporal
    let container = document.createElement('div');
    
    // Recorremos los elementos y agregamos solo los que NO tienen la clase a remover
    Array.from(collection).forEach(element => {
        if (!element.classList.contains(classToRemove)) {
            container.appendChild(element.cloneNode(true)); // Clonamos el elemento para no modificar el DOM original
        }
    });

    // Retornamos el nuevo HTMLCollection con los elementos filtrados
    return container.children;
}

async function Wallpaper_Service_F1_by_WSupercar() {
    const URLBase = "https://www.wsupercars.com/"
    let Soap = document.createElement("div")
    let response = await fetch(`${URLBase}/wallpapers/formula-1/`);
    Soap.innerHTML = await response.text();
    let AllCarsLists = Soap.getElementsByClassName("car-list-holder")[0]
    let allCarsLI = AllCarsLists.getElementsByTagName("li")
    let CarLiN = getRandomInt(allCarsLI.length)
    let CarLink = allCarsLI[CarLiN].getElementsByTagName("a")[0]["href"]
    let response2 = await fetch(CarLink);
    Soap.innerHTML = await response2.text();
    let WallpaperHolt = Soap.getElementsByClassName("wallpaper-holder")[0]
    let WallpaperBoxs = WallpaperHolt.getElementsByTagName("ul")
    let WallpaperHoltwide = Soap.getElementsByClassName("wide-wallpaper-holder")[0]    
    if (WallpaperHoltwide !== undefined) {
        let WallpaperWideBoxs = WallpaperHolt.getElementsByTagName("ul")
        WallpaperBoxs = mergeHTMLCollections(WallpaperBoxs, WallpaperWideBoxs)        
    }
    let WallpaperBox = WallpaperBoxs[getRandomInt(WallpaperBoxs.length)].getElementsByTagName("li")
    let WallpaperLink = WallpaperBox[WallpaperBox.length - 1].getElementsByTagName("a")[0]["href"]
    let URL = getURLParameter("pic", WallpaperLink)
    document.body.style.backgroundImage = `url('${URL}')`
}


async function Wallpaper_Service_Anime_by_4kwallpapers() {
    const URLBase = "https://4kwallpapers.com"
    let Soap = document.createElement("div")
    let response = await fetch(`${URLBase}/anime/`);
    Soap.innerHTML = await response.text();
    let maxPage = Soap.getElementsByClassName("pages")[0].getElementsByTagName("span")[0].nextElementSibling.textContent
    let Page = getRandomInt(parseInt(maxPage)-1)+1
    let response2 = await fetch(`${URLBase}/anime/?page=${Page}`);
    Soap.innerHTML = await response2.text();
    let picsList = Soap.getElementsByClassName("pics")[0].getElementsByClassName("wallpapers__canvas_image")
    let Pic = picsList[getRandomInt(picsList.length)]["href"]
    let response3 = await fetch(Pic);
    Soap.innerHTML = await response3.text();
    let WallpaperLinks = Soap.getElementsByClassName("current")
    let Img = WallpaperLinks[WallpaperLinks.length -1]["href"].replace(window.location.origin, "")
    document.body.style.backgroundImage = `url('${URLBase}${Img}')`;
}


async function Wallpaper_Service_Soccer_by_alphacoders() {
    const MaxPage = 200
    const URLBase ="https://alphacoders.com"
    let Soap = document.createElement("div")
    let Page = getRandomInt(MaxPage)+1
    let response = await fetch(`${URLBase}/soccer-wallpapers?page=${Page}`);
    Soap.innerHTML = await response.text();
    let galery = Soap.getElementsByClassName("thumbs-container-desktop")[0]
    let Items = galery.getElementsByClassName("item")
    Items = filterItemsWithoutClass(Items, "in-thumb-ad")
    let Wallpaperlink = Items[getRandomInt(Items.length)].getElementsByTagName("a")[0]["href"]
    let response2 = await fetch(Wallpaperlink);
    Soap.innerHTML = await response2.text();
    let Img = Soap.getElementsByClassName("main-content-premium")[0].parentElement.parentElement["href"]
    document.body.style.backgroundImage = `url('${Img}')`
    
    

}


async function Wallpaper_Service_Football_by_alphacoders() {
    const MaxPage = 15
    const URLBase ="https://alphacoders.com"
    let Soap = document.createElement("div")
    let Page = getRandomInt(MaxPage)+1
    let response = await fetch(`${URLBase}/nfl-wallpapers?page=${Page}`);
    Soap.innerHTML = await response.text();
    let galery = Soap.getElementsByClassName("thumbs-container-desktop")[0]
    let Items = galery.getElementsByClassName("item")
    Items = filterItemsWithoutClass(Items, "in-thumb-ad")
    let Wallpaperlink = Items[getRandomInt(Items.length)].getElementsByTagName("a")[0]["href"]
    let response2 = await fetch(Wallpaperlink);
    Soap.innerHTML = await response2.text();
    let Img = Soap.getElementsByClassName("main-content-premium")[0].parentElement.parentElement["href"]
    document.body.style.backgroundImage = `url('${Img}')`
    
           
}


async function Wallpaper_Service_Basketball_by_alphacoders() {
    const MaxPage = 143
    const URLBase ="https://alphacoders.com"
    let Soap = document.createElement("div")
    let Page = getRandomInt(MaxPage)+1
    let response = await fetch(`${URLBase}/basketball-wallpapers?page=${Page}`);
    Soap.innerHTML = await response.text();
    let galery = Soap.getElementsByClassName("thumbs-container-desktop")[0]
    let Items = galery.getElementsByClassName("item")
    Items = filterItemsWithoutClass(Items, "in-thumb-ad")
    let Wallpaperlink = Items[getRandomInt(Items.length)].getElementsByTagName("a")[0]["href"]
    let response2 = await fetch(Wallpaperlink);
    Soap.innerHTML = await response2.text();
    let Img = Soap.getElementsByClassName("main-content-premium")[0].parentElement.parentElement["href"]
    document.body.style.backgroundImage = `url('${Img}')`
    
               
}

async function Wallpaper_Service_Motorcycle_by_alphacoders() {
    const MaxPage = 172
    const URLBase ="https://alphacoders.com"
    let Soap = document.createElement("div")
    let Page = getRandomInt(MaxPage)+1
    let response = await fetch(`${URLBase}/motogp-wallpapers?page=${Page}`);
    Soap.innerHTML = await response.text();
    let galery = Soap.getElementsByClassName("thumbs-container-desktop")[0]
    let Items = galery.getElementsByClassName("item")
    Items = filterItemsWithoutClass(Items, "in-thumb-ad")
    let Wallpaperlink = Items[getRandomInt(Items.length)].getElementsByTagName("a")[0]["href"]
    let response2 = await fetch(Wallpaperlink);
    Soap.innerHTML = await response2.text();
    let Img = Soap.getElementsByClassName("main-content-premium")[0].parentElement.parentElement["href"]
    document.body.style.backgroundImage = `url('${Img}')`
    
               
}




// https://www.vecteezy.com/free-photos/motorcycle-wallpaper?page=2



async function Wallpaper_Service_Cars_by_hdcarwallpapers() {
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




// async function Service_backiee() {
//     const URLBase = "https://backiee.com"
//     let Soap = document.createElement("div")
//     let response = await fetch(`${URLBase}/categories/car`);
//     Soap.innerHTML = await response.text();
//     let MAX = Soap.querySelector("span.pager-text").textContent.replace(" ", "").split("of")[1]
//     let Page = Math.floor(Math.random() * MAX) + 1;
//     response = await fetch(`${URLBase}/categories/car?page=${Page}`);
//     Soap.innerHTML = await response.text();
//     let Walls = Soap.querySelectorAll("div.col-sm-4.col-md-4 a")
//     let URL = Walls[Math.floor(Math.random() * Walls.length)]["href"];
//     response = await fetch(`${URL}`);
//     Soap.innerHTML = await response.text();
//     let Wallpaper = Soap.querySelector("div.container-fluid div.dropdown-menu a.dropdown-item")["href"]
//     document.body.style.backgroundImage = `url('${Wallpaper}')`
// }
// async function Service_WSupercar() {
//     const URLBase = "https://www.wsupercars.com"
//     let Soap = document.createElement("div")
//     let response = await fetch(`${URLBase}/regular-wallpapers`);
//     Soap.innerHTML = await response.text()
//     let MAX = Soap.querySelector("div.pagination span.page-numbers.dots ~ a").textContent
//     let Page = Math.floor(Math.random() * MAX) + 1;
//     response = await fetch(`${URLBase}/regular-wallpapers/page/${Page}/`);
//     Soap.innerHTML = await response.text();
//     let Walls = Soap.querySelectorAll("div.wallpaper-box")
//     let url = new URL(Walls[Math.floor(Math.random() * Walls.length)].querySelector("a:last-of-type")["href"]);
//     let params = new URLSearchParams(url.search);
//     document.body.style.backgroundImage = `url('${params.get('pic')}')`

// }



