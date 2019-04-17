function aboutTab() {
  let aboutDiv = document.createElement('div');
  aboutDiv.classList.add('aboutDiv');
  aboutDiv.innerHTML = "<h1>Freshly baked Pasteries everyday</h1>" +
  "<p>We bake our pasteries fresh in house and have a wide selection. <br /> We originally" +
  " are from the great plains of France and created our stove from the scrapes of the Eiffel Tower</p>"
  return aboutDiv;
}

export {
  aboutTab
}
