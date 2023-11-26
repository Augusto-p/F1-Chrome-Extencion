function GetAllForClass2(htmlTexto, tipoElemento, clasesRequeridas) {
    // Crear un elemento temporal para analizar el HTML
    const contenedorTemporal = document.createElement("div");
    contenedorTemporal.innerHTML = htmlTexto;

    // Obtener todos los elementos del tipo especificado dentro del contenedor temporal
    const elementos = contenedorTemporal.getElementsByTagName(tipoElemento);

    // Filtrar los elementos que tienen las clases especificadas
    const elementosConClases = Array.from(elementos).filter((elemento) => {
      const clasesElemento = elemento.classList;
      return clasesRequeridas.every((clase) => clasesElemento.contains(clase));
    });

    // Devolver la lista de elementos que cumplen con los requisitos
    return elementosConClases;
  }



function GetAllForClass(html, type, class_) {
    const contenedorTemporal = document.createElement("div");
    contenedorTemporal.innerHTML = html;
    clase = ""

    if (class_ != null){

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
    if (class_ != null){
    class_.split(" ").forEach(c => {
        clase += `.${c}`
    });
}
    const elementos = contenedorTemporal.querySelector(`${type}${clase}`);
    return elementos
}