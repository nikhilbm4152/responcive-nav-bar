const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");

  //   burger togle
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinksFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    // burger cross animation
    burger.classList.toggle("cross");
  });
};

// navSlide()

// if u want to call diffrent function just create an anonymous function and call all the diffrent function in it

const app = () => {
  navSlide();
};

app();
