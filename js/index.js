//Main JS file
document.addEventListener('DOMContentLoaded', () => {
  fetch('data/recipes.json')
    .then(response => response.json())
    .then(recipes => {
      const recipeList = document.getElementById('recipe-list');
      recipes.forEach(recipe => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `${recipe.name} <a href="recipe.html?id=${recipe.id}" class="btn btn-primary btn-sm">View Recipe</a>`;
        recipeList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error fetching recipes:', error));
});