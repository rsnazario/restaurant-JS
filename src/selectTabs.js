const SelectTabs = () => {
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

  return {createSelectTabsElements};
};

export { SelectTabs };
