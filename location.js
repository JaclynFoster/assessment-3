

let generateForm = document.querySelector("#generate-form")
const restaurants = ["Applebees", "Val's Italian Restaurant", "The Kickin Mule", "Dairy Palace", "Bean & Burger"]

const generateRestaurant = (e) => {
    e.preventDefault()
    let generator = restaurants[Math.floor(Math.random() * restaurants.length)]
    alert("I choose: " + generator)

}

generateForm.addEventListener("click", generateRestaurant)