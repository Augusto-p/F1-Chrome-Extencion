const seachbar = document.querySelector('#Seachbar')


document.querySelector(".lupa").addEventListener("click", () =>{
    Seach()
})

document.querySelector(".micro").addEventListener("click", ()=>{
    const link = document.querySelector("#GoogleLink")
    link.href = "https://www.google.com/"
    link.click();
})

document.querySelector(".lens").addEventListener("click", ()=>{
    const link = document.querySelector("#GoogleLink")
  link.href = "https://www.google.com"
  link.click();
})


seachbar.addEventListener("keydown", (event)=>{
    if (event.keyCode == 13) {
        event.preventDefault();
        Seach()
    }
})

function Seach() {
  const link = document.querySelector("#SeachLink")
  link.href = `https://www.google.com/search?q=${seachbar.value}`
  link.click();
  
}

document.getElementById("RefreshWall").addEventListener("click", (event) =>{
    UploadWallpaper()
})