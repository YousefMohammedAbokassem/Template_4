// import * as all from "./scroll.js";

// $(document).ready(function () {
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
  // scrollTo({
  //   top: document.getElementById("Home").offsetTop,
  //   behavior: "smooth",
  // });
};
mylis[1].onclick = function () {
  Hover.style.cssText = "left:105px; ";
  // scrollTo({
  //   top: document.getElementById("About").offsetTop,
  //   behavior: "smooth",
  // });
};
mylis[2].onclick = function () {
  Hover.style.cssText = "left: 194px; width: 83px; ";
  // scrollTo({
  //   top: document.getElementById("Services").offsetTop,
  //   behavior: "smooth",
  // });
};
mylis[3].onclick = function () {
  Hover.style.cssText = "left: 306px; width: 84px;";
  // scrollTo({
  //   top: document.getElementById("Portfolio").offsetTop,
  //   behavior: "smooth",
  // });
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
let localColor = sessionStorage.getItem("color1");

if (localColor !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    sessionStorage.getItem("color1")
  );
  document.documentElement.style.setProperty(
    "--second-color",
    sessionStorage.getItem("color2")
  );
  document.documentElement.style.setProperty(
    "--dark-bg",
    sessionStorage.getItem("color3")
  );
  document.documentElement.style.setProperty(
    "--light-bg",
    sessionStorage.getItem("color4")
  );
  document.documentElement.style.setProperty(
    "--text-color",
    sessionStorage.getItem("color5")
  );
  document.documentElement.style.setProperty(
    "--spin-color",
    sessionStorage.getItem("color6")
  );
  document.documentElement.style.setProperty(
    "--spinBackground-color",
    sessionStorage.getItem("color7")
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
      e.classList.remove("active");
    });
    el.target.classList.add("active");
    // set item
    sessionStorage.setItem("color1", el.target.dataset.color1);
    sessionStorage.setItem("color2", el.target.dataset.color2);
    sessionStorage.setItem("color3", el.target.dataset.color3);
    sessionStorage.setItem("color4", el.target.dataset.color4);
    sessionStorage.setItem("color5", el.target.dataset.color5);
    sessionStorage.setItem("color6", el.target.dataset.color6);
    sessionStorage.setItem("color7", el.target.dataset.color7);
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
    // remove zic if the color was green
    let zic = document.querySelector(".zic");
    if (el.target.dataset.color1 === "#0ba360") {
      zic.style.cssText = "background-size:0px 0px";
    } else {
      zic.style.cssText = "background-size:40px 40px";
    }
  });
});
// end colors

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "A Front-End Developer",
  "A Student At (ASPU)",
  "Learning Information Technology",
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
let SpansProgress = document.querySelectorAll(".spanProgress");
let span = document.querySelectorAll(".Progress .info span:first-child");

let stat = true;
let about = document.querySelector(".about");
let Projects = document.querySelector(".about .col2");

// button
let MyButton = document.querySelector(".myButton");
// services
let services = document.querySelector(".services");
// myportfolio
// start portfolio
const lis = document.querySelectorAll(".portfolio ul li"),
  images = document.querySelectorAll(".portfolio .all"),
  imgs = document.querySelectorAll(".portfolio .all img"),
  portfolio = document.getElementById("Portfolio");

lis.forEach((li) => {
  li.addEventListener("click", (element) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    element.target.classList.add("active");
    images.forEach((image) => {
      image.style.cssText = "opacity:0; width: 0;padding: 0px;";
    });

    document.querySelectorAll(element.target.dataset.type).forEach((el) => {
      el.style.cssText = "opacity:1;";
    });
  });
});

let imagesPortfolio = document.querySelectorAll(" .portfolio .all .image img");
imagesPortfolio.forEach((image) => {
  image.addEventListener("click", (e) => {
    // regular expression for link image won't show when i click on  it
    let re = /\S*link.\w+/gi;
    let bool = re.test(e.target.src);
    // make box
    // if true dont show link image in popup else show the image in popup
    if (bool) {
      return false;
    } else {
      let div = document.createElement("div");
      div.classList = "boxOver";
      // make over
      let over = document.createElement("div");
      over.classList = "overLay";
      div.appendChild(over);
      //
      let imageBox = document.createElement("div");
      imageBox.classList = "imageBox imageBoxClone";
      let image = document.createElement("img");
      image.setAttribute("src", e.target.src);
      let span = document.createElement("span");
      let spanText = document.createTextNode("X");
      // clone link image node and give it a class
      let Linkimg = document.querySelector(".link").cloneNode(true);
      let Linkimg2 = document.querySelector(".link").cloneNode(true);
      Linkimg.classList.add("cloneImageLink", "d-sm-block", "d-none");
      // for triangle in media 600 and lower than 600 to hide
      Linkimg2.classList.add("cloneImageLink2", "d-block", "d-sm-none");
      // Linkimg.classList.remove("link");
      // span.title = "close the image";
      span.appendChild(spanText);
      imageBox.appendChild(image);
      imageBox.appendChild(span);
      imageBox.appendChild(Linkimg);
      imageBox.appendChild(Linkimg2);
      div.appendChild(imageBox);
      span.addEventListener("click", (e) => {
        div.remove();
      });
      //
      document.body.prepend(div);
      document.body.style.overflow = "hidden";
      span.addEventListener("click", (e) => {
        document.body.style.overflow = "auto";
      });
    }
  });
});

// end portfolio
const fromRight = document.querySelectorAll(".fromRight"),
  fromLeft = document.querySelectorAll(".fromLeft"),
  fromTop = document.querySelectorAll(".fromTop"),
  fromBottom = document.querySelectorAll(".fromBottom");

window.onscroll = function () {
  ////////

  fromRight.forEach((item) => {
    if (
      scrollY >
      item.offsetTop + item.offsetHeight - window.innerHeight - 100
    ) {
      item.style.cssText = "    left: 0px;opacity: 1; ";
    } else {
      item.style.cssText = "    left: 195px;opacity: 0;";
    }
  });
  fromLeft.forEach((item) => {
    if (
      scrollY >
      item.offsetTop + item.offsetHeight - window.innerHeight - 100
    ) {
      item.style.cssText = "    right: 0px;opacity: 1; ";
    } else {
      item.style.cssText = "    right: 195px;opacity: 0;";
    }
  });
  fromTop.forEach((item) => {
    if (
      scrollY >
      item.offsetTop + item.offsetHeight - window.innerHeight - 100
    ) {
      item.style.cssText = "    bottom: 0px;opacity: 1;";
    } else {
      item.style.cssText = "    bottom: 195px;opacity: 0;";
    }
  });
  fromBottom.forEach((item) => {
    if (
      scrollY >
      item.offsetTop + item.offsetHeight - window.innerHeight - 100
    ) {
      item.style.cssText = "top: 0px;opacity: 1;";
    } else {
      item.style.cssText = "top: 100px;opacity: 0;";
    }
  });

  // //////
  if (window.scrollY > mainNav.offsetTop + 50) {
    mainNav.style.boxShadow = " 0 5px 7px rgb(0 0 0 / 13%)";
  } else {
    mainNav.style.boxShadow = " 0 2px 5px rgb(0 0 0 / 13%)";
  }
  if (window.scrollY >= 400) {
    MyButton.style.opacity = "1";
    MyButton.style.bottom = "30px";
  } else {
    MyButton.style.opacity = "0";
    MyButton.style.bottom = "10px";
  }
  //

  if (
    window.scrollY >=
    document.querySelector(".progresses").offsetTop +
      document.querySelector(".progresses").offsetHeight -
      window.innerHeight
  ) {
    document.querySelector(".progresses").style.opacity = "1";
    if (stat) {
      span.forEach((ele) => {
        let goal = ele.dataset.count;
        ele.innerHTML = 0;
        let count = setInterval(() => {
          ele.textContent++;
          if (ele.textContent === goal) {
            clearInterval(count);
          }
        }, 500 / goal);
      });
      stat = false;
    }
    SpansProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    stat = true;
    document.querySelector(".progresses").style.opacity = "0";
    SpansProgress.forEach(function (span) {
      span.style.width = "0%";
    });
  }

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
// show which device I am using
// popupforos
// to get user location
let reExp =
  /linux os|windows|mac os|ubuntu|Fedora|FreeBSD|MS-Windows| Ubuntu|Mac OS|Fedora|Solaris|Free BSD| Chrome OS| CentOS|Debian| Deepin|android|webos|iphone|ipad|ipod|blackberry|iemobile|operamini|windows phone/i;
let popupForOs = document.querySelector(".popupForOs");
console.log(popupForOs);
if (reExp.test(navigator.userAgent)) {
  console.log(navigator.userAgent.match(reExp)[0]);
  fetch("https://api.ipregistry.co/?key=tryout")
    .then(function (response) {
      return response.json();
    })
    .then(function (payload) {
      let country = payload.location.country.name;
      let city = payload.location.city;
      // console.log(payload.location.country.name + ", " + payload.location.city);
      // alert(`hello ${payload.location.country.name}`);
      popupForOs.innerHTML = `Hello ${
        navigator.userAgent.match(reExp)[0]
      } folks <div> Hello ${country}</div>
      `;
    })
    .catch(function (err) {
      popupForOs.innerHTML = `Hello ${
        navigator.userAgent.match(reExp)[0]
      } folks 
      `;
    });
} else {
  popupForOs.remove();
}

// popupforos
// popupForOnOffLine
let popupForOnOffLine = document.querySelector(".popupForOnOffLine");
window.addEventListener("online", function () {
  popupForOnOffLine.innerHTML =
    "<div class=on></div> you have restore your internet collection";
  popupForOnOffLine.style.cssText =
    "   animation: 3s ease forwards  popupForOnline ;";
});
window.addEventListener("offline", function () {
  popupForOnOffLine.innerHTML =
    " <div class=off ></div> ops you lost your internet collection";
  popupForOnOffLine.style.cssText =
    "  animation: 2s linear forwards  popupForOnOffLine;";
});

// popupForOnOffLine
// button
MyButton.addEventListener("click", () => {
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
let mySpin = document.querySelector(".myspiner");
document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) {
    setTimeout(typing, newTextDelay);
  }
  //
  myanimLeft.style.left = "-2000px";
  myanimRight.style.right = "-2000px";
  //
  mySpin.style.display = "none";
});
