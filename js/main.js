const tabItems = document.getElementsByClassName('tab-item');
const tabContentItems = document.getElementsByClassName('tab-content-item');

for (let i = 0; i < tabItems.length; i++) {
  tabItems[i].addEventListener('click', selectItem);
}

function selectItem(e) {
  // Remove all tab-border & show classes
  removeShow();

  // Add tab-border to current tab
  this.classList.add('tab-border');

  // Add show to current tab
  const tabContentItem = document.getElementById(`${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeShow() {
  for (let i = 0; i < tabItems.length; i++) {
    tabItems[i].classList.remove('tab-border');
    tabContentItems[i].classList.remove('show');
  }
}
