const Contact = () => {
  const createContactElements = function () {
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
    spanTitle.innerHTML = 'BRestaurant <br><br>';
    spanInfo.textContent = 'I am pretty sure you know this is not real, right?';

    // 5 - Append spans to div
    contactDiv.appendChild(spanTitle);
    contactDiv.appendChild(spanInfo);

    // 6 - Append Div to Content
    contentDiv.appendChild(contactDiv);
  };

  return { createContactElements };
};

// eslint-disable-next-line import/prefer-default-export
export { Contact };
