const getIceCreams = async () => {
    const url = "https://portiaportia.github.io/json/ice-creams.json";
    try{
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

const showIceCreams = async () => {
    const iceCreams = await getIceCreams();
    if (iceCreams && Array.isArray(iceCreams)) {
        iceCreams.forEach((iceCream) => {
            document.getElementById("icecream-section")
                    .append(getIceCreamSection(iceCream));
        });
    } else {
        console.log(error);
    }
};

const getIceCreamSection = (iceCream) => {
    const section = document.createElement("section");
    section.classList.add("ice-cream-section");

    const img = document.createElement("img");
    img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
    img.alt = `${iceCream.name} image`;
    section.appendChild(img);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.textContent = iceCream.name; 
    section.appendChild(overlay);

    return section;
};

showIceCreams();
