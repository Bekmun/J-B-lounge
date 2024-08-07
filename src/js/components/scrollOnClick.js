export const scrollOnClick = () => {
  const navLink = document.querySelectorAll(".nav__link[data-goto]");
  const menuButton = document.querySelector(".hero__menu-btn[data-goto]");
  if (navLink.length > 0) {
    navLink.forEach((navLink) => {
      navLink.addEventListener("click", onMebuLinkClick);
    });

    menuButton.addEventListener("click", onMebuLinkClick);

    function onMebuLinkClick(e) {
      const navLink = e.target;
      if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
        const gotoBlock = document.querySelector(navLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top + pageYOffset;

        if (btnOpen) {
          document.body.classList.remove("_lock");
          menuNav.classList.remove("nav--active");
        }

        setTimeout(() => {
          window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
          });
          e.preventDefault();
        }, "200");
      }
    }
  }

  const btnOpen = document.querySelector(".header__burger");
  const btnClose = document.querySelector(".header__close");
  const menuNav = document.querySelector(".nav");

  if (btnOpen) {
    btnOpen.addEventListener("click", function (e) {
      document.body.classList.add("_lock");
      menuNav.classList.add("nav--active");
    });
  }

  btnClose.addEventListener("click", function (e) {
    menuNav.classList.remove("nav--active");
    document.body.classList.remove("_lock");
  });
};
