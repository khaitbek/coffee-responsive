const navToggle = document.getElementById("navToggle"),
      primaryNav = document.getElementById("primaryNavigation"),
      navList = document.querySelector(".navigation__list");

navToggle.addEventListener("click",()=>{
    navToggle.ariaExpanded = !navToggle.hasAttribute("toggle")
    navToggle.toggleAttribute("toggle")
    document.body.toggleAttribute("no-scroll")
    console.log(document.body.attributes);
    primaryNav.classList.toggle("open")
})

const elModalOpenBtn = document.querySelector("#plan__btn")
const elModalCloseBtn  = document.querySelector("#modal__checkout__btn")
const modal = document.querySelector("#modal");

elModalOpenBtn.addEventListener("click",(evt)=>{
    document.body.style.overflowY = "hidden";
    evt.preventDefault();
    modal.classList.remove("close")
    modal.showModal()
})

elModalCloseBtn.addEventListener("click",()=>{
    closeModal();
})

function closeModal(){
    document.body.style.overflowY = "visible";
    modal.classList.add("close");
    setTimeout(()=>{
        modal.close();
    },600)
}