const elsTabLink = document.querySelectorAll('.js-tab-link');
const elsTabsPanel = document.querySelectorAll('.tabpanels__item');
const elsTabsItem = document.querySelectorAll('.tabs__item');

const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');
const elsAccordionItem = document.querySelectorAll('.accordion__item');

function closeAccordionItems () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove('accordion__item--open');
  });
}

function deactivateTabItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove('tabs__item--active');
  });
}
function deactivateTabPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove('tabpanels__item--active');
  });
}


elsTabLink.forEach(function (elTabLink) {
  elTabLink.addEventListener('click', function (evt) {
    // Prevent page move
    evt.preventDefault();

    // Remove active class from tabs__item elements
    deactivateTabItems ();

    // Add active class to current tabs__item
    elTabLink.parentElement.classList.add('tabs__item--active');

    // Remove active class from tabs__panel element
    deactivateTabPanels();

    // Show activce tab panel
    // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
    elTargetPanel.classList.add('tabpanels__item--active');
  });
});

elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener('click', function () {
    closeAccordionItems ();
    elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open');
  });
});