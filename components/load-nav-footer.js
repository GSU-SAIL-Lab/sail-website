import { initMobileNavListeners, handleNavOnScroll } from "./nav-scripts.js";

fetch("components/nav.html")
    .then(res => res.text())
    .then(data => {
        const navIns = document.querySelector("#nav-insert");
        navIns.parentElement.innerHTML = data + navIns.parentElement.innerHTML;
        navIns.remove();
    })
    .then(initMobileNavListeners)
    .then(handleNavOnScroll);

fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
        document.querySelector("#footer-insert").innerHTML = data
    })