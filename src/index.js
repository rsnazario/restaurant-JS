import { SelectTabs } from './selectTabs';
import { Home } from './homeTab';
import { Menu } from './menuTab';
import { Contact } from './contactTab';
import { About } from './aboutTab';

const UIAssembler = (function (select, home, menu, contact, about) {
  return {
    setSelectTabs() {
      select.createSelectTabsElements();
    },

    setHome() {
      document.getElementById('home').classList.add('tabs-active');
      home.createHomeElements();
    },

    setMenu() {
      document.getElementById('menu').classList.add('tabs-active');
      menu.createMenuElements();
    },

    setContact() {
      document.getElementById('contact').classList.add('tabs-active');
      contact.createContactElements();
    },

    setAbout() {
      document.getElementById('about').classList.add('tabs-active');
      about.createAboutElements();
    },
  };
}(SelectTabs(), Home(), Menu(), Contact(), About()));

const Controller = (function (Assembler) {
  const deleteDisplayedScreen = function () {
    const contentDiv = document.getElementById('content');
    if (contentDiv.lastChild.id !== 'select-tabs') {
      contentDiv.removeChild(contentDiv.lastChild);
      const item = document.querySelector('.tabs-active');
      item.classList.remove('tabs-active');
    }
  };

  const linkClicked = function (event) {
    if (event.target.id === 'link-menu') {
      deleteDisplayedScreen();
      Assembler.setMenu();
    } else if (event.target.id === 'link-contact') {
      deleteDisplayedScreen();
      Assembler.setContact();
    } else if (event.target.id === 'link-about') {
      deleteDisplayedScreen();
      Assembler.setAbout();
    }
  };

  const setupEventListeners = function () {
    document.getElementById('home').addEventListener('click', () => {
      // 1 - Delete Current Displayed Screen
      deleteDisplayedScreen();
      // 2 - Display Home Tab
      Assembler.setHome();
    });
    document.getElementById('content').addEventListener('click', linkClicked);
    document.getElementById('menu').addEventListener('click', () => {
      // 1 - Delete Current Displayed Screen
      deleteDisplayedScreen();
      // 2 - Display Menu Tab
      Assembler.setMenu();
    });
    document.getElementById('contact').addEventListener('click', () => {
      // 1 - Delete Current Displayed Screen
      deleteDisplayedScreen();
      // 2 - Display Contact Tab
      Assembler.setContact();
    });
    document.getElementById('about').addEventListener('click', () => {
      // 1 - Delete Current Displayed Screen
      deleteDisplayedScreen();
      // 2 - Display About Tab
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
