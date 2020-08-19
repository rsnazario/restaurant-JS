import { SelectTabs } from './selectTabs'
import { Home } from './homeTab'
import { Menu } from './menuTab'
import { Contact } from './contactTab'
import { About } from './aboutTab'


var UIAssembler = (function(select, home, menu, contact, about) {

  return {
    setSelectTabs: function() {
      // createSelectTabsElements();
      select.createSelectTabsElements();
    },

    setHome: function() {
      document.getElementById('home').classList.add('tabs-active');
      // createHomeElements();
      home.createHomeElements();
    },

    setMenu: function() {
      document.getElementById('menu').classList.add('tabs-active');
      // createMenuElements();
      menu.createMenuElements();
    },

    setContact: function() {
      document.getElementById('contact').classList.add('tabs-active');
      // createContactElements();
      contact.createContactElements();
    },

    setAbout: function() {
      document.getElementById('about').classList.add('tabs-active');
      // createAboutElements();
      about.createAboutElements();
    }
  };
})(SelectTabs(), Home(), Menu(), Contact(), About());

var Controller = (function(Assembler) {

  var deleteDisplayedScreen = function() {
    const contentDiv = document.getElementById('content');
    if (contentDiv.lastChild.id !== 'select-tabs') {
      contentDiv.removeChild(contentDiv.lastChild);
      const item = document.querySelector('.tabs-active')
      item.classList.remove('tabs-active');
    }
  };

  var linkClicked = function(event) {
    if (event.target.id === 'link-menu') {
      deleteDisplayedScreen();
      Assembler.setMenu();
    } 
    else if (event.target.id === 'link-contact') {
      deleteDisplayedScreen();
      Assembler.setContact();
    }
    else if (event.target.id === 'link-about') {
      deleteDisplayedScreen();
      Assembler.setAbout();
    }
  };

  var setupEventListeners = function() {
    document.getElement
    
    document.getElementById('home').addEventListener('click', function() {
      // 1 - Delete Current Displayed Screen
      deleteDisplayedScreen();
      // 2 - Display Home Tab
      Assembler.setHome();
    });

    document.getElementById('content').addEventListener('click', linkClicked);

    document.getElementById('menu').addEventListener('click', function() {
      // 1 - Delete Current Displayed Screen
      deleteDisplayedScreen();
      // 2 - Display Menu Tab
      Assembler.setMenu();
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
      Assembler.setAbout();
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
