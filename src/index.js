
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
    homeDiv.classList.add('tabs', 'size-100', 'text-white');
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


  return {
    setSelectTabs: function() {
      createSelectTabsElements();
    },

    setHome: function() {
      createHomeElements();
    }
  };
})();

var Controller = (function(Assembler) {

  return {
    init: function() {
      console.log('hello world');
      console.log('webpack has worked');
      Assembler.setSelectTabs();
      Assembler.setHome();
    }
  }
})(UIAssembler);

Controller.init();