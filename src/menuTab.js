const Menu = () => {
  const createMenuElements = function () {
    const contentDiv = document.getElementById('content');

    const menuDiv = document.createElement('div');
    const mealsDiv = document.createElement('div');
    const mealDiv = document.createElement('div');
    const thumbDiv = document.createElement('div');
    const infoDiv = document.createElement('div');
    const mealImg = document.createElement('img');
    const spanOne = document.createElement('span');
    const spanTwo = document.createElement('span');

    menuDiv.setAttribute('id', 'tab-menu');
    mealDiv.setAttribute('style', 'height: 200px;');

    menuDiv.classList.add('bg-fade', 'w-96');
    mealsDiv.classList.add('meals');
    mealDiv.classList.add('meal');
    thumbDiv.classList.add('thumbnail');
    infoDiv.classList.add('info');
    mealImg.classList.add('img-thumbnail');
    spanOne.classList.add('text-white', 'text-home', 'bold');
    spanTwo.classList.add('text-white', 'text-home');

    mealImg.setAttribute('src', 'https://conteudo.imguol.com.br/a5/2020/02/25/feijoada-especial-1582657512280_v2_450x337.jpg');
    spanOne.innerHTML = 'Feijoada<br><br>';
    spanTwo.textContent = 'Traditional Black Beans Stew Meal with Meat. It goes with with Bacon Crumbs and Rice';

    thumbDiv.appendChild(mealImg);
    infoDiv.appendChild(spanOne);
    infoDiv.appendChild(spanTwo);

    mealDiv.appendChild(thumbDiv);
    mealDiv.appendChild(infoDiv);

    mealsDiv.appendChild(mealDiv);
    mealsDiv.appendChild(mealDiv.cloneNode(true));
    mealsDiv.appendChild(mealDiv.cloneNode(true));
    mealsDiv.appendChild(mealDiv.cloneNode(true));

    menuDiv.appendChild(mealsDiv);

    contentDiv.appendChild(menuDiv);
  };

  return { createMenuElements };
};

// eslint-disable-next-line import/prefer-default-export
export { Menu };
