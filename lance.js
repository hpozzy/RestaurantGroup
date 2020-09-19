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
                    <p>${i.description}</p>
                  </div>
                  <div class="menuLabels">
                    <button>${i.extra.spicy}</button><button>${i.extra.glutenfree}</button><button>${i.extra.vegetarian}</button>
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
                    <p>${i.description}</p>
                  </div>
                  <div class="menuLabels">
                  <button>${i.extra.spicy}</button><button>${i.extra.glutenfree}</button><button>${i.extra.vegetarian}</button>
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
                    <p>${i.description}</p>
                  </div>
                  <div class="menuLabels">
                  <button>${i.extra.spicy}</button><button>${i.extra.glutenfree}</button><button>${i.extra.vegetarian}</button>
                  </div>
                </div>`
      })
      .join("")
    document.querySelector("#menuDesserts").innerHTML = dessertSection
  })

let tabs = document.querySelectorAll(".label7tabs")
let contents = document.querySelectorAll(".label7divs")

const handleClick = (e, btn) => {
  e.preventDefault()
  tabs.forEach((target) => {
    target.classList.remove("active-btn")
  })
  e.currentTarget.classList.add("active-btn")
  contents.forEach((x) => x.classList.remove("active"))
  btn.classList.add("active")
}

tabs.forEach((target, i) => {
  target.addEventListener("click", (e) => handleClick(e, contents[i]))
})
