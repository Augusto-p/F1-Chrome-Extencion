function save(Name, value) {
    window.localStorage.setItem(Name, value)
}

function get(name) {
    return window.localStorage.getItem(name)
}


function SaveService(name, value) {
    save(`Service${name}`, value)
}

function GetService(name) {
    return get(`Service${name}`)   
}