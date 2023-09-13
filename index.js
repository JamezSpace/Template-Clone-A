const headerSearchButton = document.getElementById("h_search");
const leftButton = document.getElementById("buttonLeft");
const slides = document.querySelectorAll(".slide");
const currentSlide = document.querySelector(".slide");
const rightButton = document.getElementById("buttonRight");
const exitSearchPage = document.getElementById("exit");
const openCart = document.getElementById("open-cart");
const exitCart = document.getElementById("exit-cart");
const cart = document.getElementById("cart");
const searchPage = document.querySelector(".headerSearch");
const header = document.getElementsByTagName("header");
const caption = document.getElementById("caption");
const subcaption = document.getElementById("subcaption");

addEventListener("scroll", (e) => {
    if (scrollY > header[0].clientHeight) {
        header[0].classList.add("fixed_header");
    } else {
        header[0].classList.remove("fixed_header");
    }
});
// what happens when search button on the nav bar is clicked
headerSearchButton.addEventListener("click", function () {
    searchPage.style.transform = "translateY(0%)";

    exitSearchPage.addEventListener("click", function () {
        searchPage.style.transform = "translateY(-100%)";
    });
});

openCart.addEventListener("click", function () {
    cart.style.transform = "translateX(0)";
});

exitCart.addEventListener("click", function () {
    cart.style.transform = "translateX(100%)";
});

var slide_no = 1;
const words = {
    1: ["Men New-Season", "JACKETS & COATS"],
    2: ["Women Collection 2018", "NEW SEASON"],
    3: ["Men Collection 2018", "NEW ARRIVALS"]
}
const arr = {
    1: "firstSlide",
    2: "secondSlide",
    3: "thirdSlide"
}

function changeInfo(num) {
    switch (num) {
        case 1:
            caption.innerText = words[1][0];
            subcaption.innerText = words[1][1];
            break;
        case 2:
            caption.innerText = words[2][0];
            subcaption.innerText = words[2][1];
            break;
        case 3:
            caption.innerText = words[3][0];
            subcaption.innerText = words[3][1];
            break;
        default:
            break;
    }
}
currentSlide.id = "firstSlide";
leftButton.addEventListener("click", (e) => {
    slide_no -= 1;
    if (slide_no == 0) {
        slide_no = 3;
    }

    currentSlide.id = arr[slide_no];
    changeInfo(slide_no);
});

rightButton.addEventListener("click", (e) => {
    slide_no += 1;
    if (slide_no == 4) {
        slide_no = 1;
    }

    currentSlide.id = arr[slide_no];
    changeInfo(slide_no);
});
