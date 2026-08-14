const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-list");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        const isOpen = hamburger.classList.toggle("active");

        navMenu.classList.toggle("menu-open");

        hamburger.setAttribute(
            "aria-expanded",
            isOpen
        );
    });


    // Close menu when clicking a navigation link
    document.querySelectorAll(".nav-list a").forEach(link => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");
            navMenu.classList.remove("menu-open");

            hamburger.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    // Close menu when clicking outside it
    document.addEventListener("click", (event) => {

        if (
            !navMenu.contains(event.target) &&
            !hamburger.contains(event.target)
        ) {

            hamburger.classList.remove("active");
            navMenu.classList.remove("menu-open");

            hamburger.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

}