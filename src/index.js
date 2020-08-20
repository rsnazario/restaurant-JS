import { SelectTabs } from './selectTabs';
import { Home } from './homeTab';
import { Menu } from './menuTab';
import { Contact } from './contactTab';
import { About } from './aboutTab';

const UIAssembler = (function (select, home, menu, contact, about) {
  function deleteDisplayedScreen() {
    const contentDiv = document.getElementById('content');
    if (contentDiv.lastChild.id !== 'select-tabs') {
      contentDiv.removeChild(contentDiv.lastChild);
      const item = document.querySelector('.tabs-active');
      item.classList.remove('tabs-active');
    }
  }

  return {
    setSelectTabs() {
      select.createSelectTabsElements();
    },

    setHome() {
      deleteDisplayedScreen();
      document.getElementById('home').classList.add('tabs-active');
      home.createHomeElements();
    },

    setMenu() {
      deleteDisplayedScreen();
      document.getElementById('menu').classList.add('tabs-active');
      menu.createMenuElements();
    },

    setContact() {
      deleteDisplayedScreen();
      document.getElementById('contact').classList.add('tabs-active');
      contact.createContactElements();
    },

    setAbout() {
      deleteDisplayedScreen();
      document.getElementById('about').classList.add('tabs-active');
      about.createAboutElements();
    },
  };
}(SelectTabs(), Home(), Menu(), Contact(), About()));

const Controller = (function (Assembler) {
  const linkClicked = function (event) {
    if (event.target.id === 'link-menu') {
      Assembler.setMenu();
    } else if (event.target.id === 'link-contact') {
      Assembler.setContact();
    } else if (event.target.id === 'link-about') {
      Assembler.setAbout();
    }
  };

  const setupEventListeners = function () {
    document.getElementById('home').addEventListener('click', () => {
      Assembler.setHome();
    });
    document.getElementById('content').addEventListener('click', linkClicked);
    document.getElementById('menu').addEventListener('click', () => {
      Assembler.setMenu();
    });
    document.getElementById('contact').addEventListener('click', () => {
      Assembler.setContact();
    });
    document.getElementById('about').addEventListener('click', () => {
      Assembler.setAbout();
    });
  };

  return {
    init() {
      Assembler.setSelectTabs();
      Assembler.setHome();
      setupEventListeners();
    },
  };
}(UIAssembler));

Controller.init();
