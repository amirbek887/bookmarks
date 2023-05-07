const modifiers = {
  tabItemActive: 'tabs__item--active',
  tabPanelActive: 'tabpanels__item--active',
  accordionItemOpen: 'accordion__item--open'
};

const elsTabLink = document.querySelectorAll('.js-tab-link');
const elsTabsPanel = document.querySelectorAll('.tabpanels__item');
const elsTabsItem = document.querySelectorAll('.tabs__item');

const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');
const elsAccordionItem = document.querySelectorAll('.accordion__item');

function closeAccordionItems () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove(modifiers.accordionItemOpen);
  });
}

function deactivateTabItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove(modifiers.tabItemActive);
  });
}
function deactivateTabPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove(modifiers.tabPanelActive);
  });
}


elsTabLink.forEach(function (elTabLink) {
  elTabLink.addEventListener('click', function (evt) {
    // Prevent page move
    evt.preventDefault();

    // Remove active class from tabs__item elements
    deactivateTabItems ();

    // Add active class to current tabs__item
    elTabLink.parentElement.classList.add(modifiers.tabItemActive);

    // Remove active class from tabs__panel element
    deactivateTabPanels();

    // Show activce tab panel
    // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
    elTargetPanel.classList.add(modifiers.tabPanelActive);
  });
});

elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener('click', function () {
    closeAccordionItems ();
    elAccordionItemToggler.closest('.accordion__item').classList.add(modifiers.accordionItemOpen);
  });
});