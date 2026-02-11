const hamburger= document.getElementById("hamburger")
const navmenu= document.getElementById("navmenu")
const navlinks= document.querySelectorAll(".navlink")
hamburger.addEventListener("click",() => {
   navmenu.classList.toggle("active")
   hamburger.classList.toggle("active")
})

navlinks.forEach( ( link) => {
    link.addEventListener("click", ( ) => {
        navmenu.classList.toggle("active")
        // hamburger.classList.toggle("active")
    })
})


