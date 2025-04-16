function showMessage() {
    let name = "James";
    let age = 21;
    alert("HEY " + name + ", your age is " + age);
}

function checkAge() {
    let age = 19;
    if (age >= 18) {
        alert("Hey you can enter the party. You are old enough!");
    } else {
        alert("Hey, you're too young.");
    }
}

function showMany() {
    for (let i = 1; i <= 10; i++) {
        alert("Don't close me! You clicked me " + i + " times");
    }
}

function changeColor() {
    const main = document.querySelector(".main-content");
    main.style.color = "white";
    main.style.backgroundColor = "black";
}

function changeToCat()
{
    document.getElementById("catdog").src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0zeAjuvBegxSKU-hsUbKVoIdDM7DxLIc0zts1krMZ8lzpfIerboxY5FcCt18skcbFQCpkDgkrRALAzFyX8L3b4B_SrMPDTyJZb1z_Dws"
}
function changeToDog()
{
    document.getElementById("catdog").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw"
}

// For Loop Message
function showLoop() {
    const container = document.getElementById("container");
    for (let i = 1; i <= 5; i++) {
        let msg = document.createElement("p");
        msg.textContent = "Loop message " + i;
        container.appendChild(msg);
    }
}

// Change theme
function changeTheme() {
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.color = "#f0f0f0";

    // đổi header và footer nếu muốn
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (header) header.style.backgroundColor = "#333";
    if (footer) footer.style.backgroundColor = "#333";

    // đổi màu các nút
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.style.backgroundColor = "#444";
        btn.style.color = "#f0f0f0";
    });
}

// Counter + If-Else Color
document.addEventListener("DOMContentLoaded", function () {
    let count = 0;

    const counterBtn = document.getElementById("buttonCounter");
    const counterText = document.getElementById("counter");

    if (counterBtn && counterText) {
        counterBtn.onclick = function () {
            count++;
            counterText.textContent = "Count: " + count;
        };
    }

    const hoverBtn = document.getElementById("hoverButton");
    if (hoverBtn) {
        hoverBtn.onmouseover = function () {
            this.style.backgroundColor = "orange";
        };
        hoverBtn.onmouseleave = function () {
            this.style.backgroundColor = "brown";
        };
    }
});

// Alert Button
document.getElementById("alertMe").onclick = function () {
    alert("Hello World!");
};

// Hover Button
document.getElementById("hoverButton").onmouseover = function () {
    this.style.backgroundColor = "orange";
};
document.getElementById("hoverButton").onmouseleave = function () {
    this.style.backgroundColor = "brown";
};

    