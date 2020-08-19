const Home = () => {
  const createHomeElements = function() {
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

  return { createHomeElements };
};

export { Home };