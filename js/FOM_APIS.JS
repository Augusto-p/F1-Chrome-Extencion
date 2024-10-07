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

FE_API_Selector_Team.addEventListener("click", () => {
    FE_API_Selector_Team.classList.add("ACTIVE")
    FE_API_Selector_Driver.classList.remove("ACTIVE")
    FE_API_DATA.classList.add("ACTIVE")
})

FE_API_Selector_Driver.addEventListener("click", () => {
    FE_API_Selector_Team.classList.remove("ACTIVE")
    FE_API_Selector_Driver.classList.add("ACTIVE")
    FE_API_DATA.classList.remove("ACTIVE")
})


MotoGP_API_Selector_Team.addEventListener("click", () => {
    MotoGP_API_Selector_Team.classList.add("ACTIVE")
    MotoGP_API_Selector_Driver.classList.remove("ACTIVE")
    MotoGP_API_DATA.classList.add("ACTIVE")
})

MotoGP_API_Selector_Driver.addEventListener("click", () => {
    MotoGP_API_Selector_Team.classList.remove("ACTIVE")
    MotoGP_API_Selector_Driver.classList.add("ACTIVE")
    MotoGP_API_DATA.classList.remove("ACTIVE")
})
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

function LoadF1Service() {
    let button = document.createElement("button");
    button.classList.add("FOM_APIS_BLACK");
    button.classList.add("F1_API_BLACK");
    button.id = "F1_API_BLACK";
    button.innerHTML = `<svg class="Open_Button" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 50">
                <path
                    d="m39 27.8l-16 15.6h-20.5l25.5-25.3c9.4-9.3 14-10.9 30.1-10.9h63.7l-13.8 13.6h-48c-12.1 0-14.7 0.9-21 7zm67-4.9h-0.1 0.1zm-0.1 0l-12.6 12.7h-32.8c-6 0-7.4 0.3-10.3 3.3l-4.5 4.5h-19l14-14.1c5.5-5.5 7.4-6.4 19.5-6.4zm-17.4 20.5l36.1-36.2h22.6l-36.3 36.2c0 0-22.4 0-22.4 0z" />
            </svg>

            <svg class="Close_Button" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                    d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z">
                </path>
                <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z">
                </path>
            </svg>`;
    button.addEventListener("click", () => {
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
    FOM_APIS_BLACK_Content.appendChild(button)

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

function LoadF2Service() {
    let button = document.createElement("button");
    button.classList.add("FOM_APIS_BLACK");
    button.classList.add("F2_API_BLACK");
    button.id = "F2_API_BLACK";
    button.innerHTML = `<svg class="Open_Button" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 449">

                <path
                    d="m974.1 61c9.8 0.3 17.7 3.4 21.3 8.1 6.7 8.5 5.2 17.5 0.5 25.8-2.8 5.1-72.6 120.9-73.1 121.7-11.7 17.7-32.9 41.5-83 45.9-4.1 0.6-8.5 0.6-12.9 0.6h-222.6l-23.7 37.9h290l-23.9 39.4c-0.2 0.4-29 47.6-96.6 47.6h-343.6l4.1-6.3c35-55.2 93.9-148 94.9-149.3 5.5-7.9 11.8-15.1 19-21.5 7.2-6.3 15.1-11.8 23.5-16.3 8.5-4.4 17.5-7.8 26.8-10.2 9.3-2.3 18.8-3.4 28.4-3.5h222l23.1-37.3h-286c0 0 26.7-42.2 28.6-44.9 6.4-9 30.6-37.7 81.6-37.7zm-379.8 40.1c-1.2 1.7-14.1 21.9-24.4 38.3h4.9c0 0 22-34.7 22.8-35.9 6.3-8.8 27.9-34.2 74.9-34.2h317.2q-1.8-1.1-3.7-1.8-1.9-0.8-3.8-1.3-2-0.6-4-0.8-2-0.3-4.1-0.3h-301.5c-49 0-72.3 27.6-78.3 36zm-18.8 87.3c-8.9 2.3-17.6 5.6-25.8 9.9-8.2 4.4-15.8 9.7-22.7 15.8-6.9 6.2-13 13.2-18.3 20.8-1.2 2.1-36.7 57.8-94.6 149h4.7l2.8-4.1c65.1-102.5 89.5-140.9 90.7-142.5 5-7.4 10.9-14.1 17.6-20.1 6.7-5.9 14-11 21.9-15.2 7.9-4.2 16.3-7.4 24.9-9.5 8.7-2.2 17.6-3.3 26.5-3.3h217l2.3-4.2h-219.5c-9.3 0.1-18.5 1.2-27.5 3.4zm-0.1 121.1h285.4l2.5-4.1h-285.4z" />
                <path
                    d="m565 63l-51.6 80.4-228.4-0.3-21.1 32h232.5l-38.8 54.6c0 0-25.7 29.6-60.8 29.6h-183.7l-36.2 55.1q-4.5 7.3-9.9 14-5.4 6.7-11.5 12.7-6.2 6-13.1 11.1-6.9 5.2-14.4 9.4c-25.6 13.7-61.8 24.1-117.3 24.1l57.6-92.7 91.5-152.5c0 0 42.2-77.5 131-77.5zm-402.6 81.3c0 0-18.9 31-18.4 31h5.5l18.2-29.9c42.7-71.4 113.3-73.9 118.6-73.7h268l2.6-4.2h-273.8c-81.9 4.8-120.7 76.8-120.7 76.8zm-143.6 237.2h5.9l120.4-198.3h340.7l2.7-3.7-346.8-0.1z" />
            </svg>

            <svg class="Close_Button" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                    d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z">
                </path>
                <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z">
                </path>
            </svg>`;
    button.addEventListener("click", () => {
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
    FOM_APIS_BLACK_Content.appendChild(button)

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

function LoadF3Service() {
    let button = document.createElement("button");
    button.classList.add("FOM_APIS_BLACK");
    button.classList.add("F3_API_BLACK");
    button.id = "F3_API_BLACK";
    button.innerHTML = `<svg class="Open_Button" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 3000 3000"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <g>
                    <path
                        d="M2988 1028c-2,-3 -15,-22 -62,-24l-904 0c0,0 -166,-2 -249,122l-77 123 855 0 -72 115 -855 0 -161 246 867 0 -68 112 -871 0 -163 258 1030 0c206,-2 293,-154 293,-154 0,0 142,-228 143,-231 22,-38 39,-62 31,-90 -5,-21 -35,-35 -35,-35 26,-4 89,-12 121,-67 18,-27 98,-163 163,-268 0,1 48,-65 14,-107zm-739 718l-842 0 -141 221 -14 0 148 -232 856 0 -7 11zm219 -360l-829 0 -138 212 -15 0 145 -222 843 0 -6 10zm-418 -363c-174,0 -237,90 -247,103 -10,12 -70,110 -70,110l-15 0 71 -112c92,-122 261,-109 261,-109l864 0c17,0 33,3 49,9l-913 -1zm-494 227l160 -248 -849 0c-275,0 -406,239 -406,239l-283 472 -178 285c171,0 284,-31 363,-74 62,-35 114,-85 152,-146l112 -169 569 0c108,0 188,-92 188,-92l120 -168 -720 0 66 -99 706 0zm-72 112l-10 11 -1057 0 -374 612 -18 0 380 -624 1079 1zm-998 -106l-56 93 -17 0c-2,0 56,-96 56,-96 0,0 121,-223 375,-237l847 0 -8 13 -838 -1c-149,14 -283,99 -359,228z" />
                </g>
            </svg>


            <svg class="Close_Button" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                    d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z">
                </path>
                <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z">
                </path>
            </svg>`;
    button.addEventListener("click", () => {
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
    FOM_APIS_BLACK_Content.appendChild(button)
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

function LoadF1AService() {

    let button = document.createElement("button");
    button.classList.add("FOM_APIS_BLACK");
    button.classList.add("F1A_API_BLACK");
    button.id = "F1A_API_BLACK";
    button.innerHTML = `<svg version="1.1" class="Open_Button" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" viewBox="0 0 1200 630"
                enable-background="new 0 0 1200 630" xml:space="preserve">

                <path opacity="1.000000" stroke="none" d="
        M957.000000,436.996216 
            C957.000000,411.192383 957.000000,385.888062 957.000000,359.215149 
            C951.198242,365.903748 946.048584,371.668060 941.092590,377.594391 
            C933.565674,386.595215 926.246826,395.770386 918.696960,404.751587 
            C913.814026,410.560333 908.764587,416.236115 903.629456,421.824097 
            C898.037415,427.909332 886.486450,427.481628 880.878174,421.243561 
            C871.338928,410.633270 862.245728,399.621582 852.982910,388.763336 
            C848.843323,383.910797 844.789612,378.984497 840.620972,374.157318 
            C834.330261,366.872894 827.973083,359.645935 821.000000,351.656586 
            C821.000000,353.731079 821.000000,355.103333 821.000000,356.475555 
            C821.000000,384.805664 821.003967,413.135803 820.997253,441.465912 
            C820.995544,448.499725 817.512817,451.995667 810.500671,451.996979 
            C775.671326,452.003510 740.840698,452.172729 706.013062,451.929565 
            C687.690308,451.801666 671.638245,446.298828 660.720642,429.343567 
            C656.194336,437.385559 649.938904,443.398956 641.819946,446.410706 
            C634.509521,449.122620 626.621033,451.599548 618.939026,451.753235 
            C588.787842,452.356293 558.617188,452.081360 528.454346,451.968628 
            C511.143219,451.903961 498.419922,443.620026 490.379852,428.670227 
            C480.977875,411.188171 472.248108,393.344147 463.261353,375.639557 
            C459.581848,368.390594 456.097931,361.040741 452.330505,353.838593 
            C449.188354,347.831848 443.826141,344.890503 437.243744,345.099304 
            C429.368439,345.349152 424.442322,350.419220 421.054047,356.995270 
            C415.769440,367.251892 410.702179,377.620483 405.546844,387.943665 
            C399.025482,401.002289 392.642426,414.132141 385.955231,427.105225 
            C377.551208,443.409058 364.158539,451.957855 345.662506,451.986908 
            C314.999420,452.035065 284.335571,452.117310 253.673218,451.957458 
            C234.268448,451.856323 219.737030,442.868866 210.597641,425.968903 
            C201.132034,408.465790 192.371216,390.580017 183.392380,372.815979 
            C180.582092,367.255981 178.311172,361.414490 175.349274,355.942200 
            C171.789078,349.364532 166.426392,344.800140 158.514496,345.079071 
            C150.271759,345.369690 145.474747,350.879364 142.070557,357.656677 
            C127.040794,387.579010 111.992920,417.493958 97.302567,447.582947 
            C95.477539,451.320984 93.560814,452.238800 89.873940,452.066376 
            C84.397057,451.810211 78.899323,452.000000 72.508125,452.000000 
            C73.965240,448.679474 75.061447,445.797729 76.456230,443.068604 
            C82.851227,430.555542 89.438194,418.139526 95.740639,405.580505 
            C100.025978,397.041016 103.831932,388.261688 108.080421,379.702850 
            C111.705070,372.400818 115.683853,365.275269 119.449120,358.042023 
            C121.367119,354.357483 122.980995,350.505341 125.041985,346.906250 
            C132.138199,334.514130 142.047821,326.584229 157.157867,326.976013 
            C164.287796,327.160858 171.329559,326.658447 177.886383,330.872559 
            C184.835007,335.338562 190.241318,341.026031 193.962982,348.211639 
            C201.143616,362.075562 208.006622,376.103912 215.014999,390.057251 
            C215.493256,391.009460 216.085281,391.904480 216.624405,392.826111 
            C217.082947,392.785583 217.541473,392.745087 218.000000,392.704559 
            C218.000000,389.511627 217.748856,386.295197 218.044586,383.129883 
            C219.172958,371.052490 220.779007,359.235870 227.658493,348.565857 
            C234.708511,337.631348 245.141312,332.446594 257.033356,330.210205 
            C266.161743,328.493530 275.641449,328.169434 284.972107,328.091888 
            C314.780914,327.844208 344.593018,328.000000 374.701721,328.000000 
            C374.701721,334.592743 374.701721,341.000122 374.701721,348.000000 
            C373.042755,348.000000 371.279755,348.000000 369.516785,348.000000 
            C340.853363,348.000000 312.189056,347.877289 283.527222,348.089752 
            C276.703552,348.140350 269.810089,348.869141 263.084656,350.056244 
            C247.312393,352.840210 242.119614,362.485870 240.183777,375.583801 
            C238.443405,387.359253 238.736511,399.178650 241.766785,411.044037 
            C244.724655,422.625946 255.124374,430.616608 266.298126,430.903992 
            C291.202087,431.544586 316.121887,432.026276 341.030212,431.852142 
            C353.983124,431.761597 364.011627,425.312592 369.986664,413.631165 
            C381.130310,391.844879 391.945740,369.890961 403.016937,348.067230 
            C410.068512,334.167053 420.938385,327.089325 437.123230,326.751343 
            C453.973328,326.399414 465.107758,334.060577 472.426178,348.061523 
            C482.946686,368.188293 492.834625,388.645416 503.034454,408.940460 
            C504.668671,412.192169 506.521057,415.334259 508.679443,419.268585 
            C508.679443,388.592499 508.679443,358.642822 508.679443,328.255707 
            C510.491699,328.156189 511.913452,328.010468 513.335266,328.009918 
            C546.664795,327.997131 579.998169,327.712128 613.321960,328.148926 
            C625.768677,328.312073 638.247375,330.194733 648.682495,338.041840 
            C652.689941,341.055389 656.127075,344.827393 660.529602,348.907745 
            C663.450073,346.290710 666.937195,343.105957 670.489197,339.995148 
            C678.465149,333.009918 688.140198,329.361481 698.373291,329.171967 
            C738.944092,328.420502 779.526978,328.285339 820.106140,328.051086 
            C826.288696,328.015411 831.178772,330.882996 835.038330,335.865845 
            C840.326965,342.693604 845.928650,349.280182 851.439514,355.934265 
            C862.679382,369.505768 873.948120,383.053314 885.206299,396.609619 
            C885.417786,396.864349 885.656128,397.097015 885.865295,397.353516 
            C891.532288,404.301697 893.516907,404.201111 899.263916,397.266327 
            C912.730408,381.016418 926.298523,364.850616 939.839844,348.662750 
            C943.511047,344.274017 947.206970,339.905212 950.937988,335.567261 
            C959.294495,325.851227 978.314697,325.130066 987.133728,335.362915 
            C999.842041,350.108643 1013.729736,363.832306 1026.666504,378.389923 
            C1031.015015,383.283264 1034.767700,387.809692 1042.024048,388.108856 
            C1049.695312,388.425110 1054.088989,383.591278 1058.576538,378.816620 
            C1062.490234,374.652405 1065.954956,370.070312 1069.742188,365.782318 
            C1080.285645,353.844452 1090.860352,341.933380 1101.532593,330.110992 
            C1102.498657,329.040985 1104.243408,328.128998 1105.650757,328.093048 
            C1113.302979,327.897583 1120.962524,328.000214 1129.357788,328.000214 
            C1128.551514,329.307892 1128.137817,330.269714 1127.475952,331.009705 
            C1113.010010,347.184296 1098.486816,363.307587 1084.041138,379.500183 
            C1076.945312,387.454163 1070.151245,395.684814 1062.870239,403.462250 
            C1060.328003,406.177765 1056.734741,407.909027 1052.998291,410.526093 
            C1052.998291,423.469330 1052.998291,437.439362 1052.998291,451.703979 
            C1046.069092,451.703979 1039.328491,451.703979 1032.199951,451.703979 
            C1032.199951,437.713898 1032.199951,423.625763 1032.199951,409.309143 
            C1023.087402,408.003357 1019.724487,400.057220 1014.296082,394.655823 
            C1009.870544,390.252228 1006.077698,385.215973 1001.961609,380.497589 
            C994.848572,372.343658 987.706604,364.214996 980.559265,356.091125 
            C980.146118,355.621552 979.576660,355.289459 978.372803,354.329437 
            C978.372803,387.162659 978.372803,419.291534 978.372803,451.708923 
            C971.058533,451.708923 964.318237,451.708923 957.000000,451.708923 
            C957.000000,447.031281 957.000000,442.263489 957.000000,436.996216 
        M570.500000,348.000000 
            C556.742920,348.000000 542.985901,348.000000 529.262146,348.000000 
            C529.262146,376.282898 529.262146,404.007751 529.262146,432.000000 
            C542.151550,432.000000 554.782166,432.123657 567.409363,431.970245 
            C585.143066,431.754791 602.937561,432.133118 620.585266,430.734070 
            C633.496582,429.710602 640.996460,425.253571 644.807190,411.519592 
            C648.519470,398.140045 648.060791,384.341003 645.282898,370.656586 
            C642.967651,359.251495 635.606628,352.797119 624.888550,350.154022 
            C619.092712,348.724731 612.968323,348.246277 606.972534,348.090485 
            C595.155579,347.783447 583.324951,348.000000 570.500000,348.000000 
        M798.322266,431.999725 
            C801.772705,432.510071 800.986389,430.005005 800.988037,428.168060 
            C801.006897,407.343414 801.000000,386.518768 801.000000,365.694122 
            C801.000000,359.911804 801.000000,354.129486 801.000000,348.309021 
            C800.119263,348.160370 799.654358,348.013428 799.189514,348.013245 
            C768.535645,348.001312 737.876953,347.715637 707.231873,348.234650 
            C700.905273,348.341766 694.115356,350.454498 688.440857,353.387726 
            C677.694641,358.942474 675.362854,369.675690 674.103027,381.094086 
            C710.177856,381.094086 745.923950,381.094086 781.768250,381.094086 
            C781.768250,387.532776 781.768250,393.602966 781.768250,400.214233 
            C745.718323,400.214233 709.896790,400.214233 674.008850,400.214233 
            C674.392700,402.835602 674.488586,404.970337 675.038513,406.980927 
            C677.047607,414.326416 679.158752,421.670258 686.261963,426.019165 
            C693.200623,430.267365 700.708130,432.095245 708.885315,432.055847 
            C738.372375,431.913818 767.860474,432.000000 798.322266,431.999725 
        z" />
                <path opacity="1.000000" stroke="none" d="
        M453.765625,207.733429 
            C465.845978,196.078644 479.318756,187.253174 495.392029,183.419525 
            C503.736969,181.429184 512.472046,180.170334 521.035889,180.143173 
            C598.190796,179.898407 675.346802,180.000290 752.502441,180.000427 
            C753.162292,180.000427 753.822205,180.000412 755.372375,180.000412 
            C754.647278,181.617737 754.404297,183.042984 753.571472,183.884262 
            C742.084534,195.486588 730.509460,207.001663 718.971008,218.553116 
            C713.563965,223.966278 707.605225,226.315140 699.426270,226.246704 
            C643.271606,225.776947 587.110168,225.827316 530.952942,226.111206 
            C515.261963,226.190536 501.161224,231.389297 489.700836,242.745483 
            C479.803619,252.552734 469.696411,262.148285 459.668030,271.822876 
            C450.601227,280.569885 441.539398,289.322388 432.403259,297.996552 
            C431.426147,298.924255 429.969849,299.909454 428.730957,299.915771 
            C406.311432,300.030914 383.891174,299.999664 360.120239,299.999664 
            C391.845337,268.745514 422.680939,238.367645 453.765625,207.733429 
        z" />
                <path opacity="1.000000" stroke="none" d="
        M531.406372,277.226196 
            C527.776245,279.714172 524.207092,281.680328 521.280884,284.350952 
            C515.879272,289.280945 511.691833,296.672913 505.440918,299.227051 
            C499.009857,301.854889 490.719330,299.977814 483.242310,299.990021 
            C469.419952,300.012543 455.597534,299.975952 441.775146,299.948792 
            C441.679169,299.948608 441.583618,299.735504 440.794525,298.798523 
            C441.970032,297.906921 443.367065,297.077942 444.482666,295.966461 
            C460.645538,279.863251 476.697784,263.648254 492.934143,247.619751 
            C501.714355,238.951965 512.099854,233.461563 524.739502,232.988586 
            C532.152100,232.711227 539.560425,232.056229 546.971436,232.044434 
            C599.430664,231.960922 651.890015,232.000000 704.989990,232.000000 
            C703.968506,233.235352 703.287537,234.207825 702.461548,235.035568 
            C690.228149,247.294464 677.916870,259.476501 665.780029,271.829987 
            C663.517883,274.132477 661.282471,275.079193 658.043579,275.070068 
            C619.406921,274.961456 580.769653,274.948608 542.133179,275.087891 
            C538.672302,275.100342 535.215820,276.348053 531.406372,277.226196 
        z" />
                <path opacity="1.000000" stroke="none" d="
        M732.750000,288.750000 
            C726.012573,298.255402 717.319031,300.828796 706.048401,300.272339 
            C686.286438,299.296600 666.441528,300.000000 645.976685,300.000000 
            C647.035278,298.739563 647.732361,297.770996 648.565125,296.938049 
            C686.619080,258.875092 724.674744,220.813843 762.793335,182.815613 
            C764.068726,181.544189 765.987610,180.131317 767.616272,180.119354 
            C791.254700,179.945572 814.894836,180.000198 840.080078,180.000198 
            C838.351685,182.340149 837.414795,184.007919 836.113403,185.311981 
            C801.765259,219.730881 767.379395,254.112244 732.750000,288.750000 
        z" />

            </svg>




            <svg class="Close_Button" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                    d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z">
                </path>
                <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z">
                </path>
            </svg>`;
    button.addEventListener("click", () => {
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
    FOM_APIS_BLACK_Content.appendChild(button)
}

// Formula E

function LoadFEService() {
    let button = document.createElement("button");
    button.classList.add("FOM_APIS_BLACK");
    button.classList.add("FE_API_BLACK");
    button.id = "FE_API_BLACK";
    button.innerHTML = `<svg   class="Open_Button" viewBox="157.896 0 39.1425 36.454" xmlns="http://www.w3.org/2000/svg">

            <path fill="#ffffff" d="M 192.079 24.938 C 188.047 30.184 178.854 36.454 170.185 36.454 C 162.572 36.454 157.896 31.017 157.896 24.459 C 157.896 8.369 187.366 -1.259 194.705 0.133 C 196.192 0.414 197.184 1.493 197.021 3.016 C 196.326 9.479 181.193 23.514 169.576 21.405 C 167.029 20.942 167.715 18.505 170.117 18.502 C 180.608 18.492 191.81 4.697 191.164 3.909 C 190.614 3.239 173.982 8.534 167.117 16.543 C 160.698 24.033 165.729 30.179 172.169 30.129 C 176.186 30.097 183.025 28.725 190.419 23.062 C 192.963 21.114 193.167 23.521 192.081 24.936 L 192.079 24.937 L 192.079 24.938 Z"  transform="matrix(1, 0, 0, 1, 0, -1.7763568394002505e-15)"/>
          </svg>
        

        <svg class="Close_Button" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
                d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z">
            </path>
            <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z">
            </path>
        </svg>`;
    button.addEventListener("click", () => {
        Open = false;
        function Abrir() {
            FOM_APIS_BLACK_Content.classList.add("ACTIVE")
            FE_API_Content.classList.add("ACTIVE")
            FE_API_Content.classList.add("ACTIVE")
            FOM_APIS_CONTESNTS_OPEN = true;
            FOM_APIS_BLACK_Content.removeEventListener("transitionend", Abrir)
        }
        if (!(FE_API_Content.classList.toString().includes("ACTIVE"))) {
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
    FOM_APIS_BLACK_Content.appendChild(button)
}

function GetIDSeson(data) {
    let Soap = document.createElement("div")
    Soap.innerHTML = data;
    let ID = Soap.getElementsByClassName("standings")[0].getAttribute("data-custom-season-id")
    return ID
}
function ScrapingFETeams(sesion, data) {
    let Datos = JSON.parse(data)
    let FEDatos = []
    Datos.forEach(Team => {
        FEDatos.push({
            "POS": Team.teamPosition,
            "NAME": Team.teamName,
            "POINTS": Team.teamPoints,
            "CAR": `https://static-files.formula-e.pulselive.com/cars/${sesion}/${Team.teamId}.png`,
            "COLOR": GenerateColorByName(Team.teamName)
        })
    });
    return FEDatos;
}

function ScrapingFEDrivers(sesion, data) {
    let Datos = JSON.parse(data)
    let FEDatos = []
    Datos.forEach(Driver => {
        FEDatos.push({
            "POS": Driver.driverPosition,
            "NAME": `${Driver.driverFirstName} ${Driver.driverLastName}`,
            "POINTS": Driver.driverPoints,
            "PHOTO": `https://static-files.formula-e.pulselive.com/drivers/${sesion}/right/small/${Driver.driverId}.png`,
            "COLOR": GenerateColorByName(Driver.driverTeamName),
            "COUNTRY": Driver.driverCountry
        })
    });
    return FEDatos

}

function LoadFEDrivers(Valores) {
    FE_API_DATA_DRIVER_TBODY.innerHTML = "";
    Valores.forEach(DRIVER => {
        FE_API_DATA_DRIVER_TBODY.innerHTML += `<div class="FOM_APIS_ROW FE_API_ROW DRIVER">
        <div class="COLOR" style="background-color: ${DRIVER.COLOR};"><img src="https://raw.githubusercontent.com/Augusto-p/F1-Chrome-Extencion/Country-Flags/${DRIVER.COUNTRY}.jpg"></div>
        <div class="POS">${DRIVER.POS}</div>
        <div class="PHOTO"><img src="${DRIVER.PHOTO}"></img></div>
        <div class="NAME">${DRIVER.NAME}</div>
        <div class="POINTS">${DRIVER.POINTS}</div>
      </div>`;
    });

}

function LoadFETeams(Valores) {
    FE_API_DATA_TEAM_TBODY.innerHTML = "";

    // Valores.sort((a, b) => a.POS - b.POS)
    Valores.forEach(TEAM => {


        FE_API_DATA_TEAM_TBODY.innerHTML += `<div class="FOM_APIS_ROW FE_API_ROW TEAM">
        <div class="COLOR" style="background-color: ${TEAM.COLOR};"></div>
        <div class="POS">${TEAM.POS}</div>
        <div class="PHOTO"><img src="${TEAM.CAR}"></div>
        <div class="NAME">${TEAM.NAME}</div>
        <div class="POINTS">${TEAM.POINTS}</div>
      </div>`
    });
}

let FESesion;

// IndyCar



function LoadIndyCarService() {
    let button = document.createElement("button");
    button.classList.add("FOM_APIS_BLACK");
    button.classList.add("IndyCar_API_BLACK");
    button.id = "IndyCar_API_BLACK";
    button.innerHTML = `
        <svg  class="Open_Button"viewBox="265.7468 438.4999 114.0532 68.3532" xmlns="http://www.w3.org/2000/svg">
            <path class="st1" d="M373.8,470.3l-2.8-0.4l-8.7-1.4c-0.2-2.8-2.3-5.2-5.1-5.6l-25.3-4c-0.1-0.8-0.4-3.7-1-5.6&#10;&#9;c-0.3-0.8-0.7-1.5-1.2-2c0,0,0,0,0,0s0,0,0,0c-0.4-0.4-0.9-0.7-1.3-1l0,0c-0.4-0.2-0.9-0.4-1.5-0.5c-0.6-0.1-1.2-0.1-1.7,0l0,0&#10;&#9;c-1,0.2-2.5,0.8-3.4,2.1c-1.1,1.6-2.3,4.3-2.6,5l-25.3-4c-2.8-0.4-5.6,1.1-6.6,3.8l-9-1.4l-2.5-0.4c-2.8-0.4-5.4,1.4-5.8,4.2&#10;&#9;l-4.2,26.5c-0.4,2.8,1.5,5.4,4.2,5.8l14.8,2.4c2,0.3,3.9-0.9,4.4-2.9l17.6,2.8c0,1.2,0.9,2.2,2.1,2.3l6,0.9l4.5,0.7l4.5,0.7l6,0.9&#10;&#9;c1.2,0.2,2.3-0.5,2.7-1.6l17.6,2.8c-0.1,2,1.3,3.8,3.3,4.1l14.8,2.3c2.8,0.4,5.4-1.5,5.8-4.2l4.2-26.5&#10;&#9;C378.5,473.3,376.6,470.7,373.8,470.3 M338.6,469.5c0.1-1.7,0.2-6.2,0.2-7.7l19,3c1.4,0.2,2.5,1.1,3,2.4l0.4,1l-2.2-0.3&#10;&#9;c-2.1-0.3-4.1,1.1-4.4,3.2l-1.1,7.2c-2-0.6-8.3-2-13.8-2.6c0,0-0.5-0.3-0.8-2.2l4.8,0.8c0.3,0.1,0.6-0.2,0.7-0.5l0.3-1.7&#10;&#9;c0.1-0.3-0.2-0.6-0.5-0.7l-5.4-0.9C338.6,470.2,338.6,469.8,338.6,469.5 M326.4,452.2c2.4,0.4,1.7,5.9,1.7,5.9l-2.5-0.4l-2.5-0.4&#10;&#9;C322.9,457.4,323.9,451.9,326.4,452.2 M289,455.8c0.9-1.1,2.2-1.6,3.6-1.4l19,3c-0.4,1.4-1.7,5.7-2.2,7.4c-0.1,0.4-0.2,0.7-0.3,1&#10;&#9;l-5.4-0.9c-0.3-0.1-0.6,0.2-0.7,0.5l-0.3,1.7c-0.1,0.3,0.2,0.6,0.5,0.7l4.8,0.8c-0.8,1.7-1.4,1.8-1.4,1.8c-5.5-1.1-11.9-1.7-14-1.8&#10;&#9;l1.1-7.2c0.3-2.1-1.1-4.1-3.2-4.4l-2.2-0.3L289,455.8z M306.5,491.4l-17.1-2.7c0,0,0,0,0-0.1l0.4-2.2c0,0,0-0.1,0.1,0l13.9,3.4&#10;&#9;c0.3,0.1,0.7,0.3,1,0.4L306.5,491.4C306.6,491.3,306.6,491.4,306.5,491.4 M350.3,498.3C350.3,498.3,350.3,498.3,350.3,498.3&#10;&#9;l-17.2-2.7c0,0,0-0.1,0-0.1l2.2-0.5c0.4-0.1,0.7-0.1,1.1-0.1l14.3,1.1c0,0,0.1,0,0,0.1L350.3,498.3z" transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, -7.105427357601002e-15)"/>
        </svg>
        <svg class="Close_Button" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
                d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z">
            </path>
            <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z">
            </path>
        </svg>`;
    button.addEventListener("click", () => {
        Open = false;
        function Abrir() {
            FOM_APIS_BLACK_Content.classList.add("ACTIVE")
            IndyCar_API_Content.classList.add("ACTIVE")
            IndyCar_API_Content.classList.add("ACTIVE")
            FOM_APIS_CONTESNTS_OPEN = true;
            FOM_APIS_BLACK_Content.removeEventListener("transitionend", Abrir)
        }
        if (!(IndyCar_API_Content.classList.toString().includes("ACTIVE"))) {
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
    FOM_APIS_BLACK_Content.appendChild(button)
}

function ScrapingIndyCarDrivers(data) {
    let IndyCar = []
    let Soap = document.createElement("div")
    Soap.innerHTML = data;
    let Drivers = Soap.getElementsByClassName("list-navigation_container")[0].nextElementSibling.getElementsByClassName("driver-listing__driver-profile")
    Array.prototype.slice.call(Drivers).forEach(async driver => {
        let Name = driver.getElementsByClassName("secondary-heading")[0].textContent.replace("&nbsp;", "").replaceAll("  ", "").replaceAll("\n", "")
        let Stditics = driver.getElementsByClassName("driver-profile__point-standings-table")[0].getElementsByTagName("td")
        let Points = Stditics[3].textContent.replaceAll("  ", "").replaceAll("\n", "")
        let Pos = Stditics[0].textContent.replaceAll("  ", "").replaceAll("\n", "")
        let Imagens = driver.getElementsByClassName("driver-profile__profile-image")
        let Flag = Imagens[3].getAttribute("src").split("?")[0]
        let Photo = Imagens[0].getAttribute("src").split("?")[0]

        IndyCar.push({
            "POS": Pos,
            "NAME": Name,
            "POINTS": Points,
            "PHOTO": Photo,
            "COLOR": GenerateColorByName(Name),
            "COUNTRY": Flag
        })

    });
    return IndyCar



}

function LoadIndyCarDrivers(Valores) {
    IndyCar_API_DATA_DRIVER_TBODY.innerHTML = "";
    Valores.forEach(DRIVER => {
        IndyCar_API_DATA_DRIVER_TBODY.innerHTML += `<div class="FOM_APIS_ROW IndyCar_API_ROW DRIVER">
        <div class="COLOR" style="background-color: ${DRIVER.COLOR};"><img src="${DRIVER.COUNTRY}"></div>
        <div class="POS">${DRIVER.POS}</div>
        <div class="PHOTO"><img src="${DRIVER.PHOTO}"></img></div>
        <div class="NAME">${DRIVER.NAME}</div>
        <div class="POINTS">${DRIVER.POINTS}</div>
      </div>`;
    });

}


// Moto gp
let MotoGPSesion;
let MotoGPID;
let Moto2ID;
let Moto3ID;

async function getMotoGPDriverImageAndTemColor(id) {
    let response = await fetch(`https://api.pulselive.motogp.com/motogp/v1/riders/${id}`);
    let data = await response.json()
    return [data.career[0].pictures.profile.main, data.career[0].team.color]


}

async function getMotoGPTeamsImageAndTemColor() {
    let response = await fetch(`https://api.pulselive.motogp.com/motogp/v1/riders/`);
    let Data = await response.json()
    
    const filteredArray = Data.filter(item => item.current_career_step.category.name === "MotoGP");
    // console.log(filteredArray);
    const teams = new Map();

    filteredArray.forEach(item => {
        const teamId = item.current_career_step.team.name.replace("™", "").replace("Team");
        if (!(teamId in teams.keys())) {
            teams.set(teamId, {
                "Color": item.current_career_step.team.color,
                "Bike": item.current_career_step.pictures.bike.main
            })
        }
    });

    return teams

}






function LoadMotoGPDrivers(Valores) {
    MotoGP_API_DATA_DRIVER_TBODY.innerHTML = "";
    // console.log(Valores.length);


    Valores.sort((a, b) => a.POS - b.POS)
    Valores.forEach(DRIVER => {
        MotoGP_API_DATA_DRIVER_TBODY.innerHTML += `<div class="FOM_APIS_ROW MotoGP_API_ROW DRIVER">
        <div class="COLOR" style="background-color: ${DRIVER.COLOR};"><img src="https://raw.githubusercontent.com/Augusto-p/F1-Chrome-Extencion/Country-Flags/${DRIVER.COUNTRY}.jpg"></div>
        <div class="POS">${DRIVER.POS}</div>
        <div class="PHOTO"><div class="img"
        ><img src="${DRIVER.PHOTO}"></img></div></div>
        <div class="NAME">${DRIVER.NAME}</div>
        <div class="POINTS">${DRIVER.POINTS}</div>
        </div>`;
    })
}

function LoadMotoGPTeams(Valores) {
    MotoGP_API_DATA_TEAM_TBODY.innerHTML = "";
    
    Valores.sort((a, b) => a.POS - b.POS)
    Valores.forEach(TEAM => {
        MotoGP_API_DATA_TEAM_TBODY.innerHTML += `<div class="FOM_APIS_ROW MotoGP_API_ROW TEAM">
        <div class="COLOR" style="background-color: ${TEAM.COLOR};"></div>
        <div class="POS">${TEAM.POS}</div>
        <div class="PHOTO"><div class="img"
        ><img src="${TEAM.CAR}"></img></div></div>
        
        <span class="NAME">${TEAM.NAME}</span>
        <div class="POINTS">${TEAM.POINTS}</div>
      </div>`
    });
}

function LoadMotoGPService() {
    let button = document.createElement("button");
    button.classList.add("FOM_APIS_BLACK");
    button.classList.add("MotoGP_API_BLACK");
    button.id = "MotoGP_API_BLACK";
    button.innerHTML = `
        

        <svg viewBox="0 0 485.6 265.8" class="Open_Button" xmlns="http://www.w3.org/2000/svg">
  <defs></defs>
  <g>
    <g>
      <g>
        <path style="fill:#ffffff;" d="M470.6,127h-4.5l-2.5,11.7h-1.8l2.5-11.7h-4.4l0.3-1.5h10.7L470.6,127z"></path>
        <path style="fill:#ffffff;" d="M472.4,125.5h2.4l1.8,11.4h0l6.5-11.4h2.4l-2.8,13.2h-1.7l2.7-11.6h0l-6.7,11.6h-1.7l-1.7-11.6h0
				l-2.3,11.6h-1.7L472.4,125.5z"></path>
      </g>
    </g>
    <g>
      <g>
        <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M47.5,23.1C54.3,10.3,70.2,0,82.9,0h89.3l-59.8,113.1H0L47.5,23.1z"></path>
        <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M229.9,56.7c4.8-9,16-16.3,25-16.3H316l-29.5,56.5c-4.8,9-16,16.3-25,16.3
				h-61.1L229.9,56.7z"></path>
        <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M332.3,8.9c2.6-4.8,8.5-8.6,13.3-8.6h32l-17.1,31.9
				c-2.6,4.8-8.5,8.6-13.3,8.6h-32L332.3,8.9z"></path>
        <polygon style="fill-rule:evenodd;clip-rule:evenodd;" points="112.3,113.1 200.6,113.1 153.4,201.2 65.2,201.2 			"></polygon>
        <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M153.4,201.2h61.9l-28.2,52.6c-3.5,6.6-11.8,12-18.4,12h-49.9L153.4,201.2
				z"></path>
      </g>
      <path style="" d="M321,141.2l-16.9,31.9c-1.1,2.1,0.3,3.6,2.4,3.8c1.5,0.1,3.1,0,5.2-0.9l-6.8,12.8
			c-2.4,0.6-3.7,1-6,1c-10,0-14.7-6.8-10.3-15.2l28.5-53.6c1.9-3.5,6.2-6.3,9.7-6.3h8.3l-6.7,12.6h8.6l-7.3,13.8L321,141.2z
			 M235.3,143.6l-0.3,0.6l-7,13.2l-13.1,24.7c-1.1,2.1-3.1,3.9-5.3,5.1c-1.5,0.8-3.1,1.3-4.5,1.3h-8.5l16.5-31.1l7.3-13.8
			c0-0.2,0.1-0.4,0.2-0.5c0.7-1.9-0.1-3.3-2-3.3c-2.1,0-4.7,1.7-5.9,3.8l-7.3,13.8l-13.1,24.7c-1.9,3.5-6.3,6.4-9.8,6.4H174
			l23.9-44.9c5.1-10.5,11.1-17.7,28.4-17.7h22.5c8.6,0,15.8,5,9.1,17.7l-20.5,38.5c-1.9,3.5-6.3,6.4-9.8,6.4h-8.5l16.5-31.1
			l7.3-13.8c1.1-2.1,0.3-3.8-1.8-3.8C239.1,139.8,236.5,141.5,235.3,143.6z M411.9,140.9l-5.3,10h-14.4l4.3-8.1
			c1.1-2.1,0.3-3.8-1.8-3.8c-2.1,0-4.7,1.7-5.8,3.8l-14.5,27.2l-1.3,2.4c-1.1,2.1-0.3,3.8,1.8,3.8c2.1,0,4.7-1.4,6.9-5.9l2-3.7h-3.6
			l5.8-10.9H404l-9.9,18.6l-0.1,0.2c-4.5,8.4-16.2,15.2-26.3,15.2c-10,0-14.6-6.8-10.1-15.2l2.4-4.6l15.6-29.4
			c4.5-8.4,16.2-15.2,26.3-15.2c10.1,0,14.6,6.8,10.1,15.2L411.9,140.9z M331.1,172.5c-1.1,2.1-0.3,3.8,1.8,3.8
			c2.1,0,4.7-1.7,5.8-3.8l15.7-29.5c1.1-2.1,0.3-3.8-1.8-3.8c-2.1,0-4.7,1.7-5.8,3.8L331.1,172.5z M369.8,141.1L352,174.4l-0.1,0.2
			c-4.5,8.4-16.2,15.2-26.3,15.2c-10,0-14.6-6.8-10.1-15.2l18-33.9c4.5-8.4,16.2-15.2,26.3-15.2c10.1,0,14.6,6.8,10.1,15.2
			L369.8,141.1z M262.9,172.5c-1.1,2.1-0.3,3.8,1.8,3.8c2.1,0,4.7-1.7,5.8-3.8l15.8-29.5c1.1-2.1,0.3-3.8-1.8-3.8
			c-2.1,0-4.7,1.7-5.8,3.8L262.9,172.5z M301,141.1l-17.8,33.3l-0.1,0.2c-4.5,8.4-16.2,15.2-26.3,15.2c-10,0-14.6-6.8-10.1-15.2
			l18.1-33.9c4.5-8.4,16.2-15.2,26.3-15.2c10.1,0,14.6,6.8,10.1,15.2L301,141.1z M431,142.9l-0.7,1.3l-6.3,11.9h2.5
			c2.8,0,6.3-2.3,7.8-5.1l4.3-8.1c1.1-2.1,0.3-3.8-1.8-3.8C434.7,139.1,432.1,140.8,431,142.9z M416.9,169.4l-6.8,12.8
			c-1.9,3.5-6.2,6.3-9.7,6.3h-8.5l18.2-34.2l5.5-10.3c7.8-15.2,17.3-18.5,28.4-18.5c12.6,0,14.2,8.3,8.7,18.6l-0.4,0.7l-4.8,9
			l-0.3,0.6c-4.5,8.5-16.5,15.4-26.8,15.4C419.2,169.7,418,169.6,416.9,169.4z"></path>
    </g>
  </g>
</svg>
        <svg class="Close_Button" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
                d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z">
            </path>
            <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z">
            </path>
        </svg>`;
    button.addEventListener("click", () => {
        Open = false;
        function Abrir() {
            FOM_APIS_BLACK_Content.classList.add("ACTIVE")
            MotoGP_API_Content.classList.add("ACTIVE")
            MotoGP_API_Content.classList.add("ACTIVE")
            FOM_APIS_CONTESNTS_OPEN = true;
            FOM_APIS_BLACK_Content.removeEventListener("transitionend", Abrir)
        }
        if (!(MotoGP_API_Content.classList.toString().includes("ACTIVE"))) {
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
    FOM_APIS_BLACK_Content.appendChild(button)
}

function GetIDSesonMotoGP(Data) {
    let Datos = JSON.parse(Data)
    const currentItem = Datos.find(item => item.current === true);
    const currentId = currentItem ? currentItem.id : null;
    return currentId
}

async function ScrapingMotoGpTeams(datos) {
    let MotoGP = []
    let data = JSON.parse(datos)
    // console.log(data.classification.team);

    let year = data.classification.team[0].season.year


    let response = await fetch(`https://api.pulselive.motogp.com/motogp/v1/riders/${MotoGPCategoryUuidD}`);
    let dataDriver = await response.json()
    
    const category= dataDriver.career.find(item => item.season === year);
    const categoryId = category ? category.category.id : null;

    let response2 = await fetch(`https://api.pulselive.motogp.com/motogp/v1/teams?categoryUuid=${categoryId}&seasonYear=${year}`);
    let Teams = await response2.json()

    data.classification.team.forEach(TEAM => {
        let equipo;
        Teams.forEach(item => {
            if (TEAM.team.toLowerCase().replaceAll("  ", " ").replace("MotoGP™", "").replace("MotoGP", "").replace("™", "").replace("Team", "").includes(item.name.toLowerCase().replaceAll("  ", " ").replace("MotoGP™", "").replace("MotoGP", "").replace("™", "").replace("Team", ""))) {
                equipo = item     
            }
        });        
        MotoGP.push({
            "TEAMID": TEAM.id,
            "NAME": TEAM.team,
            "POS": TEAM.position,
            "POINTS": TEAM.points,
            "CAR": equipo.picture,
            "COLOR": equipo.color
            
        })
    });
    return MotoGP
}


async function ScrapingMotoGpDrivers(data) {
    let MotoGP = []
    let Datos = JSON.parse(data)
    let DriverIDM;
    const promises = Datos["classification"].map(async driver => {
        DriverIDM = driver.rider.riders_api_uuid
        let IMGColor = await getMotoGPDriverImageAndTemColor(driver.rider.riders_api_uuid)

        // Push the driver information into the array
        MotoGP.push({
            "POS": driver.position,
            "NAME": driver.rider.full_name,
            "POINTS": driver.points,
            "PHOTO": IMGColor[0],
            "COLOR": IMGColor[1],
            "COUNTRY": driver.rider.country.iso
        })
    })

    // Wait for all promises to resolve
    await Promise.all(promises)

    // Return the populated MotoGP array
    return {MotoGP, DriverIDM}
}



function LoadMotoCategorys(data) {
    let Datos = JSON.parse(data)

    const MotogpItem = Datos.find(item => item.name === "MotoGP™");
    MotoGPID = MotogpItem ? MotogpItem.id : null;

    const Moto2Item = Datos.find(item => item.name === "Moto2™");
    Moto2ID = Moto2Item ? Moto2Item.id : null;

    const Moto3Item = Datos.find(item => item.name === "Moto3™");
    Moto3ID = Moto3Item ? Moto3Item.id : null;
}

let MotoGPCategoryUuid;

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

        } else if (Response.API === "FE") {
            if (Response.Action === "GETID") {
                FESesion = GetIDSeson(Response.Body)
                chrome.runtime.sendMessage({ Type: "GET", API: "FE", Action: "Team", URL_API: `https://api.formula-e.pulselive.com/formula-e/v1/standings/teams?championshipId=${FESesion}` });
                chrome.runtime.sendMessage({ Type: "GET", API: "FE", Action: "Driver", URL_API: `https://api.formula-e.pulselive.com/formula-e/v1/standings/drivers?championshipId=${FESesion}` });
                // LoadF3Teams();
            } else if (Response.Action === "Team") {
                let Datos = ScrapingFETeams(FESesion, Response.Body);
                LoadFETeams(Datos)
            } else if (Response.Action === "Driver") {
                let Datos = ScrapingFEDrivers(FESesion, Response.Body);
                LoadFEDrivers(Datos)
            }
        } else if (Response.API === "IndyCar") {
            if (Response.Action === "Drivers") {
                let Data = ScrapingIndyCarDrivers(Response.Body)
                LoadIndyCarDrivers(Data)

            }
        } else if (Response.API === "MotoGP") {

            if (Response.Action === "Drivers") {
                ScrapingMotoGpDrivers(Response.Body).then((data) => {
                    LoadMotoGPDrivers(data.MotoGP)
                    MotoGPCategoryUuidD = data.DriverIDM
                    chrome.runtime.sendMessage({ Type: "GET", API: "MotoGP", Action: "Teams", URL_API: `https://api.pulselive.motogp.com/motogp/v1/results/world-standings?type=team&season=${MotoGPSesion}&category=${MotoGPID}` });
                })
            } else if (Response.Action === "Teams") {
                ScrapingMotoGpTeams(Response.Body).then(Data=>{

                    LoadMotoGPTeams(Data)
                })
                



            } else if (Response.Action === "GetId") {
                MotoGPSesion = GetIDSesonMotoGP(Response.Body)
                chrome.runtime.sendMessage({ Type: "GET", API: "MotoGP", Action: "LoadCategorys", URL_API: `https://api.pulselive.motogp.com/motogp/v1/results/categories?seasonUuid=${MotoGPSesion}` });
            } else if (Response.Action === "LoadCategorys") {
                LoadMotoCategorys(Response.Body)

                chrome.runtime.sendMessage({ Type: "GET", API: "MotoGP", Action: "Drivers", URL_API: `https://api.pulselive.motogp.com/motogp/v1/results/standings?seasonUuid=${MotoGPSesion}&categoryUuid=${MotoGPID}` });
                


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



chrome.runtime.sendMessage({ Type: "GET", API: "FE", Action: "GETID", URL_API: "https://www.fiaformulae.com/en/standings?tab=teams&period=latest" });
chrome.runtime.sendMessage({ Type: "GET", API: "IndyCar", Action: "Drivers", URL_API: "https://www.indycar.com/Drivers" });
chrome.runtime.sendMessage({ Type: "GET", API: "MotoGP", Action: "GetId", URL_API: "https://api.pulselive.motogp.com/motogp/v1/results/seasons" });


// chrome.runtime.sendMessage({ Type: "GET", API: "FE", Action: "Drivers", URL_API: "https://www.formula1.com/en/drivers.html" });
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
