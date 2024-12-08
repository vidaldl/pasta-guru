document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get('id');

  fetch('data/recipes.json')
    .then(response => response.json())
    .then(recipes => {
      const recipe = recipes.find(r => r.id == recipeId);
      if (recipe) {
        document.getElementById('recipe-name').textContent = recipe.name;
        document.getElementById('recipe-description').textContent = recipe.description;

        const ingredientsList = document.getElementById('recipe-ingredients');
        recipe.ingredients.forEach(ingredient => {
          const listItem = document.createElement('li');
          listItem.className = 'list-group-item';
          listItem.textContent = ingredient;
          ingredientsList.appendChild(listItem);
        });

        const instructionsList = document.getElementById('recipe-instructions');
        recipe.instructions.forEach(instruction => {
          const listItem = document.createElement('li');
          listItem.className = 'list-group-item';
          listItem.textContent = instruction;
          instructionsList.appendChild(listItem);
        });
      } else {
        console.error('Recipe not found');
      }
    })
    .catch(error => console.error('Error fetching recipe:', error));
});