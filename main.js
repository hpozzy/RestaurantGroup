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

const divOne = `<div id=logo>
<img src="images/logo.png" />
</div>
<div id="media">
<img src="images/open.jpg" />
<img src="images/facebook.png" />
<img src="images/twitter.png" />
<img src="images/instagram.png" />
</div>`

document.querySelector("#divOne").innerHTML = divOne

const divThree = `<div class="middleContainer">
<div id="latestNews">
  <div><h5>Latest News</h5></div>
  <div id="dateLatestNews">
    <span style="color: black"
      ><strong>Lorem Ipsum dolor sit amet</strong></span
    >
    <span style="color: black"><strong>April 20</strong></span>
  </div>
  <div>
    <p id="paragraphText">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Null
      aenean euismod elementum. Tincidunt eget nullam non nisi est. Ipsum
      dolor sit amet consectetur. Et ultrices neque ornare aenean euismod
      elementum. Tincidunt eget nullam non nisi est. Ipsum dolor sit amet
      consectetur. Amet consectetur adipiscing elit duis tristique
      sollicitudin nibh sit.....read more >
    </p>
  </div>
</div>

<div id="todaysSpecial">
  <h5>Today's Special</h5>
  <div id="todaysSpecialImg"></div>
  <p style="color: black">
    <strong
      >Lorem ipsum dolor sit amet.....................27</strong
    >
  </p>
  <p id="paragraphText">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod magna aliqua.
  </p>
</div>
<div id="ourLocation">
  <h5>Our Location</h5>

  <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.65964019496!2d-115.19264768472897!3d36.12614898009292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c6a76d5f11df%3A0x42575f7aa5a2a75b!2sKung%20Fu%20Thai%20%26%20Chinese%20Restaurant!5e0!3m2!1sen!2sus!4v1600386726040!5m2!1sen!2sus"
      width="280"
      height="100"
      frameborder="0"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </div>

  <div id="address">
    <div style="text-align: center">
      3505 S Valley View Blvd, Las Vegas, NV 89103
    </div>
  </div>
  <div id="address">
    <div style="text-align: center">
      (702) 247-4120 ● (702) 247-4120 ● Map ● Directions
    </div>
  </div>
</div>
</div>`

document.querySelector("#divThree").innerHTML = divThree

const label7story = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
anim id est laborum.</p>

<img src="https://www.panamaequity.com/wp-content/uploads/2019/04/Panama-Equity-top-10-fine-dining-restaurants-panama-e1541431734387-1-e1541433537965.jpg" alt="kitchen" id="ourStoryImage">

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
                    <div class="threeIcons"><img src="images/spicy.png" alt="spicy icon"/>
                      <span class="extraDetails">${i.extra.spicy}</span>
                    </div>
                    <div class="threeIcons"><img src="images/allergy.png" alt="allergy icon"/>
                      <span class="extraDetails">${i.extra.glutenfree}</span>
                    </div>
                    <div class="threeIcons"><img src="images/vegan.png" alt="vegan icon"/>
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
                  <div class="threeIcons"><img src="images/spicy.png" alt="spicy icon"/>
                      <span class="extraDetails">${i.extra.spicy}</span>
                    </div>
                    <div class="threeIcons"><img src="images/allergy.png" alt="allergy icon"/>
                      <span class="extraDetails">${i.extra.glutenfree}</span>
                    </div>
                    <div class="threeIcons"><img src="images/vegan.png" alt="vegan icon"/>
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
                  <div class="threeIcons"><img src="images/spicy.png" alt="spicy icon"/>
                      <span class="extraDetails">${i.extra.spicy}</span>
                    </div>
                    <div class="threeIcons"><img src="images/allergy.png" alt="allergy icon"/>
                      <span class="extraDetails">${i.extra.glutenfree}</span>
                    </div>
                    <div class="threeIcons"><img src="images/vegan.png" alt="vegan icon"/>
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
