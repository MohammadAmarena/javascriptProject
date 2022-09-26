// First slider from Alzero Web School
// Start Slider

// git Array von images
const sliderImages = Array.from(document.querySelectorAll(".landing .container img"));

let slidesCount = sliderImages.length;

let currentSlide = 1;

let slideNumberElement = document.getElementById("slide-number");

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let paginationElement = document.createElement("ul");

paginationElement.setAttribute("id", "pagination-ul");

for (var i = 1; i <= slidesCount; i++) {

    var paginationItem = document.createElement('li');

    paginationItem.setAttribute('data-index', i);

    paginationItem.appendChild(document.createTextNode(i));

    paginationElement.appendChild(paginationItem);

}

document.getElementById('indicators').appendChild(paginationElement);

var paginationCreatedUl = document.getElementById('pagination-ul');

var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (var i = 0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();

    }

}

theChecker();

function nextSlide() {

    if (nextButton.classList.contains('disabled')) {

        return false;

    } else {

        currentSlide++;

        theChecker();

    }

}

function prevSlide() {

    if (prevButton.classList.contains('disabled')) {

        return false;

    } else {

        currentSlide--;

        theChecker();

    }

}

function theChecker() {

    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    removeAllActive();

    sliderImages[currentSlide - 1].classList.add('active');

    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    if (currentSlide == 1) {

        prevButton.classList.add('disabled');

    } else {

        prevButton.classList.remove('disabled');

    }

    if (currentSlide == slidesCount) {

        nextButton.classList.add('disabled');

    } else {

        nextButton.classList.remove('disabled');

    }

}

function removeAllActive() {

    sliderImages.forEach(function (img) {

        img.classList.remove('active');

    });

    paginationsBullets.forEach(function (bullet) {

        bullet.classList.remove('active');

    });

}
// End OF Slider

// Random Body BackgroundColor
let colors = ["#00bcd4", "#cddc39", "#ff9800", "#f44336", "#009688", "#ff5722"];
let colorGroub = [];

for (let i = 0; i <= colors.length; i++) {
    colorGroub.push(colors[Math.trunc(Math.random() * colors.length)][i])
};

let random = document.querySelector(".randomColor");
random.innerHTML = `${colorGroub.join("")}`;
document.body.style.background = random.innerHTML;

// Start Products

// fetch data from https://fakeapi.platzi.com/doc/products

fetch("https://api.escuelajs.co/api/v1/products/").then((ele) => {

    return ele.json();

}).then((ele) => {

    ele.length = 8;
    let data = "";
    let arr = [];

    let counter = 0;
    // card inner html
    ele.map((ele) => {
        arr.push(ele.category.name)
        data += `<div class="card col-3">
        <h4 class="title">${ele.title}</h4>
        <img src=${ele.category.image} alt="">
        <p>${ele.description}</p>
        <p class="category">${arr[counter++]}</p>
        <p class="price">${ele.price} €</p>
        <button id="btn" class="btn">add to Basket</button>
        </div>`
    })
    document.getElementById("cards").innerHTML = data;
    
    // POPUP
    let popUp = document.querySelector(".pop-up");
    let popBtn = document.querySelectorAll("#cards .btn");

    // pop-up display

    popBtn.forEach((ele) => {
        console.log(ele)
    
        ele.onclick = function () {
            popUp.style.cssText = "opacity: 1; z-index: 1"
        }

        // pop-up Hidden (go shop)
        document.getElementById("shop").onclick = () => {
            popUp.style.cssText = "opacity: 0, z-index: -11"
        }

        // pop-up Hidden (buy now)
        document.getElementById("buy").onclick = function () {
            document.body.style.opacity = 0;
        }

        popUp.style.opacity == 0 ? popUp.style.zIndex = -1 : popUp.style.zIndex = 1;

        if (ele.clicked == true) {
            popUp.style.cssText = "zIndex: -1"
        }
    })

    // random Color ForEach Card
    /* let card = document.querySelectorAll(".products #cards .card");
    card.forEach((ele) => {
        ele.style.backgroundColor = random.innerHTML;
    }) */

    // search for category
    let categories = [];

    let searchForm = document.getElementById("search-form");

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault()
        function check() {
            let search = document.getElementById("search");
            let searchValue = search.value.trim();
            arr.filter((ele) => {
                if (ele === searchValue) {

                    categories.push(ele);
                    search.value = "";
                    // document.getElementById("cards").innerHTML = sort;

                }
            })
        }
        check();
    });

    console.log(arr)
    console.log(categories)
})
// End Products


// Change Chat Icon & Social Icons Location
function changeLocation(icon, page) {
    icon.onclick = () => {
        window.location.href = page
    }
}
let chatIcon = document.getElementById("chat")
changeLocation(chatIcon, "contact.html")

let arrowDown = document.querySelector(".arrows");
let arrowDownIcon = document.querySelector(".arrowIcon")

window.addEventListener("scroll", () => {
    if (window.scrollY > 2000) {
        chatIcon.style.display = "none"
        arrowDown.style.cssText = "display: block; color: white"
        arrowDownIcon.classList = ("fa-solid fa-angles-up fa-2x")
    } else {
        chatIcon.style.display = "block"
        arrowDownIcon.classList = ("fa-solid fa-angles-down fa-2x")
    }
});

arrowDown.addEventListener("click", () => {
    if (arrowDown) {
        window.scrollTo(0, 837)
        arrowDown.style.display = "none"
    } else {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
});

let socialIcons = document.querySelector(".contact-icons")
changeLocation(socialIcons, "contact.html")

// Fetch Another Products API For Categories
fetch('https://api.escuelajs.co/api/v1/categories')
.then(response => response.json())
.then(json => {
    json.length = 5;
    let data = ""
    // card inner html
    json.map((ele) => {
        data += `<div class="card col-3">
        <h4 class="title">${ele.name}</h4>
        <img src=${ele.image} alt="">
        </div>`
    })
    document.getElementById("cards2").innerHTML = data;

    // Categories Section Animation
    let card = document.querySelectorAll(".categories #cards2 .card")
    let translateX = "transform: translateX(0)"
    let translateX0 = "transform: translateX(0); animation: CarsdScale 0.5s 1 linear; transition: 1s"
    let translateXmin = "transform: translateX(-100vw); transition: 1s"
    let translateXmax = "transform: translateX(100vw); transition: 1s"
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 2000) {
            card[0].style.cssText = translateX
            card[1].style.cssText = "transform: translateY(0); animation: CarsdScale 0.5s 1 linear; transition: 1s"
            card[2].style.cssText = translateX
        } else {
            card[0].style.cssText = translateXmin
            card[1].style.cssText = "transform: translateY(-100vh); transition: 1s"
            card[2].style.cssText = translateXmax
        }
        if (window.scrollY > 2300) {
            card[3].style.cssText = translateX0
            card[4].style.cssText = translateX0
        } else {
            card[3].style.cssText = translateXmin
            card[4].style.cssText = translateXmax
        }
    })
});

//login section
let log = document.getElementById("login");
let logForm = document.querySelector(".loginForm");
let logBtn = document.querySelector(".loginForm button");

log.onclick = () => {
    logForm.style.cssText = "opacity: 1; z-index: 13";
}

logBtn.onclick = () => {
        logForm.style.cssText = "opacity: 0; z-index: -15";
}