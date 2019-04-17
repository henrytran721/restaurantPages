function createTabs() {
  let tabDiv = document.createElement('div');
  let ulTabs = document.createElement("ul");
  tabDiv.classList.add('tabDiv');
  ulTabs.classList.add("nav");
  ulTabs.classList.add("nav-tabs");

  let aboutTab = document.createElement('li');
  aboutTab.classList.add('active');
  aboutTab.classList.add('about');
  aboutTab.innerHTML = "<a href = '#'>About</a>"

  let menuTab = document.createElement('li');
  menuTab.classList.add('menu');
  menuTab.innerHTML = "<a href = '#'>Menu</a>"

  let contactTab = document.createElement('li');
  contactTab.classList.add('contact');
  contactTab.innerHTML = "<a href = '#'>Contact</a>"

  ulTabs.append(aboutTab, menuTab, contactTab);
  tabDiv.appendChild(ulTabs);
  return tabDiv;
}

export {
  createTabs
}
