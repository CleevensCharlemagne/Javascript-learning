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

function displayTodos(todos) {
  const todoListElement = document.querySelector("ul.list-group");
  todoListElement.innerHTML = ""; // On vide la liste avant d’ajouter

  todos.forEach(todo => {
    // Création du <li>
    const li = document.createElement("li");
    li.className = "todo list-group-item d-flex align-items-center";

    // Création de la checkbox <input>
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";
    checkbox.id = "todo-" + todo.id;
    checkbox.checked = todo.completed; // coche si déjà fait

    // Création du label pour la checkbox (titre)
    const label = document.createElement("label");
    label.className = "ms-2 form-check-label";
    label.setAttribute("for", checkbox.id);
    label.textContent = todo.title; // titre dynamique

    // Création du label bouton supprimer
    const deleteLabel = document.createElement("label");
    deleteLabel.className = "ms-auto btn btn-danger btn-sm";

    // Création de l'icône corbeille
    const icon = document.createElement("i");
    icon.className = "bi-trash";

    // Assemblage des éléments
    deleteLabel.appendChild(icon);
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteLabel);

    // Ajout du <li> dans la liste
    todoListElement.appendChild(li);
  });
}


// Attendre que le DOM soit chargé avant de lancer la récupération et affichage
document.addEventListener("DOMContentLoaded", () => {
  loadTodos();
});
