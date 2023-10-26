const $todosContainer = document.querySelector(".todos-container");
const $searchBar = document.querySelector(
  "#search-bar"
) as HTMLInputElement | null;

if (!$todosContainer) {
  throw new Error("WTF man we need that container");
}

if (!$searchBar) {
  throw new Error("WTF man we need that $searchBar");
}

export const Globals = {
  $todosContainer,
  $searchBar,
};
