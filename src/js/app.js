// local reviews data
const reviews = [
    {
        id: 1,
        name: "ALEXIS SIMPSON",
        position: "CEO & Developer",
        text:
            " Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis. ",
    },
    {
        id: 2,
        name: "STIVEN COLE",
        position: "User Interface Designer",
        text:
            " Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis. array1",
    },
    {
        id: 3,
        name: "FRANK PIENER",
        position: "Sales Manager",
        text:
            " Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis. array2",
    },
    {
        id: 4,
        name: "ASHLEY LENNON",
        position: "IT Specialist",
        text:
            " Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis. array3",
    },
];

//select items
const quotesName = document.getElementById("quotes-name")
const position = document.getElementById("position")
const quotesText = document.getElementById("quotes-text")

const leftBtn = document.getElementById("left-arrow")
const rightBtn = document.getElementById("right-arrow")

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    quotesName.textContent = item.name;
    position.textContent = item.position;
    quotesText.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    quotesName.textContent = item.name;
    position.textContent = item.position;
    quotesText.textContent = item.text;
}

// show next person
rightBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});


// show prev person
leftBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// **************** Form submit **********************

const myForm= document.getElementById("myForm");
myForm.addEventListener("submit",(e)=>{
    //prevent submit to diffrent page
    e.preventDefault();
    const request = new XMLHttpRequest();
    request.open("post","phpfiles/form.php");
    request.onload = function(){
        request.responseText 
        console.log("🚀🌈 ~ file: index.html myForm.addEventListener ~ request.responseText ", request.responseText )
    }
    request.send(new FormData(myForm));
});

// **************** carousel **********************
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const track = document.querySelector('.track');

let carouselCardWidth = document.querySelector('.card-container').offsetWidth;
let carouselWidth = document.querySelector('.carousel-container').offsetWidth;


window.addEventListener('resize', () => {
    carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
    index++;
    console.log(index, "index*carosWi");

    console.log(track.offsetWidth, "track.offsetWidth");
    console.log((index * carouselCardWidth), "index*carosWi");
    console.log(track.offsetWidth, "track.offsetWidth -", ((index) * carouselCardWidth), "(index) * carouselCardWidth <", carouselWidth, "carouselWidth");


    track.style.transform = `translateX(-${index * carouselCardWidth}px)`;
    prev.disabled = false;
    if (track.offsetWidth - ((index) * carouselCardWidth) <= carouselWidth) {

        next.disabled = true;
        console.log("hit ");

    }
})
prev.addEventListener('click', () => {
    index--;
    next.disabled = false;
    if (index === 0) {
        prev.disabled = true;
    }

    track.style.transform = `translateX(-${index * carouselCardWidth}px)`;
})


