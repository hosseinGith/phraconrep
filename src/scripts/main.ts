const windowContainer = document.querySelector('.window')
if (windowContainer) {
    windowContainer.addEventListener('click', function (e) {
        if (windowContainer === e.target) windowContainer.classList.remove("active");
    })
}