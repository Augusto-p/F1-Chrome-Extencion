
const TemasElments = document.querySelector('.Teams .tbody')
const DriversElments = document.querySelector('.Drivers .tbody')
const F1Api = document.querySelector(".F1Api")
const TemasTable = document.querySelector('.table.Teams')
const DriversTable = document.querySelector('.table.Drivers')
const TemasButton = document.querySelector('.Teams')
const DriversButton = document.querySelector('.Drivers')

chrome.runtime.onMessage.addListener(function (Response, sender, sendResponse) {
    if (Response.API === "F1") {
        if (Response.Type === "SHOW") {
            if (Response.Action === "Drivers") {
                UpdateDriverF1(GetDataDriver(Response.Body))
            } else if (Response.Action === "Schedule") {
                
                chrome.runtime.sendMessage({ Type: "GET", API: "F1", Action: "NextRace", URL_API: GetNextRace(Response.Body) });
            } else if (Response.Action === "NextRace") {
                let NextRaceHorarios = getHorarios(Response.Body)
                console.log(NextRaceHorarios);
            } else if (Response.Action === "Teems") {
                chrome.runtime.sendMessage({ Type: "GET", API: "F1", Action: "Schedule", URL_API: `${Response.URL_API.split(".com/")[0]}.com${GetURLCalender(Response.Body)}` });
                UpdateTeamsF1(GetDataTeam(Response.Body))
            }
        }
    }
});


chrome.runtime.sendMessage({ Type: "GET", API: "F1", Action: "Teems", URL_API: "https://www.formula1.com/en/teams.html" });
chrome.runtime.sendMessage({ Type: "GET", API: "F1", Action: "Drivers", URL_API: "https://www.formula1.com/en/drivers.html" });


function UpdateTeamsF1(Datos) {
    TemasElments.innerHTML = ""
    for (const [key, Team] of Datos.entries()) {

        TemasElments.innerHTML += `<div class="row">
            <div class="color" style="background-color: ${Team.Color};"></div>
            <div class="position">${Team.Rank}</div>
            <div class="image"><img src="${Team.Car}"></div>
            <div class="name">${Team.Name}</div>
            <div class="points">${Team.Points}</div>
          </div>`
    }
}

function UpdateDriverF1(Datos) {
    DriversElments.innerHTML = ""
    for (const [key, Driver] of Datos.entries()) {
        DriversElments.innerHTML += `<div class="row">
        <div class="color" style="background-color: ${Driver.Color};"><img src="${Driver.Flag}"></div>
        <div class="position">${Driver.Rank}</div>
        <div class="image"><img src="${Driver.Photo}"></div>
        <div class="name">${Driver.Name}</div>
        <div class="points">${Driver.Points}</div>
      </div>`
    }
}

function GetNextRace(HtmlCode) {
    nextRace = JSON.parse(GetForClass(HtmlCode, "script", null).textContent)
    return nextRace["@id"]
}

function convertToLocalizedJSON(dateUTC) {
    // Convert the UTC date to a Date object
    var date = new Date(dateUTC);

    // Get local date components
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // Months are zero-indexed, so we add 1
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();

    // Return the local date in JSON format
    return {
        "year": year,
        "month": month,
        "day": day,
        "hour": hour,
        "minute": minute
    };
}

function getHorarios(HtmlCode) {
    NextRaceJSON = {}
    NextRaceData = JSON.parse(GetForClass(HtmlCode, "script", null).textContent)
    NextRaceData["subEvent"].forEach(Event => {
        NextRaceJSON[Event.name.split(" - ")[0]] = {
            "startDate": Event.startDate,
            "endDate": Event.startDate
        }
    });
    return NextRaceJSON
}

function GetDataTeam(HtmlCode) {
    let Datos = new Map();
    let content = GetForClass(HtmlCode, "div", "container listing team-listing")
    let row = GetForClass(content.innerHTML, "div", "row")
    let Teamcontents = row.childNodes
    for (let index = 1; index < Teamcontents.length; index += 2) {
        const Team = Teamcontents[index];
        rank = GetForClass(Team.innerHTML, "div", "rank").textContent
        points = GetForClass(GetForClass(Team.innerHTML, "div", "points").innerHTML, "div", null).textContent
        info = GetForClass(Team.innerHTML, "div", "listing-info")
        logo = GetForClass(info.innerHTML, "img", null).getAttribute('data-src');
        Name = GetForClass(info.innerHTML, "span", "f1-color--black").textContent
        color = info.style.color
        livery = GetForClass(Team.innerHTML, "div", "listing-image")
        CarP = GetForClass(livery.innerHTML, "picture", "team-car")
        Car = CarP.querySelector("img").getAttribute('data-src');
        Datos.set(rank, {
            "Rank": rank,
            "Name": Name,
            "Points": points,
            "Color": color,
            "Car": Car,
            "Logo": logo
        })
    }
    return Datos;
}

function GetDataDriver(HtmlCode) {
    let Datos = new Map()
    let content = GetForClass(HtmlCode, "div", "container listing-items--wrapper driver during-season")
    let row = GetForClass(content.innerHTML, "div", "row")
    let drivercontents = row.childNodes
    for (let index = 1; index < drivercontents.length; index += 2) {
        const DRIVER = drivercontents[index];
        rank = GetForClass(DRIVER.innerHTML, "div", "rank").textContent
        points = GetForClass(GetForClass(DRIVER.innerHTML, "div", "points").innerHTML, "div", null).textContent
        color = GetForClass(DRIVER.innerHTML, "a", null).style.color
        heder = GetForClass(DRIVER.innerHTML, "div", "listing-item--head")
        countryflag = GetForClass(heder.innerHTML, "img", null).getAttribute('data-src');
        Name = heder.querySelectorAll("span")
        Name = `${Name[0].textContent} ${Name[1].textContent}`
        Team = GetForClass(DRIVER.innerHTML, "p", "listing-item--team").textContent
        imgC = GetForClass(DRIVER.innerHTML, "div", "listing-item--image-wrapper")
        img = GetForClass(imgC.innerHTML, "img", null).getAttribute('data-src');
        Datos.set(rank, {
            "Rank": rank,
            "Name": Name,
            "Team": Team,
            "Points": points,
            "Color": color,
            "Flag": countryflag,
            "Photo": img
        })
    }
    return Datos
}


function GetURLCalender(HtmlCode) {
    let menu = GetForClass(HtmlCode, "div", "primary-links")
    let lis = GetAllForClass(menu.innerHTML, "li", "expandable")
    return lis[1].querySelector("a").getAttribute("href");
    
}

document.querySelector("button.Teams").addEventListener("click", () => {
    DriversTable.classList.remove("active")
    TemasTable.classList.add("active")
    DriversButton.classList.remove("active")
    TemasButton.classList.add("active")
})

document.querySelector("button.Drivers").addEventListener("click", () => {
    TemasTable.classList.remove("active")
    DriversTable.classList.add("active")
    DriversButton.classList.add("active")
    TemasButton.classList.remove("active")
})

document.querySelector("button.back").addEventListener("click", () => {
    F1Api.classList.toggle("desavilte")
})