import Component from '@ember/component';

const KEY = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_LEFT_IE11: 'Left',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_RIGHT_IE11: 'Right',
};

export default Component.extend({
  currentTab: 0,
  tagName: '',

  handleKeyboardNavigation(event) {
    let { key } = event;
    let shouldHandleKey = Object.values(KEY).includes(key);
    if (shouldHandleKey) {
      let tabElement = event.target;
      let tabElements = tabElement.parentElement.children;
      let totalTabs = tabElements.length;

      let newTab = this.currentTab;
      if (key === KEY.ARROW_LEFT || key === KEY.ARROW_LEFT_IE11) {
        newTab -= 1;
      } else if (key === KEY.ARROW_RIGHT || key === KEY.ARROW_RIGHT_IE11) {
        newTab += 1;
      }

      newTab = wrapTabIndex(newTab, totalTabs);
      this.set('currentTab', newTab);
      tabElements[newTab].focus();
    }
  },
});

function wrapTabIndex(tabIndex, totalTabs) {
  const FIRST_TAB_INDEX = 0;
  const LAST_TAB_INDEX = totalTabs - 1;

  if (tabIndex < FIRST_TAB_INDEX) {
    return LAST_TAB_INDEX;
  }

  if (tabIndex > LAST_TAB_INDEX) {
    return FIRST_TAB_INDEX;
  }

  return tabIndex;
}
