const Contact = () => {
  const createContactElements = function () {
    const contentDiv = document.getElementById('content');

    const contactDiv = document.createElement('div');
    const spanTitle = document.createElement('span');
    const spanInfo = document.createElement('span');

    contactDiv.setAttribute('id', 'tab-contact');

    contactDiv.classList.add('bg-fade', 'w-96');
    spanTitle.classList.add('bold', 'text-home', 'tab-link');
    spanInfo.classList.add('text-white', 'text-home');

    spanTitle.innerHTML = 'BRestaurant <br><br>';
    spanInfo.textContent = 'I am pretty sure you know this is not real, right?';

    contactDiv.appendChild(spanTitle);
    contactDiv.appendChild(spanInfo);

    contentDiv.appendChild(contactDiv);
  };

  return { createContactElements };
};

// eslint-disable-next-line import/prefer-default-export
export { Contact };
