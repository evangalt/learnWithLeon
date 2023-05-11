//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
    const drink = document.querySelector('input').value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => {
            res.json();
            console.log(res)
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        });
}