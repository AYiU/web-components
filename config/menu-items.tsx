export const uiList = [
  "button",
  "card",
  "input",
  "layout",
  "loading-animation",
  "optional-link",
  "pagination",
];

export const menuItems = [
  { title: "Home", url: "/" },
  {
    title: "UI",
    url: "/ui",
    children: uiList.map((item) => ({
      title: item.charAt(0).toUpperCase() + item.replace(/-/g, " ").slice(1),
      url: `/ui/${item}`,
    })),
  },
];
