if (get("Wallpapers") != null) {
    document.getElementById(get("Wallpapers")).checked = true

    switch (get("Wallpapers")) {
        case "SMWallpaper_Cars":
            Wallpaper_Service_Cars_by_hdcarwallpapers()
            break;
        case "SMWallpaper_F1":
            Wallpaper_Service_F1_by_WSupercar()
            break;
        case "SMWallpaper_Anime":
            Wallpaper_Service_Anime_by_4kwallpapers()
            break;
        case "SMWallpaper_Soccer":
            Wallpaper_Service_Soccer_by_alphacoders()
            break;
        case "SMWallpaper_Basketball":
            Wallpaper_Service_Basketball_by_alphacoders()
            break;
        case "SMWallpaper_Football":
            Wallpaper_Service_Football_by_alphacoders()

        break;
        case "SMWallpaper_Motorcycle":
        Wallpaper_Service_Motorcycle_by_alphacoders() 

        break;
        case "SMWallpaper_MotoGp":

        break;

            
        default:
            Wallpaper_Service_Cars_by_hdcarwallpapers()
            break;
    }

}

function LoadServices() {
    let Services = document.getElementsByName("SMService")
    Services.forEach(service => {
        let val = true;
        if (GetService(service.id) == "false") {
            val = false;
        }
        service.checked = val;
    });

    if (document.getElementById("SMService_F1").checked) {
        LoadF1Service()

    }
    if (document.getElementById("SMService_F2").checked) {
        LoadF2Service()

    }
    if (document.getElementById("SMService_F3").checked) {
        LoadF3Service()

    }
    if (document.getElementById("SMService_F1A").checked) {
        LoadF1AService()
    }

    if (document.getElementById("SMService_FE").checked) {
        LoadFEService()
    }

    if (document.getElementById("SMService_IndyCar").checked) {
        LoadIndyCarService()
    }
    
    if (document.getElementById("SMService_MotoGP").checked) {
        LoadMotoGPService()
    }
}


SettingsManagerButton.addEventListener("click", () => {
    SettingsManager.classList.toggle("ACTIVE")
})

SMWallpaperButton.addEventListener("click", () => {
    SMContent.classList.remove("ACTIVE")
})

SMServiceButton.addEventListener("click", () => {
    SMContent.classList.add("ACTIVE")
})

SMSave.addEventListener("click", () => {
    let Walpapers = document.getElementsByName("SMWallpaper");
    let WalpaperID = null;
    let index = 0;
    while ((index < Walpapers.length) && (WalpaperID == null)) {
        let wall = Walpapers[index];
        if (wall.checked) {
            WalpaperID = wall.id;
        }
        index++;
    }
    save("Wallpapers", WalpaperID);
    let Services = document.getElementsByName("SMService");
    Services.forEach(service => {
        SaveService(service.id, service.checked);
    });

    window.location.reload()
})



// SMServiceButton.click()
// SettingsManagerButton.click()
LoadServices()
