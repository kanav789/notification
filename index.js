let btn = document.getElementById("btn");
let container = document.getElementById("container");


btn.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = "Hello meri jaan!";

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 2000);
}