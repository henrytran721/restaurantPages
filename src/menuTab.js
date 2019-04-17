function menuTab(){
  let menuDiv = document.createElement('div');
  menuDiv.classList.add('menuDiv');
  menuDiv.innerHTML = "<h3>Croissant</h3> <br/> <p>Fresh Croissant baked with our housemade flour and handrolled to perfection</p>";
  return menuDiv;
}

export {
  menuTab
}
