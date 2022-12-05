// Newsletter PopUp
const overlay = document.querySelector(".overlay");
const mainDiv = document.querySelector(".newsletter .container");
const closeBtn = document.querySelector(".newsletter .close_btn");

window.onload = () => {
    setTimeout(() => {
        overlay.classList.add("active");
        mainDiv.classList.add("show");
        if (mainDiv.classList.contains("show")) {
            overlay.onclick = () => {
                mainDiv.classList.remove("show");
                overlay.classList.remove("active");
            };
        }
    }, 2000);
};
closeBtn.onclick = () => {
    mainDiv.classList.remove("show");
    overlay.classList.remove("active");
};
// Aside PopUp
const sale = document.querySelector(".sale");
const close = document.querySelector(".sale .close");

close.onclick = () => {
    sale.style.display = "none";
};

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 15,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// Aside Navigation
const lis = document.querySelectorAll(".aside_1 .main li .title");
const ul = document.querySelectorAll(".aside_1 .main li ul");

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function () {
        const clickBtn = this.nextElementSibling.classList.contains("active");
        for (let i = 0; i < ul.length; i++) {
            if (clickBtn) break;
            if (ul[i].classList.contains("active")) {
                ul[i].classList.remove("active");
                lis[i].classList.remove("active");
            }
        }
        this.nextElementSibling.classList.toggle("active");
        this.classList.toggle("active");
    });
}

// Category
let catButton = document.querySelector("header .nav_icons .ic");
let catNav = document.querySelector(".main_pro .aside_1");
let closeBtn2 = document.querySelector(".main_pro .aside_1 .close-btn-2");

catButton.onclick = () => {
    overlay.classList.add("active");
    catNav.classList.add("active");
};
closeBtn2.onclick = () => {
    catNav.classList.remove("active");
    overlay.classList.remove("active");
};
overlay.onclick = () => {
    catNav.classList.remove("active");
    overlay.classList.remove("active");
};
// NavBar in Mudium And Small Devices
const headerLis = document.querySelectorAll("header .third ul li a.more");
const headerUl = document.querySelectorAll("header .third ul li .mini-nav");

for (let i = 0; i < headerLis.length; i++) {
    headerLis[i].addEventListener("click", function () {
        headerLis[i].removeAttribute("href");
        const clickBtn = this.nextElementSibling.classList.contains("active");
        for (let i = 0; i < headerUl.length; i++) {
            if (clickBtn) break;
            if (headerUl[i].classList.contains("active")) {
                headerUl[i].classList.remove("active");
                headerLis[i].classList.remove("active");
            }
        }
        this.nextElementSibling.classList.toggle("active");
        this.classList.toggle("active");
    });
}

// Menu
let menuBtn = document.querySelector("header .nav_icons .toggle");
let menuNav = document.querySelector("header .third");
let closeBtn1 = document.querySelector("header .third .close-btn-1");

menuBtn.onclick = () => {
    overlay.classList.add("active");
    menuNav.classList.add("active");
};
closeBtn1.onclick = () => {
    menuNav.classList.remove("active");
    overlay.classList.remove("active");
};

// Overlay 
overlay.onclick = () => {
    catNav.classList.remove("active");
    menuNav.classList.remove("active");
    overlay.classList.remove("active");
};
// Aside Language And Currency
const main = document.querySelectorAll("header .third .lancur li");
const options = document.querySelectorAll("header .third .lancur .lan-nav");

for (let i = 0; i < main.length; i++) {
    main[i].addEventListener("click", function () {
        const clickBtn = this.nextElementSibling.classList.contains("active");
        for (let i = 0; i < options.length; i++) {
            if (clickBtn) break;
            if (options[i].classList.contains("active")) {
                options[i].classList.remove("active");
                main[i].classList.remove("active");
            }
        }
        this.nextElementSibling.classList.toggle("active");
        this.classList.toggle("active");
    });
}

// Deals CountDown
let day1 = document.querySelector(".deals .box .date_1 .day"),
    hour1 = document.querySelector(".deals .box .date_1 .hour"),
    minute1 = document.querySelector(".deals .box .date_1 .min"),
    second1 = document.querySelector(".deals .box .date_1 .sec"),
    day2 = document.querySelector(".deals .box .date_2 .day"),
    hour2 = document.querySelector(".deals .box .date_2 .hour"),
    minute2 = document.querySelector(".deals .box .date_2 .min"),
    second2 = document.querySelector(".deals .box .date_2 .sec");

let wantedDate = new Date("Jul 15, 2023 14:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = wantedDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    // First Product
    day1.innerHTML = days < 10 ? `0${days}` : days;
    hour1.innerHTML = hours < 10 ? `0${hours}` : hours;
    minute1.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    second1.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    // Second Product
    day2.innerHTML = days < 10 ? `0${days}` : days;
    hour2.innerHTML = hours < 10 ? `0${hours}` : hours;
    minute2.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    second2.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000)







