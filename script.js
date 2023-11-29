const presents = [
    { name: "Camisa de Linho", image: "img/Imagem do WhatsApp de 2023-11-28 à(s) 19.24.21_9807fe6b.jpg" },
    { name: "Camisa de Linho", image: "img/Imagem do WhatsApp de 2023-11-28 à(s) 19.24.21_a9d150f8.jpg" },
    { name: "Mouse s/ fio Recarregável", image: "img/Imagem do WhatsApp de 2023-11-28 à(s) 19.24.21_aacc037a.jpg" },
    { name: "Short de Linho", image: "img/Imagem do WhatsApp de 2023-11-28 à(s) 19.24.21_e7cfca30.jpg" },
    { name: "Short de Academia com Forro", image: "img/Imagem do WhatsApp de 2023-11-28 à(s) 19.24.22_3751f81a.jpg" },
    { name: "Blusa Longline Slim ", image: "img/Imagem do WhatsApp de 2023-11-28 à(s) 19.24.22_6572bf6f.jpg" },
    { name: "Blusa Dryfit", image: "img/Imagem do WhatsApp de 2023-11-28 à(s) 19.24.22_41052142.jpg" },
    { name: "Blusa Dryfit", image: "img/Imagem do WhatsApp de 2023-11-28 à(s) 19.24.22_aad1f59c.jpg" },
    { name: "Blusa Dryfit", image: "img/Imagem do WhatsApp de 2023-11-28 à(s) 19.24.23_a98c4979.jpg" },
    { name: "Blusa Dryfit", image: "img/Imagem do WhatsApp de 2023-11-28 à(s) 19.24.23_be7abc05.jpg" },
    { name: "Blusa Dryfit", image: "img/Imagem do WhatsApp de 2023-11-28 à(s) 19.24.23_ca51a429.jpg" },
    { name: "Blusa Dryfit", image: "img/Imagem do WhatsApp de 2023-11-28 à(s) 19.24.23_e0ae1517.jpg" },
    { name: "Blusa Dryfit", image: "img/Imagem do WhatsApp de 2023-11-29 à(s) 19.35.02_d1bf6708.jpg" },
    { name: "Blusa Dryfit", image: "img/Imagem do WhatsApp de 2023-11-29 à(s) 19.35.02_9743bc9d.jpg" },
];

function displayPresents() {
    const presentList = document.getElementById("present-list");

    presents.forEach((present, index) => {
        const presentItem = document.createElement("div");
        presentItem.classList.add("present");

        const img = document.createElement("img");
        img.src = present.image;
        img.alt = present.name;

        presentItem.appendChild(img);

        presentItem.addEventListener("click", () => selectPresent(presentItem, index));
        presentList.appendChild(presentItem);
    });
}

const selectedPresents = new Set();

function selectPresent(selectedItem, index) {
    const present = presents[index];

    if (selectedPresents.has(index)) {
        selectedPresents.delete(index);
        selectedItem.classList.remove("selected");
    } else {
        selectedPresents.add(index);
        selectedItem.classList.add("selected");
    }
}

function registerSelectedPresents() {
    const selectedIndexes = Array.from(selectedPresents);
    const selectedGifts = selectedIndexes.map(index => presents[index].name);
    console.log("Presentes selecionados:", selectedGifts);
}

window.onload = () => {
    displayPresents();
    document.getElementById("register-button").addEventListener("click", registerSelectedPresents);
};