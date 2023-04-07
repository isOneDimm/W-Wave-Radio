// broadcast
document.addEventListener('DOMContentLoaded', function () {
    let selector = document.querySelector('.broadcasts__choices')
    let choices = new Choices(selector, {
      allowHTML: false,
      shouldSort: false,
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices header_choices',
      },
      itemSelectText: '',
    });
    choices.removeHighlightedItems();
  });