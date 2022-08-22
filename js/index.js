// import * as all from "./scroll.js";

$(document).ready(function () {
  // nav
  let myLinks = document.querySelectorAll("#navbarSupportedContent ul li a");
  myLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      myLinks.forEach((el) => {
        el.classList.remove("links");
      });
      e.target.classList.add("links");
    });
  });

  let Hover = document.querySelector(".Hover");
  let mylis = document.querySelectorAll(".myli");

  mylis[0].onclick = function () {
    Hover.style.cssText = "left:14px;  ";
  };
  mylis[1].onclick = function () {
    Hover.style.cssText = "left:105px; ";
  };
  mylis[2].onclick = function () {
    Hover.style.cssText = "left: 194px; width: 83px; ";
  };
  mylis[3].onclick = function () {
    Hover.style.cssText = "left: 306px; width: 84px;";
  };

  //
  let myButton = document.getElementById("buttonIcon");
  let Rows = document.querySelectorAll(".Row");
  let clickNav = document.getElementById("clickNav"),
    clickul = document.querySelectorAll(".clickul a");

  clickul.forEach((a) => {
    a.addEventListener("click", (e) => {
      myButton.click();
    });
  });
  myButton.addEventListener("click", function (e) {
    if (!myButton.classList.contains("show")) {
      Rows[0].style.transform = "rotate(45deg)";
      Rows[0].style.width = "32px";
      //
      Rows[1].style.opacity = "0";
      //
      Rows[2].style.transform = "rotate(-45deg)";
      Rows[2].style.width = "32px";
      myButton.classList.add("show");
      clickNav.style.pointerEvents = "auto";
      clickNav.style.opacity = "1";
      mainNav.style.backdropFilter = "none";
      // myButton.classList.add("Show");
    } else if (myButton.classList.contains("show")) {
      Rows[0].style.transform = "rotate(0deg)";
      Rows[0].style.width = "40px";
      Rows[1].style.opacity = "1";
      Rows[2].style.transform = "rotate(0deg)";
      Rows[2].style.width = "40px";
      clickNav.style.pointerEvents = "none";
      clickNav.style.opacity = "0";
      myButton.classList.remove("show");
      mainNav.style.backdropFilter = "blur(20px)";
    }
  });
  //
  // start option
  let myOption = document.querySelector(".option");
  let myGear = document.querySelector(".fa-gear");
  myGear.addEventListener("click", function () {
    myOption.classList.toggle("active");
    myGear.classList.toggle("fa-spin");
  });
  // end  option
  // start colors
  let spans = document.querySelectorAll(".option .color span ");
  // let color1 = localStorage.getItem("color1");
  // let color2 = localStorage.getItem("color2");
  let localColor = localStorage.getItem("color1");
  if (localColor !== null) {
    document.documentElement.style.setProperty(
      "--main-color",
      localStorage.getItem("color1")
    );
    document.documentElement.style.setProperty(
      "--second-color",
      localStorage.getItem("color2")
    );
    document.documentElement.style.setProperty(
      "--dark-bg",
      localStorage.getItem("color3")
    );
    document.documentElement.style.setProperty(
      "--light-bg",
      localStorage.getItem("color4")
    );
    document.documentElement.style.setProperty(
      "--text-color",
      localStorage.getItem("color5")
    );
    document.documentElement.style.setProperty(
      "--spin-color",
      localStorage.getItem("color6")
    );
    document.documentElement.style.setProperty(
      "--spinBackground-color",
      localStorage.getItem("color7")
    );
    spans.forEach(function (span) {
      span.classList.remove("active");

      if (span.dataset.color1 === localColor) {
        span.classList.add("active");
      }
    });
  }
  spans.forEach(function (span) {
    span.addEventListener("click", function (el) {
      spans.forEach(function (e) {
        // if (e.classList.contains("dark")) {
        //   myGear.style.color = "#fff";
        // }
        e.classList.remove("active");
      });
      // span.target.classList.add("active");
      el.target.classList.add("active");

      // set item
      localStorage.setItem("color1", el.target.dataset.color1);
      localStorage.setItem("color2", el.target.dataset.color2);
      localStorage.setItem("color3", el.target.dataset.color3);
      localStorage.setItem("color4", el.target.dataset.color4);
      localStorage.setItem("color5", el.target.dataset.color5);
      localStorage.setItem("color6", el.target.dataset.color6);
      localStorage.setItem("color7", el.target.dataset.color7);
      // set item
      document.documentElement.style.setProperty(
        "--main-color",
        el.target.dataset.color1
      );
      document.documentElement.style.setProperty(
        "--second-color",
        el.target.dataset.color2
      );
      document.documentElement.style.setProperty(
        "--dark-bg",
        el.target.dataset.color3
      );
      document.documentElement.style.setProperty(
        "--light-bg",
        el.target.dataset.color4
      );
      document.documentElement.style.setProperty(
        "--text-color",
        el.target.dataset.color5
      );
      document.documentElement.style.setProperty(
        "--spin-color",
        el.target.dataset.color6
      );
      document.documentElement.style.setProperty(
        "--spinBackground-color",
        el.target.dataset.color7
      );
    });
  });
  // end colors
});
// document.querySelector(".mySpiner").addEventListener("load", function () {
//   document.querySelector(".mySpiner").style.display = "flex";
// });
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Front-End Developer",
  "Flutter developrer",
  "Back end developer",
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function typing() {
  if (textArray[textArrayIndex].length > charIndex) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typing, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erasing, newTextDelay);
  }
}
// eeeeeeaaaaaaaarseeee
function erasing() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erasing, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    setTimeout(typing, newTextDelay);
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
  }
}

// nav
let mainNav = document.getElementById("mainNav");
let mySection = document.querySelector(".main-section");
let meImage = document.querySelector(".main-section .image");
//
let imageAbout = document.querySelector(".about .image");
let spans = document.querySelectorAll(".spanProgress");
let span = document.querySelectorAll(".Progress .info span:first-child");

let stat = false;

let about = document.querySelector(".about");
let Projects = document.querySelector(".about .col2");

// button
let myButton = document.querySelector(".myButton");
// services
let services = document.querySelector(".services");
// myportfolio
// start portfolio
const lis = document.querySelectorAll(".portfolio ul li"),
  images = document.querySelectorAll(".portfolio .all"),
  imgs = document.querySelectorAll(".portfolio .all img"),
  portfolio = document.getElementById("Portfolio");

// imgs.forEach((img) => {
//   // console.log(img);
//   img.addEventListener("click", (e) => {
//     // console.log(img);
//     // overlay//
//     let over = document.createElement("div");
//     over.className = "overLay";
//     document.body.prepend(over);
//     //  popup
//     let popup = document.createElement("img");
//     console.log(e.target.src);
//     popup.setAttribute("src", e.target.src);

//     popup.className = "imgOver";
//     over.prepend(popup);
//     //
//     let span = document.createElement("span");
//     let text = document.createTextNode("X");
//     span.style.cssText =
//       "position: absolute;z-index: 5002;   background: #111;  color: white; left: 50%; top: 20%;padding: 10px;border-radius: 50%; cursor:pointer;";
//     span.appendChild(text);
//     over.append(span);
//     span.addEventListener("click", () => {
//       over.remove();
//     });
//   });
// });
lis.forEach((li) => {
  li.addEventListener("click", (element) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    element.target.classList.add("active");
    // console.log(element.target.classList.contains("html"));
    if (element.target.classList.contains("html")) {
      images.forEach((image) => {
        if (image.classList.contains("html")) {
          image.style.cssText = "display:block;";
        } else {
          image.style.cssText = "display:none;";
        }
      });
    }
    if (element.target.classList.contains("scss")) {
      images.forEach((image) => {
        if (image.classList.contains("scss")) {
          image.style.cssText = "display:block;";
        } else {
          image.style.cssText = "display:none;";
        }
      });
    }
    if (element.target.classList.contains("boot")) {
      images.forEach((image) => {
        if (image.classList.contains("boot")) {
          image.style.cssText = "display:block;";
        } else {
          image.style.cssText = "display:none;";
        }
      });
    }
    // if (element.target.classList.contains("app")) {
    //   images.forEach((image) => {
    //     if (image.classList.contains("app")) {
    //       image.style.cssText = "display:block;";
    //     } else {
    //       image.style.cssText = "display:none;";
    //     }
    //   });
    // }
    if (element.target.classList.contains("All")) {
      images.forEach((image) => {
        if (image.classList.contains("all")) {
          image.style.cssText = "display:block;";
        } else {
          image.style.cssText = "display:none;";
        }
      });
    }
  });
});

let imagesPortfolio = document.querySelectorAll(" .portfolio .all .image img");
imagesPortfolio.forEach((image) => {
  image.addEventListener("click", (e) => {
    // console.log(e.target)
    // make box
    let div = document.createElement("div");
    div.classList = "boxOver";
    // make over
    let over = document.createElement("div");
    over.classList = "overLay";
    div.appendChild(over);
    //
    let imageBox = document.createElement("div");
    imageBox.classList = "imageBox";
    let image = document.createElement("img");
    image.setAttribute("src", e.target.src);
    let span = document.createElement("span");
    let spanText = document.createTextNode("X");
    span.title = "close the image";
    span.appendChild(spanText);
    imageBox.appendChild(image);
    imageBox.appendChild(span);
    div.appendChild(imageBox);

    span.addEventListener("click", (e) => {
      div.remove();
    });
    //
    document.body.prepend(div);
  });
});
// end portfolio
window.onscroll = function () {
  if (window.scrollY > mainNav.offsetTop + 50) {
    mainNav.style.boxShadow = " 0 5px 7px rgb(0 0 0 / 13%)";
  } else {
    mainNav.style.boxShadow = " 0 2px 5px rgb(0 0 0 / 13%)";
  }
  //  meImage
  if (window.scrollY >= meImage.offsetTop - 400) {
    meImage.style.opacity = "1";
    meImage.style.left = "0";
  } else {
    meImage.style.opacity = "0";
    meImage.style.left = "500px";
  }
  // nav
  // start About section
  if (window.scrollY >= imageAbout.offsetTop - 400) {
    imageAbout.style.opacity = "1";
    imageAbout.style.left = "0";
  } else {
    imageAbout.style.opacity = "0";
    imageAbout.style.left = "-100px";
  }
  if (window.scrollY >= 400) {
    myButton.style.opacity = "1";
    myButton.style.bottom = "30px";
  } else {
    myButton.style.opacity = "0";
    myButton.style.bottom = "10px";
  }
  //

  if (window.scrollY >= about.offsetTop - 200) {
    document.querySelector(".progresses").style.opacity = "1";

    spans.forEach(function (span) {
      span.style.width = span.dataset.width;
    });
    //
    if (stat === false) {
      span.forEach((el) => {
        let goal = el.dataset.count;
        el.innerHTML = 0;
        let count = setInterval(() => {
          el.textContent++;
          if (el.textContent === goal) {
            clearTimeout(count);
          }
        }, 500 / goal);
      });
      stat = true;
    }
  } else {
    stat = false;
    document.querySelector(".progresses").style.opacity = "0";
    spans.forEach(function (span) {
      span.style.width = "0%";
    });
  }
  if (window.scrollY >= Projects.offsetTop - 500) {
    Projects.style.opacity = "1";
    Projects.style.transform = "translateY(0)";
  } else {
    Projects.style.opacity = "0";
    Projects.style.transform = "translateY(100px)";
  }
  // end About section
  // start nav scroll
  if (window.scrollY < about.offsetTop - 300) {
    let Hover = document.querySelector(".Hover");
    Hover.style.cssText = "left:14px";
    //
    let myLinks = document.querySelectorAll("#navbarSupportedContent ul li a");
    myLinks.forEach((a) => {
      a.classList.remove("links");
    });
    myLinks[0].classList.add("links");
    //
  } else if (
    window.scrollY >= about.offsetTop - 300 &&
    window.scrollY < services.offsetTop - 300
  ) {
    let Hover = document.querySelector(".Hover");
    Hover.style.cssText = "left: 105px; ";
    //
    let myLinks = document.querySelectorAll("#navbarSupportedContent ul li a");
    myLinks.forEach((a) => {
      a.classList.remove("links");
    });
    myLinks[1].classList.add("links");
    //
  } else if (
    window.scrollY >= services.offsetTop - 300 &&
    window.scrollY < portfolio.offsetTop - 300
  ) {
    let Hover = document.querySelector(".Hover");
    Hover.style.cssText = "left: 194px; width: 83px; ";
    //
    let myLinks = document.querySelectorAll("#navbarSupportedContent ul li a");
    myLinks.forEach((a) => {
      a.classList.remove("links");
    });
    myLinks[2].classList.add("links");
  } else if (window.scrollY >= portfolio.offsetTop - 300) {
    let Hover = document.querySelector(".Hover");
    Hover.style.cssText = "left: 306px; width: 84px;";
    //
    let myLinks = document.querySelectorAll("#navbarSupportedContent ul li a");
    myLinks.forEach((a) => {
      a.classList.remove("links");
    });
    myLinks[3].classList.add("links");
  } // // end nav scroll
};

// portfolio
// button
myButton.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
  speed: 600,
});
VanillaTilt.init(document.querySelectorAll(".tiltG"), {
  max: 25,
  speed: 600,
  glare: true,
  "max-glare": 0.5,
});
VanillaTilt.init(document.querySelectorAll(".glare"), {
  max: 0,
  glare: true,
  "max-glare": 0.25,
});

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
var swiper = new Swiper(".myCube", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".myEffect", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
let myanim = document.querySelector(".animaitionload");
let myanimLeft = document.querySelector(".animaitionload .Left");
let myanimRight = document.querySelector(".animaitionload .Right");

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) {
    setTimeout(typing, newTextDelay);
  }
  //
  myanimLeft.style.left = "-2000px";
  myanimRight.style.right = "-2000px";
  //
});
