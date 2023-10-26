import { Todo } from "./types";

export const makeTodoCard = (todo: Todo) => {
  const $card = document.createElement("div");
  $card.classList.add("todo-card");
  $card.id = `todo-card-${todo.id}`;
  $card.innerHTML = `
           <h3>${todo.name}</h3>
           <p>${todo.description}</p>
     `;
  return $card;
};

export const redrawTodos = (todos: Todo[], container: Element) => {
  container.innerHTML = "";
  const $cards = todos.map((todo) => makeTodoCard(todo));
  container.append(...$cards);
};
