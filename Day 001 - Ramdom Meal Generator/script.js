get_meal_btt = document.getElementById("getMealBtt")
meal_recipe = document.getElementById("mealRecipe")

get_meal_btt.addEventListener("click", () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(res => {
        createMeal(res.meals[0])
    })
})

function createMeal(meal) {
    let ingredients = []

    for(let i=1; i<=20; i++) {
        if(meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        } else {
            break
        }
    }

    const newInnerHtml = `
        <div>
            <div id="column1">
                <img src="${meal.strMealThumb}" alt="Imagem da refeição"/>
                ${  meal.strCategory
                    ? `<p><strong>Categoria:</strong> ${meal.strCategory}</p>`
                    : ""
                }
                ${  meal.strArea
                    ? `<p><strong>Área:</strong> ${meal.strArea}</p>`
                    : ""
                }
                ${  meal.strTags
                    ? `<p><strong>Tags:</strong> ${meal.strTags.split(",").join(", ")}</p>`
                    : ""
                }
                <h4>Ingredientes:</h4>
                <ul>
                    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
                </ul>
            </div>
            <div id="column2">
                <h4>${meal.strMeal}</h4>
                <p>${meal.strInstructions}</p>
            </div>
        </div>
        ${  meal.strYoutube
            ? `
        <div id="videoGroup">
            <h4>Vídeo da receita</h4>
            <iframe width="${window.innerWidth - 300}" height="450" src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"></iframe>
        </div>`
            : ""
        }
    `

    meal_recipe.innerHTML = newInnerHtml
}
