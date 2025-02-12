function applyRandomRotation(element) {
    const randomRotation = Math.floor(Math.random() * 20 - 10);
    element.style.transform = `translate(-50%, -50%) scale(0.8) rotate(${randomRotation}deg)`;
}

document.addEventListener("DOMContentLoaded", function () {
    const polaroidDaniel = document.querySelector(".polaroid.daniel");
    const polaroidYes = document.querySelector(".polaroid.yes");
    const polaroidNo = document.querySelector(".polaroid.no");
    const yesButton = document.querySelector(".button-container .button:nth-child(1)");
    const noButton = document.querySelector(".button-container .button:nth-child(2)");

    polaroidYes.classList.add("hidden");
    polaroidNo.classList.add("hidden");

    yesButton.addEventListener("click", function () {
        polaroidDaniel.classList.add("hidden");
        polaroidYes.classList.replace("hidden", "visible");
    });

    noButton.addEventListener("click", function () {
        polaroidDaniel.classList.add("hidden");
        polaroidNo.classList.replace("hidden", "visible");
    });

    polaroidNo.addEventListener("mouseleave", function () {
        polaroidNo.classList.replace("visible", "hidden");
        applyRandomRotation(polaroidDaniel);
        polaroidDaniel.classList.remove("hidden");
    });

    polaroidDaniel.addEventListener("mouseleave", function () {
        applyRandomRotation(polaroidDaniel);
    });
});
