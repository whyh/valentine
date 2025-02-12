document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.createElement("div");
    wrapper.classList.add("hearts");
    document.body.appendChild(wrapper);

    let heartTypes = [];
    heartTypes.push(...Array(20).fill("red"));
    heartTypes.push(...Array(20).fill("pink"));

    heartTypes.sort(() => Math.random() - 0.5);

    for (let heartType of heartTypes) {
        let heart = document.createElement("div");
        heart.classList.add("heart", heartType);

        heart.style.transform = `scale(${Math.random() * 0.8 + 0.5})`;
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.opacity = Math.random() * 0.8 + 0.2;
        heart.style.animationDuration = Math.random() * 10 + 5 + "s";
        wrapper.appendChild(heart);
    }
});
