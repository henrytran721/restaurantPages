function appendFrame(content) {
  content.appendChild(mainHeader());
}

function mainHeader() {
  let mainHeader = document.createElement('div');
  mainHeader.className = "mainHeader";

  let restaurantName = document.createElement('h1');
  restaurantName.appendChild(document.createTextNode("Henri's Cafe"));
  restaurantName.className = "restaurantName";

  let borderBottom = document.createElement('div');
  borderBottom.className = "borderBottom";

  let restaurantDetail = document.createElement('p');
  restaurantDetail.className = "restaurantDetail";
  restaurantDetail.innerHTML = "Henri's Cafe was started by the legendary pastery chef himself, Henri de Tran. We specialize in creating works of" +
  'art such as fresh croissants and fruit tarts that will satisfy our customers to no avail. <br/> <br/> <strong>Contact Information</strong> <br /> 619-892-1827' +
  "<br/><br/><br/> <strong>Address</strong><br/> 8291 Southwest Drive <br /> Oakland, California, 94577";

  mainHeader.append(restaurantName, borderBottom, restaurantDetail);
  return mainHeader;
}

export {
  appendFrame
}
