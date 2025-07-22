const windowContainer = document.querySelector(".window") as HTMLElement | null;
const menuContainer = document.querySelector(
  "#menuContainer"
) as HTMLElement | null;
if (windowContainer) {
  const closeMenuContainer = menuContainer?.querySelector(
    "#closeMenuContainer"
  ) as HTMLElement | null;

  const menuHeaderShow = document.querySelector(
    "#menuHeaderShow"
  ) as HTMLElement | null;

  const menuLis = menuContainer?.querySelectorAll("ul > .menuLiItems ");

  // window close && open
  windowContainer.addEventListener("click", function (e) {
    if (windowContainer === e.target)
      windowContainer.classList.remove("active");
  });
  closeMenuContainer?.addEventListener("click", () => {
    windowContainer.classList.remove("active");
  });
  menuHeaderShow?.addEventListener("click", () => {
    windowContainer.classList.add("active");
  });

  // menu nav lis
  menuLis?.forEach((item) => {
    item.addEventListener("click", (e) => {
      menuLis.forEach((it) => {
        if (it === item) return;
        it.querySelector(".menuDropDown")?.classList.add("h-0");
        it.querySelector(".menuDropDown")?.classList.add("opacity-0");
        it.querySelector("svg")?.classList.remove("rotate-180");
      });

      item.querySelector(".menuDropDown")?.classList.toggle("h-0");
      item.querySelector(".menuDropDown")?.classList.toggle("opacity-0");
      item.querySelector("svg")?.classList.toggle("rotate-180");
    });
  });
}
