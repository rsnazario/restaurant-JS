const SelectTabs = () => {
  const createSelectTabsElements = function () {
    const contentDiv = document.getElementById('content');

    const mainDiv = document.createElement('div');
    const homeDiv = document.createElement('div');
    const menuDiv = document.createElement('div');
    const contactDiv = document.createElement('div');
    const aboutDiv = document.createElement('div');

    mainDiv.setAttribute('id', 'select-tabs');
    homeDiv.setAttribute('id', 'home');
    menuDiv.setAttribute('id', 'menu');
    contactDiv.setAttribute('id', 'contact');
    aboutDiv.setAttribute('id', 'about');

    mainDiv.classList.add('bg-fade', 'size-100');
    homeDiv.classList.add('tabs', 'size-100', 'text-white', 'tabs-active');
    menuDiv.classList.add('tabs', 'size-100', 'text-white');
    contactDiv.classList.add('tabs', 'size-100', 'text-white');
    aboutDiv.classList.add('tabs', 'size-100', 'text-white');

    homeDiv.innerHTML += 'Home';
    menuDiv.innerHTML += 'Menu';
    contactDiv.innerHTML += 'Contact';
    aboutDiv.innerHTML += 'About';

    mainDiv.appendChild(homeDiv);
    mainDiv.appendChild(menuDiv);
    mainDiv.appendChild(contactDiv);
    mainDiv.appendChild(aboutDiv);

    contentDiv.appendChild(mainDiv);
  };

  return { createSelectTabsElements };
};

// eslint-disable-next-line import/prefer-default-export
export { SelectTabs };
