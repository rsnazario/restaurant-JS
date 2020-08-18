
var UIAssembler = (function() {
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

  };

  return {
    setSelectTabs: function() {
      createSelectTabsElements();
    },

    setHome: function() {
      createHomeElements();
    },

    setMenu: function() {
      createMenuElements();
    },

    setContact: function() {
      createContactElements();
    },

    setAbout: function() {
      createAboutElements();
    }
  };
})();

var Controller = (function(Assembler) {

  var deleteDisplayedScreen = function() {
    const contentDiv = document.getElementById('content');
    if (contentDiv.lastChild.id !== 'select-tabs')
      contentDiv.removeChild(contentDiv.lastChild);
  };

  var setupEventListeners = function() {
    document.getElementById('home').addEventListener('click', function() {
      // 1 - Delete Current Displayed Screen
      deleteDisplayedScreen();
      // 2 - Display Home Tab
      Assembler.setHome();
    });

    document.getElementById('menu').addEventListener('click', function() {
      // 1 - Delete Current Displayed Screen
      deleteDisplayedScreen();
      // 2 - Display Menu Tab
      console.log('menu');
    });

    document.getElementById('contact').addEventListener('click', function() {
      // 1 - Delete Current Displayed Screen
      deleteDisplayedScreen();
      // 2 - Display Contact Tab
      Assembler.setContact();
    });

    document.getElementById('about').addEventListener('click', function() {
      // 1 - Delete Current Displayed Screen
      deleteDisplayedScreen();
      // 2 - Display About Tab
      console.log('about');
    })


  };

  return {
    init: function() {
      console.log('hello world');
      console.log('webpack has worked');
      Assembler.setSelectTabs();
      Assembler.setHome();
      setupEventListeners();
    }
  }
})(UIAssembler);

Controller.init();
