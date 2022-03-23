let questions = document.querySelectorAll(".question div:first-child");
let featureLink = document.querySelectorAll(".features-nav a:first-child");
let featuresNav = document.querySelector(".features-nav");
let selectedLink;
let firstArticle = document.querySelector(".one-click article:first-of-type");
let secondArticle = document.querySelector(".one-click article:nth-of-type(2)");
let thirdArticle = document.querySelector(".one-click article:last-of-type");
let headerNav = document.querySelector("header nav");
let form = document.forms[0];

questions.forEach(question => {
    
    question.addEventListener("click", () => {
        question.nextElementSibling.classList.toggle("hide");

        if(!question.nextElementSibling.classList.contains("hide")) {
            question.children[1].style.transform = "rotateZ(180deg)";
            question.children[1].style.filter = "invert(48%) sepia(34%) saturate(1111%) hue-rotate(314deg) brightness(99%) contrast(98%)";
        } else {
            question.children[1].style.transform = "";
            question.children[1].style.filter = "";
        }
    });

});

featuresNav.addEventListener("click", (event) => {

    event.preventDefault();

    let target = event.target;

    if(target.text === "Speedy Searching") {
        highlight(target);
        firstArticle.dataset.isActive = false;
        secondArticle.dataset.isActive = true;
        thirdArticle.dataset.isActive = false;
    } else if(target.text === "Easy Sharing") {
        highlight(target);
        firstArticle.dataset.isActive = false;
        secondArticle.dataset.isActive = false;
        thirdArticle.dataset.isActive = true;
    } else if(target.text === "Simple Bookmarking") {
        highlight(target);
        firstArticle.dataset.isActive = true;
        secondArticle.dataset.isActive = false;
        thirdArticle.dataset.isActive = false;
    }

});

function highlight(td) {
    featureLink[0].classList.remove("active");
    
    if(selectedLink) {
        selectedLink.classList.remove("active");
    } 
    
    selectedLink = td;
    selectedLink.classList.add("active");
}

let errorIcon = document.createElement("img");
errorIcon.src = "/images/icon-error.svg";
errorIcon.classList.add("error-icon");

let errorMessage = document.createElement("em");

let input = form.querySelector("input[type='text']");

input.addEventListener("keyup", (event) => {

    input.innerText = event.target.value;

});

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let label = form.querySelector("label");

    let a = input.innerHTML.includes("@") && (input.innerHTML.endsWith(".com"));

    if(input.innerHTML === "" || a === false) {
        label.dataset.warning = "Whoops, make sure it's an email";
        errorMessage.innerText = label.dataset.warning;
        label.append(errorMessage);
        input.classList.add("error");
        label.append(errorIcon);
    } else {
        label.dataset.warning = "";
        errorMessage.innerText = label.dataset.warning;
        label.removeChild(errorIcon);
        label.removeChild(errorMessage);
        input.classList.remove("error");
        form.reset();
    }

});

let hamburgerIcon = document.querySelector(".hamburger");

let modalContainer = document.createElement("div");
modalContainer.classList.add("modal");
modalContainer.classList.add("inactive");

modalContainer.innerHTML = 
`
    <div>
        <img src="/images/logo-bookmark.svg" /> 
        <img id="close-modal-icon" src="/images/icon-close.svg" />
        <ul>
            <li><a href="#">FEATURES</a></li>
            <li><a href="#">PRICING</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">LOGIN</a></li>
        </ul>
    </div>
    <div class="social-icons">
        <a href="#">
            <img src="/images/icon-facebook.svg" />
        </a>
        <a href="#">
            <img src="/images/icon-twitter.svg" />
        </a>
    </div>
`;

document.body.append(modalContainer);

hamburgerIcon.addEventListener("click", () => {

    modalContainer.classList.remove("inactive");

});

let closeModalIcon = document.querySelector("#close-modal-icon");

closeModalIcon.addEventListener("click", () => {

    modalContainer.classList.add("inactive");

});
