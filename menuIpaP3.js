const btnMenu = document.getElementById("img");

function toggleMenu(){
    const nav = document.getElementById("nav")
    nav.classList.toggle("active");
}

btnMenu.addEventListener("click", toggleMenu);