let data = undefined;

// Fonction pour nettoyer toutes les tâches visibles
function clearTodoList() {
    document.body.innerHTML = "";
}

// Fonction pour afficher un message d'erreur
function displayErrorMessage(message) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";
  errorDiv.textContent = message;
  document.body.appendChild(errorDiv);
}

// Fonction asynchrone pour charger les todos
async function loadTodos() {
  try {
    // volontairement fausse URL ici
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      throw new Error("La réponse du serveur est incorrecte.");
    }

    data = await response.json();
    console.log("Données chargées:", data);

    // Affiche les todos uniquement ici, quand on a les données
    displayTodos(data);

  } catch (error) {
    clearTodoList();
    displayErrorMessage("Erreur API : " + error.message);
  }
}

function displayTodos(todos, filter = "all") {
  const todoListElement = document.querySelector("ul.list-group");
  todoListElement.innerHTML = ""; // On vide la liste avant d’ajouter

  // Filtrage selon le bouton
  const filteredTodos = todos.filter(todo => {
    if (filter === "all") return true;
    if (filter === "todo") return !todo.completed;
    if (filter === "done") return todo.completed;
  });

  // Affichage des tâches filtrées
  filteredTodos.forEach(todo => {
  const li = document.createElement("li");
  li.className = "todo list-group-item d-flex align-items-center";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input";
  checkbox.id = "todo-" + todo.id;
  checkbox.checked = todo.completed;

  const label = document.createElement("label");
  label.className = "ms-2 form-check-label";
  label.setAttribute("for", checkbox.id);
  label.textContent = todo.title;

  const deleteLabel = document.createElement("label");
  deleteLabel.className = "ms-auto btn btn-danger btn-sm";
  deleteLabel.style.cursor = "pointer"; // Optionnel : curseur main

  const icon = document.createElement("i");
  icon.className = "bi-trash";

  // ⚠️ Événement : supprimer la tâche
  deleteLabel.addEventListener("click", () => {
    // Supprimer la tâche dans le tableau `data`
    data = data.filter(t => t.id !== todo.id);

    // Réafficher la liste (avec le même filtre)
    displayTodos(data, filter);
  });

  deleteLabel.appendChild(icon);
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteLabel);
  todoListElement.appendChild(li);
});

}


// Attendre que le DOM soit chargé avant de lancer la récupération et affichage
document.addEventListener("DOMContentLoaded", () => {
  loadTodos();
});

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-filter]");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      displayTodos(data, filter);

      // Met à jour l'état "active" des boutons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const input = form.querySelector("input[name='title']");
  const todoList = document.querySelector("ul.list-group");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    const text = input.value.trim();
    if (text === "") return;

    // Crée l'élément <li>
    const li = document.createElement("li");
    li.className = "todo list-group-item d-flex align-items-center";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";

    const label = document.createElement("label");
    label.className = "ms-2 form-check-label";
    label.textContent = text;

    const deleteBtn = document.createElement("label");
    deleteBtn.className = "ms-auto btn btn-danger btn-sm";
    const icon = document.createElement("i");
    icon.className = "bi-trash";
    deleteBtn.appendChild(icon);

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    input.value = ""; // Vide le champ après ajout
  });
});


