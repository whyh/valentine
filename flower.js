document.addEventListener("DOMContentLoaded", function() {
    function createElements(className, count) {
        let container = document.createElement("div");
        container.classList.add(className);

        for (let i = 0; i < count; i++) {
            let div = document.createElement("div");
            container.appendChild(div);
        }
        return container;
    }

    let flowerContainer = document.createElement("div");
    flowerContainer.classList.add("flower", "container");

    let glass = document.createElement("div");
    glass.classList.add("glass");
    flowerContainer.appendChild(glass);

    flowerContainer.appendChild(createElements("thorns", 4));
    flowerContainer.appendChild(createElements("leaves", 4));
    flowerContainer.appendChild(createElements("petals", 7));
    flowerContainer.appendChild(createElements("deadPetals", 4));

    document.body.appendChild(flowerContainer);
});