const navToggle = document.getElementById("navToggle"),
      primaryNav = document.getElementById("primaryNavigation"),
      navList = document.querySelector(".navigation__list");

navToggle.addEventListener("click",()=>{
    navToggle.ariaExpanded = !navToggle.hasAttribute("toggle")
    navToggle.toggleAttribute("toggle")
    document.body.toggleAttribute("no-scroll")
    primaryNav.classList.toggle("open")
})