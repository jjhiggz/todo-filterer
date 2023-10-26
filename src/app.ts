import { allTodos } from "./all-todos";
import { Globals } from "./globals";
import { redrawTodos } from "./utils";

const { $searchBar, $todosContainer } = Globals;

document.addEventListener("DOMContentLoaded", () => {
  redrawTodos(allTodos, $todosContainer);
});

$searchBar.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
  const searchInputValue = target.value;

  const filteredTodos = allTodos.filter((todo) => {
    if (todo.id.toString() === searchInputValue) return true;
    if (todo.description.toLowerCase().includes(searchInputValue.toLowerCase()))
      return true;
    if (todo.name.toLowerCase().includes(searchInputValue.toLowerCase()))
      return true;
  });

  redrawTodos(filteredTodos, $todosContainer);
});
