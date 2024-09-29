function GetAllForClass(html, type, class_) {
    const contenedorTemporal = document.createElement("div");
    contenedorTemporal.innerHTML = html;
    clase = ""

    if (class_ != null) {

        class_.split(" ").forEach(c => {
            clase += `.${c}`
        });
    }

    const elementos = contenedorTemporal.querySelectorAll(`${type}${clase}`);
    return elementos


}

function GetForClass(html, type, class_) {
    const contenedorTemporal = document.createElement("div");
    contenedorTemporal.innerHTML = html;
    clase = ""
    if (class_ != null) {
        class_.split(" ").forEach(c => {
            clase += `.${c}`
        });
    }
    const elementos = contenedorTemporal.querySelector(`${type}${clase}`);
    return elementos
}
function GetByID(html, type ,ID) {
    const contenedorTemporal = document.createElement("div");
    contenedorTemporal.innerHTML = html;
    
    const elementos = contenedorTemporal.querySelector(`${type}#${ID}`);
    return elementos
}

function GetAllByTag(html, type) {
    const contenedorTemporal = document.createElement("div");
    contenedorTemporal.innerHTML = html;
    
    const elementos = contenedorTemporal.querySelectorAll(`${type}`);
    return elementos
}

function GetByTag(html, type) {
    const contenedorTemporal = document.createElement("div");
    contenedorTemporal.innerHTML = html;
    
    const elementos = contenedorTemporal.querySelector(`${type}`);
    return elementos
}

