let tabs = document.querySelectorAll(".label7tabs")
let contents = document.querySelectorAll(".label7divs")

const handleClick = (e, btn) => {
  e.preventDefault()
  tabs.forEach((target) => {
    target.classList.remove("activeTab")
  })
  e.currentTarget.classList.add("activeTab")
  contents.forEach((x) => x.classList.remove("active"))
  btn.classList.add("active")
}

tabs.forEach((target, i) => {
  target.addEventListener("click", (e) => handleClick(e, contents[i]))
})

const label7story = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
anim id est laborum.</p>

<img src="" alt="" id="ourStoryImage">

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
anim id est laborum.</p>`

document.querySelector("#label7mainStory").innerHTML = label7story

const menuDivs = `<div id="menuSectionHeader">Our Dinner Selections...</div>

<div id="menuAppetizerHeader" class="menuHeaders">Appetizers</div>
<div id="menuAppetizers" class="menuMarginBottom"></div>

<div id="menuEntreeHeader" class="menuHeaders">Entrees</div>
<div id="menuEntrees" class="menuMarginBottom"></div>

<div id="menuDessertHeader" class="menuHeaders">Desserts</div>
<div id="menuDesserts" class="menuMarginBottom"></div>`

document.querySelector("#label7mainMenu").innerHTML = menuDivs

const appetizerMenu = fetch(
  "https://obscure-tundra-54269.herokuapp.com/fine-dining"
)
  .then((resp) => resp.json())
  .then((menu) => {
    const appSection = menu.appetizers
      .map(function (i) {
        return `<div class="menuItems">
                  <div class='menuName'>
                    <p>${i.name}</p>
                  </div>
                  <div class='menuPrice'>
                    <p>${i.price}</p>
                  </div>
                </div>
                <div class="menuInfo">
                  <div class="menuDescription">
                    <p>This dish is made with <i>${i.description}</i>. We use farm fresh ingredients.</p>
                  </div>
                  <div class="menuLabels">
                    <div class="threeIcons">HA
                      <span class="extraDetails">${i.extra.spicy}</span>
                    </div>
                    <div class="threeIcons">HA
                      <span class="extraDetails">${i.extra.glutenfree}</span>
                    </div>
                    <div class="threeIcons">HA
                      <span class="extraDetails">${i.extra.vegetarian}</span>
                    </div>
                  </div>
                </div>`
      })
      .join("")
    document.querySelector("#menuAppetizers").innerHTML = appSection
  })

const entreeMenu = fetch(
  "https://obscure-tundra-54269.herokuapp.com/fine-dining"
)
  .then((resp) => resp.json())
  .then((menu) => {
    const entreeSection = menu.entrees
      .map(function (i) {
        return `<div class="menuItems">
                  <div class='menuName'>
                    <p>${i.name}</p>
                  </div>
                  <div class='menuPrice'>
                    <p>${i.price}</p>
                  </div>
                </div>
                <div class="menuInfo">
                  <div class="menuDescription">
                    <p>This dish is made with <i>${i.description}</i>. We use farm fresh ingredients.</p>
                  </div>
                  <div class="menuLabels">
                  <div class="threeIcons">HA
                      <span class="extraDetails">${i.extra.spicy}</span>
                    </div>
                    <div class="threeIcons">HA
                      <span class="extraDetails">${i.extra.glutenfree}</span>
                    </div>
                    <div class="threeIcons">HA
                      <span class="extraDetails">${i.extra.vegetarian}</span>
                    </div>
                  </div>
                </div>`
      })
      .join("")
    document.querySelector("#menuEntrees").innerHTML = entreeSection
  })

const dessertMenu = fetch(
  "https://obscure-tundra-54269.herokuapp.com/fine-dining"
)
  .then((resp) => resp.json())
  .then((menu) => {
    const dessertSection = menu.desserts
      .map(function (i) {
        return `<div class="menuItems">
                  <div class='menuName'>
                    <p>${i.name}</p>
                  </div>
                  <div class='menuPrice'>
                    <p>${i.price}</p>
                  </div>
                </div>
                <div class="menuInfo">
                  <div class="menuDescription">
                    <p>This dish is made with <i>${i.description}</i>. We use farm fresh ingredients.</p>
                  </div>
                  <div class="menuLabels">
                  <div class="threeIcons">HA
                      <span class="extraDetails">${i.extra.spicy}</span>
                    </div>
                    <div class="threeIcons">HA
                      <span class="extraDetails">${i.extra.glutenfree}</span>
                    </div>
                    <div class="threeIcons">HA
                      <span class="extraDetails">${i.extra.vegetarian}</span>
                    </div>
                  </div>
                </div>`
      })
      .join("")
    document.querySelector("#menuDesserts").innerHTML = dessertSection
  })

const label7reservation = `<form action="" method="GET">
  <label for="fullname">Full Name</label><br />
    <input class="form-input" type="text" id="fullName" name="fname" /><br />
  <label for="numberofguest">Number of Guests</label><br />
   <input class="form-input" type="text" id="numberOfGuest" name="guest" /><br />
  <label for="date">Date</label><br />
   <input class="form-input" type="text" id="reservationDate" name="rDate" /><br />
  <label for="specialNotes">Special Notes</label><br />
   <textarea class="form-input" name="specialNotes" id="specialNotes" cols="30" rows="8"></textarea> <br />
  <label for="seating">Seating Preference</label><br />
    <select class="form-input" id="seatingP" name="seating">
      <option value="indoor">Indoor</option>
      <option value="outdoor">Outdoor</option>
    </select>
  <br>
<button id='reservationButton' type="button">Reserve Table</button>`

document.querySelector("#label7reservation").innerHTML = label7reservation
