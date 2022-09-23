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
    //  remove class active from all
    clickul.forEach((ele) => {
      ele.classList.remove("active");
    });
    // adding class active to that i clicked it
    e.target.classList.add("active");
    // close the menu after the click
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
let optionButton = document.querySelector(".option .optionButton");
myGear.addEventListener("click", function () {
  myOption.classList.toggle("active");
  myGear.classList.toggle("fa-spin");
});
// end  option
// start colors
let spans = document.querySelectorAll(".option .color span ");
let localColor = sessionStorage.getItem("color1");

if (localColor !== null) {
  // document.documentElement.style.setProperty(
  //   "--main-color",
  //   sessionStorage.getItem("color1")
  // );
  // document.documentElement.style.setProperty(
  //   "--second-color",
  //   sessionStorage.getItem("color2")
  // );
  // document.documentElement.style.setProperty(
  //   "--dark-bg",
  //   sessionStorage.getItem("color3")
  // );
  // document.documentElement.style.setProperty(
  //   "--light-bg",
  //   sessionStorage.getItem("color4")
  // );
  // document.documentElement.style.setProperty(
  //   "--text-color",
  //   sessionStorage.getItem("color5")
  // );
  // document.documentElement.style.setProperty(
  //   "--spin-color",
  //   sessionStorage.getItem("color6")
  // );
  // document.documentElement.style.setProperty(
  //   "--spinBackground-color",
  //   sessionStorage.getItem("color7")
  // );
  spans.forEach(function (span, i) {
    // span.classList.remove("active");
    if (span.dataset.color1 === localColor) {
      console.log(span, "span");
      // span.classList.add("active");
      document.addEventListener("DOMContentLoaded", function () {
        span.click();
      });

      // console.log(span.click());
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
// me image (personal image )
const personalImage = document.querySelector(".img");
// spans yes or no
const personalSpans = document.querySelectorAll(".editPersonal span");

// for handle setInterval
let count;
//  for change the images based on it
let counter = 0;
let countFun = function () {
  count = setInterval(() => {
    if (counter === 5) {
      counter = 0;
    }
    personalImage.src = `./img/me${counter}.png`;
    counter++;
  }, 5 * 1000);
};
// countFun();
// if the option in local or session storage was'n null
let optionStorage = sessionStorage.getItem("option");
let counterStorage = sessionStorage.getItem("counter");

if (optionStorage !== null) {
  // make my counter that i move the images based on it equal the value that i put it in the session or storage
  if (optionStorage == "yes") {
    // add active to yes button and remove it from no button
    personalSpans[0].classList.add("active");
    personalSpans[1].classList.remove("active");
    countFun();
  } else if (optionStorage == "no") {
    //  because the counter will storage like its value but - 1
    counter = counterStorage - 1;
    personalImage.src = `./img/me${counter}.png`;
    // add active to yes button and remove it from no button
    personalSpans[1].classList.add("active");
    personalSpans[0].classList.remove("active");
    clearInterval(count);
  }
} else {
  // if the storage was null turn on it direct
  countFun();
}
//yes or not option
personalSpans.forEach((span) => {
  span.addEventListener("click", (ele) => {
    // remove active from all span
    personalSpans.forEach((el) => {
      el.classList.remove("active");
    });
    // add active from target span that I clicked id
    ele.target.classList.add("active");
    // put in local or session storage the information about yes or no I clicked and counter that shows on which image i am
    sessionStorage.setItem("option", ele.target.dataset.option);
    // stop set interval when I click on no button
    if (ele.target.dataset.option == "no") {
      //  I put it in here because when I reload the page will show when I leave it
      sessionStorage.setItem("counter", counter);
      clearInterval(count);
    } else if (ele.target.dataset.option == "yes") {
      //clear first because if the user click twice the function will turn on twice it will be double fast or 3 if they click 3 times ....
      // so i will stop it first then i will turn it on
      clearInterval(count);
      //  turn on the function
      countFun();
    }
  });
});
optionButton.addEventListener("click", (e) => {
  personalSpans[0].click();
  spans[0].click();

  sessionStorage.clear();
});
// end option
// me image (personal image ) end

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
let h3about = document.querySelector(".box-3 h1:first-child");

// fetch projects number from my github
fetch("https://api.github.com/users/YousefMohammedAbokassem/repos")
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    res.length < 10 ? (h3about.innerHTML = `0${res.length}`) : res.length;
  });
window.addEventListener("scroll", () => {
  if (
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
  }
});
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
// scroll
window.addEventListener("scroll", () => {
  if (
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
  }
});
// scroll
lis.forEach((li) => {
  li.addEventListener("click", (element) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    element.target.classList.add("active");
    images.forEach((image) => {
      image.style.cssText = "opacity:0; width: 0;padding: 0px;";
      // this part for make it display none after finish the line in top  0.5s is the time for animation that I have put it in scss file in this section ( . portfolio > .row div )
      setTimeout(() => {
        image.style.display = "none";
      }, 0.8 * 1000);
    });

    document.querySelectorAll(element.target.dataset.type).forEach((el) => {
      // 0s here for don't do fist setTime in the top after this if the browser did this before because of the time
      setTimeout(() => {
        el.style.cssText = "opacity:1; ";
        el.style.display = "flex";
      }, 0.8 * 1000);
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
    // if true don't show link image in popup else show the image in popup
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
      // remove image after click X
      Linkimg.addEventListener("click", () => {
        span.click();
      });
      Linkimg2.addEventListener("click", () => {
        span.click();
      });
      // console.log(e.target.src);
      if (e.target.src.includes("template1")) {
        // console.log(e.target.src);
        Linkimg.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/trmplate-1-html-css/"
        );
        Linkimg2.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/trmplate-1-html-css/"
        );
      } else if (e.target.src.includes("template20")) {
        Linkimg.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/temlate-2/"
        );
        Linkimg2.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/temlate-2/"
        );
      } else if (e.target.src.includes("template30")) {
        Linkimg.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/template_3/"
        );
        Linkimg2.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/template_3/"
        );
      } else if (e.target.src.includes("template40")) {
        Linkimg.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/Template_4/"
        );
        Linkimg2.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/Template_4/"
        );
      } else if (e.target.src.includes("template50")) {
        Linkimg.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/Bootstrap_Design_1/"
        );
        Linkimg2.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/Bootstrap_Design_1/"
        );
      } else if (e.target.src.includes("template60")) {
        Linkimg.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/todo/"
        );
        Linkimg2.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/todo/"
        );
      } else if (e.target.src.includes("template70")) {
        Linkimg.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/Template-7/"
        );
        Linkimg2.setAttribute(
          "href",
          "https://yousefmohammedabokassem.github.io/Template-7/"
        );
      }

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
// scroll portfolio
window.addEventListener("scroll", () => {
  if (window.scrollY >= portfolio.offsetTop - 300) {
    let Hover = document.querySelector(".Hover");
    Hover.style.cssText = "left: 306px; width: 84px;";
    //
    let myLinks = document.querySelectorAll("#navbarSupportedContent ul li a");
    myLinks.forEach((a) => {
      a.classList.remove("links");
    });
    myLinks[3].classList.add("links");
  }
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
    // stat = true;
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
  } // // end nav scroll
};

// portfolio
// show which device I am using
// popupforos
// to get user location
let reExp =
  /linux os|windows|mac os|ubuntu|Fedora|FreeBSD|MS-Windows| Ubuntu|Mac OS|Fedora|Solaris|Free BSD| Chrome OS| CentOS|Debian| Deepin|android|webos|iphone|ipad|ipod|blackberry|iemobile|operamini|windows phone/i;
let popupForOs = document.querySelector(".popupForOs");
// console.log(popupForOs);
// it will work  below after DOMContentLoaded
function popupForOS() {
  if (reExp.test(navigator.userAgent)) {
    // console.log(navigator.userAgent.match(reExp)[0]);
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
        } folks <div class=text-capitalize> Hello ${country} people</div>
      `;
        // for don't start w ith css i put it in here for render after complete DOMContentLoaded
        popupForOs.style.cssText =
          "animation: popupForOs 5s linear forwards 2s;";
      })
      .catch(function (err) {
        popupForOs.innerHTML = `Hello ${
          navigator.userAgent.match(reExp)[0]
        } folks 
        `;
        // for don't start w ith css i put it in here for render after complete DOMContentLoaded
        popupForOs.style.cssText =
          "animation: popupForOs 5s linear forwards 2s;";
      });
  } else {
    popupForOs.remove();
  }
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
    " <div class=off ></div> oops you lost your internet connection";
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
  document.body.style.overflowY = "auto";
  popupForOS();
});
