const engineer = "ENGINEER";
const name = "ABDELRHMAN";

const logoEngineer = document.getElementById("logoEngineer");
const logoName = document.getElementById("logoName");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(element, text, speed) {
    element.textContent = "";

    for (let i = 1; i <= text.length; i++) {
        element.textContent = text.substring(0, i);
        await sleep(speed);
    }
}

async function deleteText(element, speed) {
    while (element.textContent.length > 0) {
        element.textContent = element.textContent.slice(0, -1);
        await sleep(speed);
    }
}

async function logoAnimation() {

    while (true) {

        // كتابة ENGINEER
        await typeText(logoEngineer, engineer, 120);

        // كتابة ABDELRHMAN
        await typeText(logoName, name, 120);

        // انتظار
        await sleep(1500);

        // حذف ABDELRHMAN
        await deleteText(logoName, 100);

        // حذف ENGINEER
        await deleteText(logoEngineer, 100);

        // انتظار قبل الكتابة من جديد
        await sleep(500);
    }
}

logoAnimation();


window.scrollTo({
    top: 0,
    behavior: "smooth"
});