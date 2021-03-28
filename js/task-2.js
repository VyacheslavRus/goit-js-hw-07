const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


//   Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
//   после чего вставит все li за одну операцию в список ul.ingredients. 
//   Для создания DOM-узлов используй document.createElement().


const ulIngredients = document.querySelector('#ingredients');
console.log(ulIngredients);

let oneIngr =  ingredients.map(el => {
  let liIngredients = document.createElement('li');
  liIngredients.textContent = el;
  return liIngredients
})

ulIngredients.append(...oneIngr)
