function contactTab(){
  let contactDiv = document.createElement('div');
  contactDiv.classList.add('contactDiv');

  contactDiv.innerHTML = "<h2>Contact us and give us some feedback on your visit!</h2>";

  return contactDiv;
}

export {
  contactTab
}
