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

        let scale = Math.random() * 0.8 + 0.5;
        let leftPos = Math.random() * 100 + "vw";
        let animationDuration = Math.random() * 10 + 5 + "s";

        heart.style.transform = `scale(${scale})`;
        heart.style.left = leftPos;
        heart.style.opacity = Math.random() * 0.8 + 0.2;
        heart.style.animationDuration = animationDuration;

        heart.dataset.scale = scale;
        heart.dataset.color = heartType === "red" ? "#CC2022" : "#FF69B4";
        heart.dataset.left = leftPos;
        heart.dataset.animationDuration = animationDuration;

        heart.addEventListener("click", function (e) {
            popHeart(heart);
        });

        wrapper.appendChild(heart);
    }

    function popHeart(heart) {
        let rect = heart.getBoundingClientRect();
        let x = rect.left + rect.width / 2;
        let y = rect.top + rect.height / 2;

        let scale = heart.dataset.scale;
        let color = heart.dataset.color;

        heart.classList.add("hidden");

        pop(x, y, 10, scale, color);
    }
});

function pop(start_x, start_y, particle_count, scale, color) {
    let particles = [];
    let angle = 0;
    let size = 28 * scale;

    for (let i = 0; i < particle_count; i++) {
        let rad = (angle * Math.PI) / 180;
        let x = Math.cos(rad) * (50 + Math.random() * 20) * scale;
        let y = Math.sin(rad) * (50 + Math.random() * 20) * scale;

        let debris = document.createElement("div");
        debris.classList.add("debris");
        debris.style.backgroundColor = color;
        debris.style.width = `${size}px`;
        debris.style.height = `${size}px`;
        debris.style.left = `${start_x}px`;
        debris.style.top = `${start_y}px`;
        debris.style.position = "absolute";
        debris.style.borderRadius = "50%";
        document.body.appendChild(debris);

        particles.push({ element: debris, targetX: start_x + x, targetY: start_y + y });
        angle += 360 / particle_count;
    }

    particles.forEach((p) => {
        setTimeout(() => {
            p.element.style.transition = "all 0.6s ease-out";
            p.element.style.left = `${p.targetX}px`;
            p.element.style.top = `${p.targetY}px`;
            p.element.style.width = "4px";
            p.element.style.height = "4px";
            p.element.style.opacity = "0";

            setTimeout(() => p.element.remove(), 600);
        }, 10);
    });
}