export function initMobileNavListeners() {
    const openNavBtn = document.querySelector("#open-nav");
    const closeNavBtn = document.querySelector("#close-nav");
    const navLinks = document.querySelector("#nav-links");

    openNavBtn.addEventListener("click", () => {
        navLinks.classList.remove("hidden");
        closeNavBtn.classList.remove("hidden");
    });

    closeNavBtn.addEventListener("click", () => {
        navLinks.classList.add("hidden");
        closeNavBtn.classList.add("hidden");
    });
}

export function handleNavOnScroll() {
    const navbar = document.getElementById('navbar');
    const navContainer = document.getElementById('nav-container');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // State: Floating
            navbar.classList.add('top-[15px]');
            navContainer.classList.add('rounded-lg', 'mx-[15px]', 'w-[calc(100%-30px)]');
            navContainer.classList.remove('w-full');

            navContainer.classList.add("border-4");
            navContainer.classList.remove("border-b-4");
        } else {
            // State: Top of page (Full width)
            navbar.classList.remove('top-[15px]');
            navContainer.classList.remove('rounded-lg', 'mx-[15px]', 'w-[calc(100%-30px)]');
            navContainer.classList.add('w-full');

            navContainer.classList.remove("border-4");
            navContainer.classList.add("border-b-4");
        }
    });
}