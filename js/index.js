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

  let myButton = document.getElementById("buttonIcon");
  let Rows = document.querySelectorAll(".Row");
  let clickNav = document.getElementById("clickNav");

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
  console.log(myGear)
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
      "--dark-color",
      localStorage.getItem("color3")
    );
    document.documentElement.style.setProperty(
      "--light-color",
      localStorage.getItem("color4")
    );
    document.documentElement.style.setProperty(
      "--text-color",
      localStorage.getItem("color5")
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
    });
  });
  // end colors
});
document.querySelector(".mySpiner").addEventListener("load", function () {
  document.querySelector(".mySpiner").style.display = "flex";
});
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Front-End Developer",
  "Flutter developrer",
  "Back end developer",
  "Data base ",
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
let meImage = document.querySelector(".main-section .image");

let imageAbout = document.querySelector(".about .image");
let spans = document.querySelectorAll(".spanProgress");
let about = document.querySelector(".about");
let Projects = document.querySelector(".about .col2");

// button
let myButton = document.querySelector(".myButton");
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
  if (window.scrollY >= imageAbout.offsetTop - 500) {
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
  } else {
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
};
// button
myButton.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

VanillaTilt.init(document.querySelectorAll(".tiltG"), {
  max: 25,
  speed: 400,
  glare: true,
});
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
  speed: 500,
});
document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(typing, newTextDelay);
});
