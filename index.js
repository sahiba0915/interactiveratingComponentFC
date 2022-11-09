const ratings = document.querySelector(".ratings-container");
const thanks = document.querySelector(".thanks-container");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
const submitBtn = document.getElementById("submitBtn");
const thanksMessage = document.getElementById("thanks-message");

submitBtn.addEventListener("click", () => {
    thanks.classList.remove('hidden');
    ratings.style.display = "none";
})

// changing rates on button click

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
    if (rating.innerHTML < 1) {
        rating.innerHTML = 0;
        thanksMessage.innerHTML = "You did'nt gave us any ratings."
    }
})