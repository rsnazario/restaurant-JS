# restaurant-JS
A Restaurant Page Built in Javascript Only.


/* 
  var createSelectTabsElements = function() {
    const contentDiv = document.getElementById('content');
    
    // 1 - create divs
    const mainDiv = document.createElement('div');
    const homeDiv = document.createElement('div');
    const menuDiv = document.createElement('div');
    const contactDiv = document.createElement('div');
    const aboutDiv = document.createElement('div');

    // 2 - Add id's
    mainDiv.setAttribute('id', 'select-tabs');
    homeDiv.setAttribute('id', 'home');
    menuDiv.setAttribute('id', 'menu');
    contactDiv.setAttribute('id', 'contact');
    aboutDiv.setAttribute('id', 'about');

    // 3 - Add Classes
    mainDiv.classList.add('bg-fade', 'size-100');
    homeDiv.classList.add('tabs', 'size-100', 'text-white', 'tabs-active');
    menuDiv.classList.add('tabs', 'size-100', 'text-white');
    contactDiv.classList.add('tabs', 'size-100', 'text-white');
    aboutDiv.classList.add('tabs', 'size-100', 'text-white');

    // 4 - Add Content
    homeDiv.innerHTML += 'Home';
    menuDiv.innerHTML += 'Menu';
    contactDiv.innerHTML += 'Contact';
    aboutDiv.innerHTML += 'About';

    // 5 - Append divs to mainDiv
    mainDiv.appendChild(homeDiv);
    mainDiv.appendChild(menuDiv);
    mainDiv.appendChild(contactDiv);
    mainDiv.appendChild(aboutDiv);
    
    // 5 - Append mainDiv to ContentDiv
    contentDiv.appendChild(mainDiv);
  };

  var createHomeElements = function() {
    const contentDiv = document.getElementById('content');

    // 1 - create elements
    const homeDiv = document.createElement('div');
    const spanOne = document.createElement('span');
    const spanTwo = document.createElement('span');
    const spanThree = document.createElement('span');
    const spanFour = document.createElement('span');

    // 2 - Add id's
    homeDiv.setAttribute('id', 'tab-home');

    // 3 - Add Classes
    homeDiv.classList.add('bg-fade', 'w-96');
    spanOne.classList.add('bold', 'text-white', 'text-home');
    spanTwo.classList.add('text-white', 'text-home');
    spanThree.classList.add('text-white', 'text-home');
    spanFour.classList.add('text-white', 'text-home');

    // 4 - Add Content
    spanOne.innerHTML = 'Have you ever tasted the Brazilian Homemade Food?<br><br>';
    spanTwo.innerHTML = 'Today is the day you are about to have the best meal ever! <br> Click on <span id="link-menu" class="tab-link">menu</span> to check our dishes!<br><br>';
    spanThree.innerHTML = '<span id="link-contact" class="tab-link">Contact Us</span> for reservations!<br><br>';
    spanFour.innerHTML = 'Are you Curious about me? <span id="link-about" class="tab-link">Here I Am!</span>';

    // 5 - Append spans to homeDiv
    homeDiv.appendChild(spanOne);
    homeDiv.appendChild(spanTwo);
    homeDiv.appendChild(spanThree);
    homeDiv.appendChild(spanFour);

    // 6 - Append homeDiv to ContentDiv
    
    contentDiv.appendChild(homeDiv);
  };

  var createMenuElements = function() {
    const contentDiv = document.getElementById('content');

    // 1 - Create Elements
    const menuDiv = document.createElement('div');
    const mealsDiv = document.createElement('div');
    const mealDiv = document.createElement('div');
    const thumbDiv = document.createElement('div');
    const infoDiv = document.createElement('div');
    const mealImg = document.createElement('img');
    const spanOne = document.createElement('span');
    const spanTwo = document.createElement('span');

    // 2 - Add Id's
    menuDiv.setAttribute('id', 'tab-menu');
    mealDiv.setAttribute('style', 'height: 200px;');

    // 3 - Add Classes
    menuDiv.classList.add('bg-fade', 'w-96');
    mealsDiv.classList.add('meals');
    mealDiv.classList.add('meal');
    thumbDiv.classList.add('thumbnail');
    infoDiv.classList.add('info');
    mealImg.classList.add('img-thumbnail');
    spanOne.classList.add('text-white', 'text-home', 'bold');
    spanTwo.classList.add('text-white', 'text-home');

    // 4 - Add Content
    mealImg.setAttribute('src', 'https://conteudo.imguol.com.br/a5/2020/02/25/feijoada-especial-1582657512280_v2_450x337.jpg');
    spanOne.innerHTML = 'Feijoada<br><br>';
    spanTwo.textContent = 'Traditional Black Beans Stew Meal with Meat. It goes with with Bacon Crumbs and Rice';
    
    // 5 - Append spans to div
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

    // 6 - Append Div to Content
    contentDiv.appendChild(menuDiv);
  };

  var createContactElements = function() {
    const contentDiv = document.getElementById('content');

    // 1 - Create Elements
    const contactDiv = document.createElement('div');
    const spanTitle = document.createElement('span');
    const spanInfo = document.createElement('span');

    // 2 - Add Id's
    contactDiv.setAttribute('id', 'tab-contact');

    // 3 - Add Classes
    contactDiv.classList.add('bg-fade', 'w-96');
    spanTitle.classList.add('bold', 'text-home', 'tab-link');
    spanInfo.classList.add('text-white', 'text-home');

    // 4 - Add Content
    spanTitle.innerHTML = 'BRestaurant <br><br>'
    spanInfo.textContent = 'I am pretty sure you know this is not real, right?'

    // 5 - Append spans to div
    contactDiv.appendChild(spanTitle);
    contactDiv.appendChild(spanInfo);

    // 6 - Append Div to Content
    contentDiv.appendChild(contactDiv);
  };

    var createAboutElements = function() {
      const contentDiv = document.getElementById('content');

      // 1 - Create Elements
      const aboutDiv = document.createElement('div');
      const spanOne = document.createElement('span');
      const spanTwo = document.createElement('span');
      const spanThree = document.createElement('span');

      // 2 - Add Id's
      aboutDiv.setAttribute('id', 'tab-about');

      // 3 - Add Classes
      aboutDiv.classList.add('bg-fade', 'w-96');
      spanOne.classList.add('bold', 'text-home', 'text-white');
      spanTwo.classList.add('text-white', 'text-home');
      spanThree.classList.add('text-white', 'text-home');

      // 4 - Add Content
      spanOne.innerHTML = 'Hi, I am <span class="bold">Rsnazario</span>, the guy who developed this page<br><br>'
      spanTwo.innerHTML = 'You can view my github profile <a href=\'https://github.com/rsnazario\' class="tab-link" target="_blank">here</a><br><br>'
      spanThree.innerHTML = 'Or, you can look at the code <a href=\'https://github.com/rsnazario/restaurant-JS\' class="tab-link" target="_blank">here</a><br>'

      // 5 - Append spans to div
      aboutDiv.appendChild(spanOne);
      aboutDiv.appendChild(spanTwo);
      aboutDiv.appendChild(spanThree);

      // 6 - Append Div to Content
      contentDiv.appendChild(aboutDiv);
    };
    */