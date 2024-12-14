const keyboardsData = {
    Ajazz: [
        { name: "Ajazz AK33", cost: "", image: "/image/keyboards/ajazz/ajazz-ak650.jpg" },
        { name: "Ajazz AK33", cost: "", image: "/image/keyboards/ajazz/ajazz-ak870.jpg" },
        { name: "Ajazz AK33", cost: "", image: "/image/keyboards/ajazz/ajazz-ak980.jpg" }
    ],
    AULA: [
        { name: "AULA F68", cost: "52.000 KZT", image: "/image/keyboards/aula/aula-f68.jpg" },
        { name: "AULA F75", cost: "35.000 KZT", image: "/image/keyboards/aula/aula-f75.jpg" },
        { name: "AULA F81", cost: "40.000 KZT", image: "/image/keyboards/aula/aula-f81.jpg" },
        { name: "AULA F99", cost: "55.000 KZT", image: "/image/keyboards/aula/aula-f99.jpg" }
    ],
    VGN: [
        { name: "VGN S105", cost: "", image: "/image/keyboards/vgn/vgn-v87.jpg" }
    ],
    Logitech: [
        { name: "Logitech G915", cost: "", image: "/image/keyboards/logitech/mx-keys.jpg" }
    ],
    HyperX: [
        { name: "HyperX Alloy FPS", cost: "", image: "/image/keyboards/hyperx/orign60.jpg" },
        { name: "HyperX Alloy Origins", cost: "", image: "/image/keyboards/hyperx/rise-75.jpg" }
    ],
    Akko: [
        { name: "Akko 3068B", cost: "", image: "/image/keyboards/akko/Cinnamoroll.jpg" },
        { name: "Akko 5108", cost: "", image: "/image/keyboards/akko/MU01.jpg" },
        { name: "Akko 5108", cost: "", image: "/image/keyboards/akko/HE-Dragon.jpg" }
    ],
};

const brandFilter = document.getElementById("brandFilter");
const keyboardList = document.getElementById("keyboardList");

function displayKeyboards(brand) {
    keyboardList.innerHTML = "";

    if (brand && keyboardsData[brand]) {
        keyboardsData[brand].forEach(keyboard => {
            const card = document.createElement("div");
            card.classList.add("keyboard-card");

            card.innerHTML = `
                <img src="${keyboard.image}" alt="${keyboard.name}">
                <p>${keyboard.name}</p>
                <p class="keyboard-cost">Цена: ${keyboard.cost}</p>
                <button class="buy-button" onclick="buyKeyboard('${keyboard.name}')">Купить</button>
            `;
            keyboardList.appendChild(card);
        });
    }
}

function buyKeyboard(keyboardName) {
    alert(`Вы выбрали: ${keyboardName}. Переход на страницу покупки...`);
// ) (сам ебанешь пейдж)
}

brandFilter.addEventListener("change", (event) => {
    displayKeyboards(event.target.value);
});
