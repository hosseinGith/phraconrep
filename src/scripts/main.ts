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

  const menuLis = menuContainer?.querySelectorAll("ul > li ");

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
    item.addEventListener("click", () => {
      item.querySelector("svg")?.classList.toggle("rotate-180");
      console.log(menuLis);

      menuLis.forEach((item) => {
        item.querySelector(".menuDropDown")?.classList.remove("h-0");
        item.querySelector(".menuDropDown")?.classList.remove("opacity-0");
      });
      item.querySelector(".menuDropDown")?.classList.toggle("h-0");
      item.querySelector(".menuDropDown")?.classList.toggle("opacity-0");
    });
  });
}
