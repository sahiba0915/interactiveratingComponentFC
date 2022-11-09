const ratings = document.querySelector(".ratings-container");
const thanks = document.querySelector(".thanks-container");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
const submitBtn = document.getElementById("submitBtn");
const thanksMessage = document.querySelectorAll(".thanks-msg");
const ratingsMessage = document.getElementById("ratings-message");
const noRatingsMessage = document.getElementById("noratings-message");

submitBtn.addEventListener("click", () => {
    thanks.classList.remove("hidden");
    ratings.style.display = "none";
})

// changing rates on button click

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
        ratingsMessage.classList.remove("hidden");
        noRatingsMessage.classList.add("hidden");
    })
    if (rating.innerHTML < 1) {
        rating.innerHTML = 0;
        noRatingsMessage.classList.remove("hidden");
    }
})