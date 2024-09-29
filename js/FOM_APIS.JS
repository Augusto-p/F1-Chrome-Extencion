let FOM_APIS_CONTESNTS = document.getElementsByClassName("FOM_APIS_Content");
let FOM_APIS_BLACK = document.getElementsByClassName("FOM_APIS_BLACK")
let FOM_APIS_CONTESNTS_OPEN = false;


function Closed_FOM_APIS_CONTESNTS() {
    for (let index = 0; index < FOM_APIS_CONTESNTS.length; index++) {
        const element = FOM_APIS_CONTESNTS[index];
        element.classList.remove("ACTIVE")
    }
    for (let index = 0; index < FOM_APIS_BLACK.length; index++) {
        const element = FOM_APIS_BLACK[index];
        element.classList.remove("ACTIVE")
    }
    FOM_APIS_BLACK_Content.classList.remove("ACTIVE");
    FOM_APIS_CONTESNTS_OPEN = false;
}

F1_API_BLACK.addEventListener("click", () => {
    Open = false;
    function Abrir() {
        FOM_APIS_BLACK_Content.classList.add("ACTIVE")
        F1_API_Content.classList.add("ACTIVE")
        F1_API_BLACK.classList.add("ACTIVE")
        FOM_APIS_CONTESNTS_OPEN = true;
        FOM_APIS_BLACK_Content.removeEventListener("transitionend", Abrir)
    }
    if (!(F1_API_BLACK.classList.toString().includes("ACTIVE"))) {
        Open = true
    }
    if (!FOM_APIS_CONTESNTS_OPEN) {
        Abrir()
    } else {
        Closed_FOM_APIS_CONTESNTS();
    }
    if (Open) {
        FOM_APIS_BLACK_Content.addEventListener("transitionend", Abrir)
    }

})

F2_API_BLACK.addEventListener("click", () => {
    Open = false;
    function Abrir() {
        FOM_APIS_BLACK_Content.classList.add("ACTIVE")
        F2_API_Content.classList.add("ACTIVE")
        F2_API_BLACK.classList.add("ACTIVE")
        FOM_APIS_CONTESNTS_OPEN = true;
        FOM_APIS_BLACK_Content.removeEventListener("transitionend", Abrir)
    }
    if (!(F2_API_BLACK.classList.toString().includes("ACTIVE"))) {
        Open = true
    }
    if (!FOM_APIS_CONTESNTS_OPEN) {
        Abrir()
    } else {
        Closed_FOM_APIS_CONTESNTS();
    }
    if (Open) {
        FOM_APIS_BLACK_Content.addEventListener("transitionend", Abrir)
    }
})

F3_API_BLACK.addEventListener("click", () => {
    Open = false;
    function Abrir() {
        FOM_APIS_BLACK_Content.classList.add("ACTIVE")
        F3_API_Content.classList.add("ACTIVE")
        F3_API_BLACK.classList.add("ACTIVE")
        FOM_APIS_CONTESNTS_OPEN = true;
        FOM_APIS_BLACK_Content.removeEventListener("transitionend", Abrir)
    }
    if (!(F3_API_BLACK.classList.toString().includes("ACTIVE"))) {
        Open = true
    }
    if (!FOM_APIS_CONTESNTS_OPEN) {
        Abrir()
    } else {
        Closed_FOM_APIS_CONTESNTS();
    }
    if (Open) {
        FOM_APIS_BLACK_Content.addEventListener("transitionend", Abrir)
    }
})

F1A_API_BLACK.addEventListener("click", () => {
    Open = false;
    function Abrir() {
        FOM_APIS_BLACK_Content.classList.add("ACTIVE")
        F1A_API_Content.classList.add("ACTIVE")
        F1A_API_BLACK.classList.add("ACTIVE")
        FOM_APIS_CONTESNTS_OPEN = true;
        FOM_APIS_BLACK_Content.removeEventListener("transitionend", Abrir)
    }
    if (!(F1A_API_BLACK.classList.toString().includes("ACTIVE"))) {
        Open = true
    }
    if (!FOM_APIS_CONTESNTS_OPEN) {
        Abrir()
    } else {
        Closed_FOM_APIS_CONTESNTS();
    }
    if (Open) {
        FOM_APIS_BLACK_Content.addEventListener("transitionend", Abrir)
    }
})

// FE_API_BLACK.addEventListener("click", () => {
//     Open = false;
//     function Abrir() {
//         FOM_APIS_BLACK_Content.classList.add("ACTIVE")
//         FE_API_Content.classList.add("ACTIVE")
//         FE_API_BLACK.classList.add("ACTIVE")
//         FOM_APIS_CONTESNTS_OPEN = true;
//         FOM_APIS_BLACK_Content.removeEventListener("transitionend", Abrir)
//     }
//     if (!(FE_API_BLACK.classList.toString().includes("ACTIVE"))) {
//         Open = true
//     }
//     if (!FOM_APIS_CONTESNTS_OPEN) {
//         Abrir()
//     } else {
//         Closed_FOM_APIS_CONTESNTS();
//     }
//     if (Open) {
//         FOM_APIS_BLACK_Content.addEventListener("transitionend", Abrir)
//     }
// })


F1_API_Selector_Team.addEventListener("click", () => {
    F1_API_Selector_Team.classList.add("ACTIVE")
    F1_API_Selector_Driver.classList.remove("ACTIVE")
    F1_API_DATA.classList.add("ACTIVE")
})

F1_API_Selector_Driver.addEventListener("click", () => {
    F1_API_Selector_Team.classList.remove("ACTIVE")
    F1_API_Selector_Driver.classList.add("ACTIVE")
    F1_API_DATA.classList.remove("ACTIVE")
})

F2_API_Selector_Team.addEventListener("click", () => {
    F2_API_Selector_Team.classList.add("ACTIVE")
    F2_API_Selector_Driver.classList.remove("ACTIVE")
    F2_API_DATA.classList.add("ACTIVE")
})

F2_API_Selector_Driver.addEventListener("click", () => {
    F2_API_Selector_Team.classList.remove("ACTIVE")
    F2_API_Selector_Driver.classList.add("ACTIVE")
    F2_API_DATA.classList.remove("ACTIVE")
})

F3_API_Selector_Team.addEventListener("click", () => {
    F3_API_Selector_Team.classList.add("ACTIVE")
    F3_API_Selector_Driver.classList.remove("ACTIVE")
    F3_API_DATA.classList.add("ACTIVE")
})

F3_API_Selector_Driver.addEventListener("click", () => {
    F3_API_Selector_Team.classList.remove("ACTIVE")
    F3_API_Selector_Driver.classList.add("ACTIVE")
    F3_API_DATA.classList.remove("ACTIVE")
})

F1A_API_Selector_Team.addEventListener("click", () => {
    F1A_API_Selector_Team.classList.add("ACTIVE")
    F1A_API_Selector_Driver.classList.remove("ACTIVE")
    F1A_API_DATA.classList.add("ACTIVE")
})

F1A_API_Selector_Driver.addEventListener("click", () => {
    F1A_API_Selector_Team.classList.remove("ACTIVE")
    F1A_API_Selector_Driver.classList.add("ACTIVE")
    F1A_API_DATA.classList.remove("ACTIVE")
})

// FE_API_Selector_Team.addEventListener("click", () => {
//     FE_API_Selector_Team.classList.add("ACTIVE")
//     FE_API_Selector_Driver.classList.remove("ACTIVE")
//     FE_API_DATA.classList.add("ACTIVE")
// })

// FE_API_Selector_Driver.addEventListener("click", () => {
//     FE_API_Selector_Team.classList.remove("ACTIVE")
//     FE_API_Selector_Driver.classList.add("ACTIVE")
//     FE_API_DATA.classList.remove("ACTIVE")
// })

function GenerateColorByName(Name) {
    return `#${hashTo6Numbers(Name)}`
}


// Formula 1
function LoadF1Drivers(DRIVERS) {
    F1_API_DATA_DRIVER_TBODY.innerHTML = "";

    DRIVERS.forEach(DRIVER => {
        F1_API_DATA_DRIVER_TBODY.innerHTML += `<div class="FOM_APIS_ROW F1_API_ROW DRIVER">
        <div class="COLOR" style="background-color: ${DRIVER.COLOR};"><img src="${DRIVER.FLAG}"></div>
        <div class="POS">${DRIVER.POS}</div>
        <div class="PHOTO"><img src="${DRIVER.PHOTO}"></div>
        <div class="NAME">${DRIVER.NAME}</div>
        <div class="POINTS">${DRIVER.POINTS}</div>
      </div>`;
    });

}

function LoadF1Teams(TEAMS) {
    F1_API_DATA_TEAM_TBODY.innerHTML = "";
    TEAMS.forEach(TEAM => {
        F1_API_DATA_TEAM_TBODY.innerHTML += `<div class="FOM_APIS_ROW F1_API_ROW TEAM">
        <div class="COLOR" style="background-color: ${TEAM.COLOR};"></div>
        <div class="POS">${TEAM.POS}</div>
        <div class="PHOTO"><img src="${TEAM.PHOTO}"></div>
        <div class="NAME">${TEAM.NAME}</div>
        <div class="POINTS">${TEAM.POINTS}</div>
      </div>`
    });

}

function ScrapingF1Drivers(HTML) {
    let DRIVERS = []
    let content = GetForClass(HTML, "div", "f1-container container")
    let drivercontents = GetAllForClass(content.innerHTML, "a", null)
    drivercontents.forEach(DRIVER => {
        NameArray = GetAllByTag(GetForClass(DRIVER.innerHTML, "div", "f1-driver-name").innerHTML, "p")
        Name = NameArray[0].textContent + " " + NameArray[1].textContent
        imgs = GetAllForClass(DRIVER.innerHTML, "img", null)
        pes = GetAllForClass(GetForClass(GetForClass(GetForClass(DRIVER.innerHTML, "div", null).innerHTML, "div", null).innerHTML, "div", null).innerHTML, "p", null)
        color = "#" + GetForClass(DRIVER.innerHTML, "div", null).className.split("outline-")[1].split(" ")[0]

        DRIVERS.push({
            "POS": pes[0].textContent,
            "NAME": Name,
            "POINTS": pes[1].textContent,
            "COLOR": color,
            "FLAG": imgs[0].getAttribute("src"),
            "PHOTO": imgs[2].getAttribute("src")
        })
    });

    return DRIVERS
}

function ScrapingF1Teams(HTML) {
    let TEAMS = [];
    let row = GetForClass(HTML, "div", "f1-container")
    let Teamcontents = row.getElementsByTagName("a")

    for (let index = 0; index < Teamcontents.length; index++) {
        const Team = Teamcontents[index];
        let Name = GetByTag(Team.innerHTML, "span").textContent
        let all_P = Team.getElementsByTagName("p")
        let ColorDiv = Team.getElementsByTagName("div")[0]
        let color = "#" + ColorDiv.getAttribute("class").split(":outline-")[1].split(" ")[0]
        let all_Imge = Team.getElementsByTagName("img")
        let Car = all_Imge[all_Imge.length - 1].getAttribute('src');

        Data = {
            "POS": all_P[0].textContent,
            "NAME": Name,
            "POINTS": all_P[1].textContent,
            "COLOR": color,
            "PHOTO": Car,
        }
        TEAMS.push(Data)
    }
    return TEAMS;

}

function ScrapingF1Schedule(HTML) {
    let li = GetByID(HTML, "li", "Schedule")
    return li.querySelector("a").getAttribute("href");
}

function obtenerNextRace(eventos) {
    let siguienteEvento = null;
    let menorFecha = Infinity;

    const horaActual = new Date(); // Obtener la hora actual en la zona horaria local

    for (let eventoName in eventos) {
        const Evento = eventos[eventoName]
        Evento["Name"] = eventoName;
        const fechaFin = new Date(Evento.endDate);
        if (fechaFin.getTime() > horaActual.getTime() && fechaFin.getTime() < menorFecha) {
            menorFecha = fechaFin.getTime();
            siguienteEvento = Evento;
        }
    }

    if (new Date(siguienteEvento.startDate).getTime() <= horaActual.getTime()) {
        siguienteEvento["Started"] = true;
        siguienteEvento["Countdown"] = new Date(siguienteEvento.endDate).getTime() - horaActual.getTime();
    } else {
        siguienteEvento["Started"] = false;
        siguienteEvento["Countdown"] = new Date(siguienteEvento.startDate).getTime() - horaActual.getTime();
    }




    return siguienteEvento;
}

function ScrapingF1GP(Html) {
    NextRaceJSON = {}
    NextRaceData = JSON.parse(GetForClass(Html, "script", null).textContent)
    NextRaceData["subEvent"].forEach(Event => {
        NextRaceJSON[Event.name.split(" - ")[0]] = {
            "startDate": Event.startDate,
            "endDate": Event.startDate
        }
    });
    return NextRaceJSON
}

function LoadF1NextGP(GP) {
    NextGP = obtenerNextRace(GP)
    NextGPDate = new Date(NextGP.Countdown)
    F1_API_NEXT_RACE.querySelector(".SecionName").textContent = NextGP.Name;
    F1_API_NEXT_RACE.querySelector(".Countdown").textContent = `${NextGPDate.getDate()}:${NextGPDate.getHours()}:${NextGPDate.getMinutes()}`;
    if (NextGP.Started) {
        F1_API_NEXT_RACE.classList.add("Started");
    } else {
        F1_API_NEXT_RACE.classList.remove("Started");
    }
}

// Formula 2
let DRIVERSF2MAP = new Map();
let TEAMSF2MAP = new Map()

function ScrapingF2DriversPosANDPoints(HTML) {
    JSONDatos = JSON.parse(GetByID(HTML, "script", "__NEXT_DATA__").textContent)
    JSONDatos.props.pageProps.pageData.Standings.forEach(DRIVER => {
        DRIVERSF2MAP.get(DRIVER.CarNumber)["POS"] = DRIVER.Position;
        DRIVERSF2MAP.get(DRIVER.CarNumber)["POINTS"] = DRIVER.TotalPoints;
    });

}

function ScrapingF2TeamsPosANDPoints(HTML) {
    JSONDatos = JSON.parse(GetByID(HTML, "script", "__NEXT_DATA__").textContent)
    JSONDatos.props.pageProps.pageData.Standings.forEach(TEAM => {
        TEAMSF2MAP.get(TEAM.TeamID)["POS"] = TEAM.Position;
        TEAMSF2MAP.get(TEAM.TeamID)["POINTS"] = TEAM.TotalPoints;
    });


}

function ScrapingF2DriversANDTeams(HTML) {
    JSONDatos = JSON.parse(GetByID(HTML, "script", "__NEXT_DATA__").textContent)

    JSONDatos.props.pageProps.pageData.Teams.forEach(TEAM => {
        TEAMSF2MAP.set(TEAM.TeamId, {
            "TEAMID": TEAM.TeamId,
            "NAME": TEAM.TeamFullName,
            "COUNTRY": TEAM.CountryCode,
            "CAR": TEAM.carImage.url,
            "COLOR": GenerateColorByName(TEAM.TeamFullName)
        })

        // "PHOTO": DRIVER.driverImage.url,
        TEAM.Drivers.forEach(DRIVER => {
            DRIVERSF2MAP.set(DRIVER.CarNumber, {
                "NAME": DRIVER.FullName,
                "COUNTRY": DRIVER.CountryCode,
                "PHOTO": "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_65/v1/" + DRIVER.driverImage.path,
                "CAR": DRIVER.CarNumber,
                "COLOR": GenerateColorByName(TEAM.TeamFullName)
            })
        })
    });
}
function LoadF2Teams() {
    F2_API_DATA_TEAM_TBODY.innerHTML = "";
    const Valores = Array.from(TEAMSF2MAP.values());
    Valores.sort((a, b) => a.POS - b.POS)
    Valores.forEach(TEAM => {
        F2_API_DATA_TEAM_TBODY.innerHTML += `<div class="FOM_APIS_ROW F2_API_ROW TEAM">
        <div class="COLOR" style="background-color: ${TEAM.COLOR};"></div>
        <div class="POS">${TEAM.POS}</div>
        <div class="PHOTO"><img src="${TEAM.CAR}"></div>
        <div class="NAME">${TEAM.NAME}</div>
        <div class="POINTS">${TEAM.POINTS}</div>
      </div>`
    });
}
function LoadF2Drivers() {
    F2_API_DATA_DRIVER_TBODY.innerHTML = "";
    const Valores = Array.from(DRIVERSF2MAP.values());
    Valores.sort((a, b) => a.POS - b.POS)
    Valores.forEach(DRIVER => {
        F2_API_DATA_DRIVER_TBODY.innerHTML += `<div class="FOM_APIS_ROW F2_API_ROW DRIVER">
        <div class="COLOR" style="background-color: ${DRIVER.COLOR};"><img src="https://raw.githubusercontent.com/Augusto-p/F1-Chrome-Extencion/Country-Flags/${DRIVER.COUNTRY}.jpg"></div>
        <div class="POS">${DRIVER.POS}</div>
        <div class="PHOTO"><img src="${DRIVER.PHOTO}"></img></div>
        <div class="NAME">${DRIVER.NAME}</div>
        <div class="POINTS">${DRIVER.POINTS}</div>
      </div>`;
    });

}

function ScrapingF2Schedule(HTML) {
    NextRace = null;
    NextRaceJSON = {};
    JSONDatos = JSON.parse(GetByID(HTML, "script", "__NEXT_DATA__").textContent.replace(/[\u0000-\u001F\u0080-\u009F]/g, ''))
    indx = 0;
    while (NextRace == null && indx < JSONDatos.props.pageProps.pageData.Races.length) {
        if (new Date(JSONDatos.props.pageProps.pageData.Races[indx].RaceStartDate) > new Date()) {
            NextRace = JSONDatos.props.pageProps.pageData.Races[indx].Sessions;
        }
        indx++;
    }
    NextRace.forEach(sesion => {
        NextRaceJSON[sesion.SessionName] = {
            "startDate": sesion.SessionStartTime,
            "endDate": sesion.SessionEndTime
        }
    });
    return NextRaceJSON;
}

function LoadF2NextGP(GP) {
    console.log(GP);
    
    NextGP = obtenerNextRace(GP)
    NextGPDate = new Date(NextGP.Countdown)
    F2_API_NEXT_RACE.querySelector(".SecionName").textContent = NextGP.Name;
    F2_API_NEXT_RACE.querySelector(".Countdown").textContent = `${NextGPDate.getDate()}:${NextGPDate.getHours()}:${NextGPDate.getMinutes()}`;
    if (NextGP.Started) {
        F2_API_NEXT_RACE.classList.add("Started");
    } else {
        F2_API_NEXT_RACE.classList.remove("Started");
    }
}

// Formula 3
let DRIVERSF3MAP = new Map();
let TEAMSF3MAP = new Map()

function ScrapingF3DriversPosANDPoints(HTML) {
    JSONDatos = JSON.parse(GetByID(HTML, "script", "__NEXT_DATA__").textContent)
    JSONDatos.props.pageProps.pageData.Standings.forEach(DRIVER => {
        DRIVERSF3MAP.get(DRIVER.CarNumber)["POS"] = DRIVER.Position;
        DRIVERSF3MAP.get(DRIVER.CarNumber)["POINTS"] = DRIVER.TotalPoints;
    });

}

function ScrapingF3TeamsPosANDPoints(HTML) {
    JSONDatos = JSON.parse(GetByID(HTML, "script", "__NEXT_DATA__").textContent)
    JSONDatos.props.pageProps.pageData.Standings.forEach(TEAM => {
        TEAMSF3MAP.get(TEAM.TeamID)["POS"] = TEAM.Position;
        TEAMSF3MAP.get(TEAM.TeamID)["POINTS"] = TEAM.TotalPoints;
    });


}

function ScrapingF3DriversANDTeams(HTML) {
    JSONDatos = JSON.parse(GetByID(HTML, "script", "__NEXT_DATA__").textContent)
    JSONDatos.props.pageProps.pageData.Teams.forEach(TEAM => {
        TEAMSF3MAP.set(TEAM.TeamId, {
            "TEAMID": TEAM.TeamId,
            "NAME": TEAM.TeamFullName,
            "COUNTRY": TEAM.CountryCode,
            "CAR": TEAM.carImage.url,
            "COLOR": GenerateColorByName(TEAM.TeamFullName)
        })
        // "PHOTO": DRIVER.driverImage.url,
        TEAM.Drivers.forEach(DRIVER => {
            DRIVERSF3MAP.set(DRIVER.CarNumber, {
                "NAME": DRIVER.FullName,
                "COUNTRY": DRIVER.CountryCode,
                "PHOTO": "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_65/v1/" + DRIVER.driverImage.path,
                "CAR": DRIVER.CarNumber,
                "COLOR": GenerateColorByName(TEAM.TeamFullName)
            })
        })
    });
}
function LoadF3Teams() {
    F3_API_DATA_TEAM_TBODY.innerHTML = "";
    const Valores = Array.from(TEAMSF3MAP.values());
    Valores.sort((a, b) => a.POS - b.POS)
    Valores.forEach(TEAM => {
        F3_API_DATA_TEAM_TBODY.innerHTML += `<div class="FOM_APIS_ROW F2_API_ROW TEAM">
        <div class="COLOR" style="background-color: ${TEAM.COLOR};"></div>
        <div class="POS">${TEAM.POS}</div>
        <div class="PHOTO"><img src="${TEAM.CAR}"></div>
        <div class="NAME">${TEAM.NAME}</div>
        <div class="POINTS">${TEAM.POINTS}</div>
      </div>`
    });
}
function LoadF3Drivers() {
    F3_API_DATA_DRIVER_TBODY.innerHTML = "";
    const Valores = Array.from(DRIVERSF3MAP.values());
    Valores.sort((a, b) => a.POS - b.POS)
    Valores.forEach(DRIVER => {
        F3_API_DATA_DRIVER_TBODY.innerHTML += `<div class="FOM_APIS_ROW F2_API_ROW DRIVER">
        <div class="COLOR" style="background-color: ${DRIVER.COLOR};"><img src="https://raw.githubusercontent.com/Augusto-p/F1-Chrome-Extencion/Country-Flags/${DRIVER.COUNTRY}.jpg"></div>
        <div class="POS">${DRIVER.POS}</div>
        <div class="PHOTO"><img src="${DRIVER.PHOTO}"></img></div>
        <div class="NAME">${DRIVER.NAME}</div>
        <div class="POINTS">${DRIVER.POINTS}</div>
      </div>`;
    });

}

function ScrapingF3Schedule(HTML) {
    NextRace = null;
    NextRaceJSON = {};
    JSONDatos = JSON.parse(GetByID(HTML, "script", "__NEXT_DATA__").textContent.replace(/[\u0000-\u001F\u0080-\u009F]/g, ''))
    indx = 0;
    while (NextRace == null && indx < JSONDatos.props.pageProps.pageData.Races.length) {
        if (new Date(JSONDatos.props.pageProps.pageData.Races[indx].RaceStartDate) > new Date()) {
            NextRace = JSONDatos.props.pageProps.pageData.Races[indx].Sessions;
        }
        indx++;
    }
    NextRace.forEach(sesion => {
        NextRaceJSON[sesion.SessionName] = {
            "startDate": sesion.SessionStartTime,
            "endDate": sesion.SessionEndTime
        }
    });
    return NextRaceJSON;
}

function LoadF3NextGP(GP) {
    NextGP = obtenerNextRace(GP)
    NextGPDate = new Date(NextGP.Countdown)
    F3_API_NEXT_RACE.querySelector(".SecionName").textContent = NextGP.Name;
    F3_API_NEXT_RACE.querySelector(".Countdown").textContent = `${NextGPDate.getDate()}:${NextGPDate.getHours()}:${NextGPDate.getMinutes()}`;
    if (NextGP.Started) {
        F3_API_NEXT_RACE.classList.add("Started");
    } else {
        F3_API_NEXT_RACE.classList.remove("Started");
    }
}


// Formula 1 Academy
let DRIVERSF1AMAP = new Map();
let TEAMSF1AMAP = new Map()

function ScrapingF1ADriversPosANDPoints(HTML) {
    JSONDatos = JSON.parse(GetByID(HTML, "script", "__NEXT_DATA__").textContent)
    JSONDatos.props.pageProps.pageData.Standings.forEach(DRIVER => {
        const driverInfo = DRIVERSF1AMAP.get(DRIVER.CarNumber);

        if (driverInfo) {
            driverInfo.POS = DRIVER.Position;
            driverInfo.POINTS = DRIVER.TotalPoints;
        }

    });

}

function ScrapingF1ATeamsPosANDPoints(HTML) {
    JSONDatos = JSON.parse(GetByID(HTML, "script", "__NEXT_DATA__").textContent)
    JSONDatos.props.pageProps.pageData.Standings.forEach(TEAM => {
        TEAMSF1AMAP.get(TEAM.TeamID)["POS"] = TEAM.Position;
        TEAMSF1AMAP.get(TEAM.TeamID)["POINTS"] = TEAM.TotalPoints;
    });


}

function ScrapingF1ADriversANDTeams(HTML) {
    JSONDatos = JSON.parse(GetByID(HTML, "script", "__NEXT_DATA__").innerHTML)
    JSONDatos.props.pageProps.pageData.Teams.forEach(TEAM => {
        TEAMSF1AMAP.set(TEAM.TeamId, {
            "TEAMID": TEAM.TeamId,
            "NAME": TEAM.TeamFullName,
            "COUNTRY": TEAM.CountryCode,
            "CAR": TEAM.carImage.url,
            "COLOR": GenerateColorByName(TEAM.TeamFullName)
        })
        // "PHOTO": DRIVER.driverImage.url,
        TEAM.Drivers.forEach(DRIVER => {
            DRIVERSF1AMAP.set(DRIVER.CarNumber, {
                "NAME": DRIVER.FullName,
                "COUNTRY": DRIVER.CountryCode,
                "PHOTO": "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_65/v1/" + DRIVER.driverImage.path,
                "CAR": DRIVER.CarNumber,
                "COLOR": GenerateColorByName(TEAM.TeamFullName),

            })
        })
    });
}
function LoadF1ATeams() {
    F1A_API_DATA_TEAM_TBODY.innerHTML = "";
    const Valores = Array.from(TEAMSF1AMAP.values());
    Valores.sort((a, b) => a.POS - b.POS)
    Valores.forEach(TEAM => {
        F1A_API_DATA_TEAM_TBODY.innerHTML += `<div class="FOM_APIS_ROW F2_API_ROW TEAM">
        <div class="COLOR" style="background-color: ${TEAM.COLOR};"></div>
        <div class="POS">${TEAM.POS}</div>
        <div class="PHOTO"><img src="${TEAM.CAR}"></div>
        <div class="NAME">${TEAM.NAME}</div>
        <div class="POINTS">${TEAM.POINTS}</div>
      </div>`
    });
}
function LoadF1ADrivers() {
    F1A_API_DATA_DRIVER_TBODY.innerHTML = "";
    const Valores = Array.from(DRIVERSF1AMAP.values());
    Valores.sort((a, b) => a.POS - b.POS)
    Valores.forEach(DRIVER => {
        F1A_API_DATA_DRIVER_TBODY.innerHTML += `<div class="FOM_APIS_ROW F2_API_ROW DRIVER">
        <div class="COLOR" style="background-color: ${DRIVER.COLOR};"><img src="https://raw.githubusercontent.com/Augusto-p/F1-Chrome-Extencion/Country-Flags/${DRIVER.COUNTRY}.jpg"></div>
        <div class="POS">${DRIVER.POS}</div>
        <div class="PHOTO"><img src="${DRIVER.PHOTO}"></img></div>
        <div class="NAME">${DRIVER.NAME}</div>
        <div class="POINTS">${DRIVER.POINTS}</div>
      </div>`;
    });

}

function ScrapingF1ASchedule(HTML) {
    NextRace = null;
    NextRaceJSON = {};
    JSONDatos = JSON.parse(GetByID(HTML, "script", "__NEXT_DATA__").textContent.replace(/[\u0000-\u001F\u0080-\u009F]/g, ''))
    indx = 0;
    while (NextRace == null && indx < JSONDatos.props.pageProps.pageData.Races.length) {
        if (new Date(JSONDatos.props.pageProps.pageData.Races[indx].RaceStartDate) > new Date()) {
            NextRace = JSONDatos.props.pageProps.pageData.Races[indx].Sessions;
        }
        indx++;
    }
    NextRace.forEach(sesion => {
        NextRaceJSON[sesion.SessionName] = {
            "startDate": sesion.SessionStartTime,
            "endDate": sesion.SessionEndTime
        }
    });
    return NextRaceJSON;
}

function LoadF1ANextGP(GP) {
    NextGP = obtenerNextRace(GP)
    NextGPDate = new Date(NextGP.Countdown)
    F1A_API_NEXT_RACE.querySelector(".SecionName").textContent = NextGP.Name;
    F1A_API_NEXT_RACE.querySelector(".Countdown").textContent = `${NextGPDate.getDate()}:${NextGPDate.getHours()}:${NextGPDate.getMinutes()}`;
    if (NextGP.Started) {
        F1A_API_NEXT_RACE.classList.add("Started");
    } else {
        F1A_API_NEXT_RACE.classList.remove("Started");
    }
}

//Presets
chrome.runtime.onMessage.addListener(function (Response, sender, sendResponse) {
    if (Response.Type === "SHOW") {
        if (Response.API === "F1") {
            if (Response.Action === "Drivers") {
                LoadF1Drivers(ScrapingF1Drivers(Response.Body))
            } else if (Response.Action === "Schedule") {
                // console.log(Response.Body);

                // nextRace = JSON.parse(GetForClass(Response.Body, "script", null).textContent)
                // chrome.runtime.sendMessage({ Type: "GET", API: "F1", Action: "NextRace", URL_API: nextRace["@id"] });
            } else if (Response.Action === "NextRace") {
                let NextGP = ScrapingF1GP(Response.Body);
                LoadF1NextGP(NextGP)
            } else if (Response.Action === "Teems") {
                chrome.runtime.sendMessage({ Type: "GET", API: "F1", Action: "Schedule", URL_API: `${ScrapingF1Schedule(Response.Body)}` });
                LoadF1Teams(ScrapingF1Teams(Response.Body));

            }
        } else if (Response.API === "F2") {
            if (Response.Action === "DriversANDTeams") {
                ScrapingF2DriversANDTeams(Response.Body);
                chrome.runtime.sendMessage({ Type: "GET", API: "F2", Action: "Drivers", URL_API: "https://www.fiaformula2.com/Standings/Driver" });
                chrome.runtime.sendMessage({ Type: "GET", API: "F2", Action: "Teams", URL_API: "https://www.fiaformula2.com/Standings/Team" });
            } else if (Response.Action === "Drivers") {
                ScrapingF2DriversPosANDPoints(Response.Body);
                LoadF2Drivers();
            } else if (Response.Action === "Teams") {
                ScrapingF2TeamsPosANDPoints(Response.Body);
                LoadF2Teams();
            } else if (Response.Action === "NextRace") {

                // LoadF2NextGP(ScrapingF2Schedule(Response.Body));
            }

        } else if (Response.API === "F3") {
            if (Response.Action === "DriversANDTeams") {
                ScrapingF3DriversANDTeams(Response.Body);
                chrome.runtime.sendMessage({ Type: "GET", API: "F3", Action: "Drivers", URL_API: "https://www.fiaformula3.com/Standings/Driver" });
                chrome.runtime.sendMessage({ Type: "GET", API: "F3", Action: "Teams", URL_API: "https://www.fiaformula3.com/Standings/Team" });
            } else if (Response.Action === "Drivers") {
                ScrapingF3DriversPosANDPoints(Response.Body);
                LoadF3Drivers();
            } else if (Response.Action === "Teams") {
                ScrapingF3TeamsPosANDPoints(Response.Body);
                LoadF3Teams();
            } else if (Response.Action === "NextRace") {
                // LoadF3NextGP(ScrapingF3Schedule(Response.Body));
            }

        } else if (Response.API === "F1A") {
            if (Response.Action === "DriversANDTeams") {
                ScrapingF1ADriversANDTeams(Response.Body);
                chrome.runtime.sendMessage({ Type: "GET", API: "F1A", Action: "Drivers", URL_API: "https://www.f1academy.com/Racing-Series/Standings/Driver" });
                chrome.runtime.sendMessage({ Type: "GET", API: "F1A", Action: "Teams", URL_API: "https://www.f1academy.com/Racing-Series/Standings/Team" });
            } else if (Response.Action === "Drivers") {
                ScrapingF1ADriversPosANDPoints(Response.Body);
                LoadF1ADrivers();
            } else if (Response.Action === "Teams") {
                ScrapingF1ATeamsPosANDPoints(Response.Body);
                LoadF1ATeams();
            } else if (Response.Action === "NextRace") {
                // LoadF1ANextGP(ScrapingF1ASchedule(Response.Body));
            }

        }
    }
});


chrome.runtime.sendMessage({ Type: "GET", API: "F1", Action: "Teems", URL_API: "https://www.formula1.com/en/teams.html" });
chrome.runtime.sendMessage({ Type: "GET", API: "F1", Action: "Drivers", URL_API: "https://www.formula1.com/en/drivers.html" });
chrome.runtime.sendMessage({ Type: "GET", API: "F2", Action: "DriversANDTeams", URL_API: "https://www.fiaformula2.com/Teams-and-Drivers" });
chrome.runtime.sendMessage({ Type: "GET", API: "F2", Action: "NextRace", URL_API: "https://www.fiaformula2.com/Calendar" });
chrome.runtime.sendMessage({ Type: "GET", API: "F3", Action: "DriversANDTeams", URL_API: "https://www.fiaformula3.com/Teams-and-Drivers" });
chrome.runtime.sendMessage({ Type: "GET", API: "F3", Action: "NextRace", URL_API: "https://www.fiaformula3.com/Calendar" });
chrome.runtime.sendMessage({ Type: "GET", API: "F1A", Action: "DriversANDTeams", URL_API: "https://www.f1academy.com/Racing-Series/Teams" });
chrome.runtime.sendMessage({ Type: "GET", API: "F1A", Action: "NextRace", URL_API: "https://www.f1academy.com/Racing-Series/Calendar" });
//Tools
function hashTo6Numbers(inputString) {
    // Calcula el hash SHA-256
    const hashed = sha256(inputString);
    // Toma los primeros 6 dígitos del hash y los convierte en números
    const hashedNumbers = hashed.match(/\d{2}/g).map(hex => parseInt(hex, 16));
    return hashed.slice(0, 6);
}

function sha256(ascii) {
    function rightRotate(value, amount) {
        return (value >>> amount) | (value << (32 - amount));
    }

    var mathPow = Math.pow;
    var maxWord = mathPow(2, 32);
    var lengthProperty = "length";
    var i, j; // Used as a counter across the whole file
    var result = "";

    var words = [];
    var asciiBitLength = ascii[lengthProperty] * 8;

    // Append '1' at the end of the string
    ascii += "\x80"; // U+0080

    // The input bytes are considered as bits strings, where the first bit is the most significant bit of the byte
    // Pre-processing: padding with zeros
    while (ascii[lengthProperty] % 64 !== 56) {
        ascii += "\x00"; // U+0000
    }

    // Append length of message (before pre-processing), in bits, as 64-bit big-endian integer
    ascii += String.fromCharCode((asciiBitLength / maxWord) >>> 0 & 0xFFFFFFFF);
    ascii += String.fromCharCode(asciiBitLength >>> 0 & 0xFFFFFFFF);

    ascii = new Uint8Array(ascii.split("").map(function (c) {
        return c.charCodeAt(0);
    }));

    function* chunkify(input, length) {
        var i;
        var j;
        var chunk = [];
        for (i = 0; i < input[lengthProperty]; i += length) {
            var chunkLength = input[lengthProperty] - i < length ? input[lengthProperty] - i : length;
            chunk = new Array(chunkLength);
            for (j = 0; j < chunkLength; j++) {
                chunk[j] = input[i + j];
            }
            yield chunk;
        }
    }

    for (i = 0; i < ascii[lengthProperty]; i += 64) {
        var words = chunkify(ascii.subarray(i, i + 64), 4);

        var w = new Array(64);
        var a;
        var b;
        var c;
        var d;
        var e;
        var f;
        var g;
        var h;
        for (j = 0; j < 64; j++) {
            if (j < 16) {
                w[j] = ascii[i + j];
            } else {
                var gamma0x = w[j - 15];
                var gamma0 = ((gamma0x << 25) | (gamma0x >>> 7)) ^ ((gamma0x << 14) | (gamma0x >>> 18)) ^ (gamma0x >>> 3);
                var gamma1x = w[j - 2];
                var gamma1 = ((gamma1x << 15) | (gamma1x >>> 17)) ^ ((gamma1x << 13) | (gamma1x >>> 19)) ^ (gamma1x >>> 10);

                w[j] = gamma0 + (w[j - 7] >>> 0) + gamma1 + (w[j - 16] >>> 0);
            }

            var ch = (e & f) ^ (~e & g);
            var maj = (a & b) ^ (a & c) ^ (b & c);
            var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
            var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25));

            h = (h + ((w[j] >>> 0) + ((sigma1 + ch) >>> 0)) >>> 0) >>> 0;
            g = f;
            f = e;
            e = (d + h) >>> 0;
            d = c;
            c = b;
            b = a;
            a = (h + ((sigma0 + maj) >>> 0)) >>> 0;
        }

        var H = new Array(a, b, c, d, e, f, g, h);

        for (var z = 0; z < H[lengthProperty]; z++) {
            var Hn = H[z];
            result += ("00000000" + (Hn >>> 0).toString(16)).slice(-8);
        }
    }
    return result;
}

// preset
// F2_API_BLACK.click()
