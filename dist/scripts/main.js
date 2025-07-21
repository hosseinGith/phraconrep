"use strict";
const windowContainer = document.querySelector(".window");
const menuContainer = document.querySelector("#menuContainer");
if (windowContainer) {
    const closeMenuContainer = menuContainer === null || menuContainer === void 0 ? void 0 : menuContainer.querySelector("#closeMenuContainer");
    const menuHeaderShow = document.querySelector("#menuHeaderShow");
    const menuLis = menuContainer === null || menuContainer === void 0 ? void 0 : menuContainer.querySelectorAll("ul > li ");
    // window close && open
    windowContainer.addEventListener("click", function (e) {
        if (windowContainer === e.target)
            windowContainer.classList.remove("active");
    });
    closeMenuContainer === null || closeMenuContainer === void 0 ? void 0 : closeMenuContainer.addEventListener("click", () => {
        windowContainer.classList.remove("active");
    });
    menuHeaderShow === null || menuHeaderShow === void 0 ? void 0 : menuHeaderShow.addEventListener("click", () => {
        windowContainer.classList.add("active");
    });
    // menu nav lis
    menuLis === null || menuLis === void 0 ? void 0 : menuLis.forEach((item) => {
        item.addEventListener("click", () => {
            var _a, _b, _c;
            (_a = item.querySelector("svg")) === null || _a === void 0 ? void 0 : _a.classList.toggle("rotate-180");
            console.log(menuLis);
            menuLis.forEach((item) => {
                var _a, _b;
                (_a = item.querySelector(".menuDropDown")) === null || _a === void 0 ? void 0 : _a.classList.remove("h-0");
                (_b = item.querySelector(".menuDropDown")) === null || _b === void 0 ? void 0 : _b.classList.remove("opacity-0");
            });
            (_b = item.querySelector(".menuDropDown")) === null || _b === void 0 ? void 0 : _b.classList.toggle("h-0");
            (_c = item.querySelector(".menuDropDown")) === null || _c === void 0 ? void 0 : _c.classList.toggle("opacity-0");
        });
    });
}
