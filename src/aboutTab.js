const About = () => {
  const createAboutElements = function () {
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
    spanOne.innerHTML = 'Hi, I am <span class="bold">Rsnazario</span>, the guy who developed this page<br><br>';
    spanTwo.innerHTML = 'You can view my github profile <a href=\'https://github.com/rsnazario\' class="tab-link" target="_blank">here</a><br><br>';
    spanThree.innerHTML = 'Or, you can look at the code <a href=\'https://github.com/rsnazario/restaurant-JS\' class="tab-link" target="_blank">here</a><br>';

    // 5 - Append spans to div
    aboutDiv.appendChild(spanOne);
    aboutDiv.appendChild(spanTwo);
    aboutDiv.appendChild(spanThree);

    // 6 - Append Div to Content
    contentDiv.appendChild(aboutDiv);
  };

  return { createAboutElements };
};

// eslint-disable-next-line import/prefer-default-export
export { About };
