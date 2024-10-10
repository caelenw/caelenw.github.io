//"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
const getVodka = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showDrinks = async () => {
    const data = await getVodka();
    const drinks = data.drinks; // Ensure that data.drinks exists

    if (drinks) {
        drinks.forEach((drinkItem) => {
            document.getElementById("drinks-section").append(getDrinkSection(drinkItem));
        });
    } else {
        console.log("No drinks found");
    }
};

const getDrinkSection = (drinkItem) => {
    const section = document.createElement("section");

    const logo = document.createElement("img");
    logo.src = drinkItem.strDrinkThumb;
    logo.alt = drinkItem.strDrink + " Image";
    section.append(logo);

    const h3 = document.createElement("h3");
    h3.innerHTML = drinkItem.strDrink;
    section.append(h3);

    const categoryP = document.createElement("p");
    categoryP.innerHTML = "Category: " + drinkItem.strCategory;
    section.append(categoryP);

    const alcoholicP = document.createElement("p");
    alcoholicP.innerHTML = "Alcoholic: " + drinkItem.strAlcoholic;
    section.append(alcoholicP);

    const glassP = document.createElement("p");
    glassP.innerHTML = "Glass: " + drinkItem.strGlass;
    section.append(glassP);

    const instructionsP = document.createElement("p");
    instructionsP.innerHTML = "Instructions: " + drinkItem.strInstructions;
    section.append(instructionsP);

    for (let i = 1; i <= 15; i++) {
        const ingredient = drinkItem[`strIngredient${i}`];
        const measure = drinkItem[`strMeasure${i}`];

        if (ingredient) {
            const ingredientP = document.createElement("p");
            ingredientP.innerHTML = `${measure ? measure : ""} ${ingredient}`;
            section.append(ingredientP);
        }
    }

    return section;
};

showDrinks();

const getTequila = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=tequila";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showTequilaDrinks = async () => {
    const data = await getTequila();
    const drinks = data.drinks; // Ensure that data.drinks exists

    if (drinks) {
        drinks.forEach((drinkItem) => {
            document.getElementById("tequila-section").append(getDrinkSection(drinkItem));
        });
    } else {
        console.log("No tequila drinks found");
    }
};

const getTequillaSection = (drinkItem) => {
    const section = document.createElement("section");

    const logo = document.createElement("img");
    logo.src = drinkItem.strDrinkThumb;
    logo.alt = drinkItem.strDrink + " Image";
    section.append(logo);

    const h3 = document.createElement("h3");
    h3.innerHTML = drinkItem.strDrink;
    section.append(h3);

    const categoryP = document.createElement("p");
    categoryP.innerHTML = "Category: " + drinkItem.strCategory;
    section.append(categoryP);

    const alcoholicP = document.createElement("p");
    alcoholicP.innerHTML = "Alcoholic: " + drinkItem.strAlcoholic;
    section.append(alcoholicP);

    const glassP = document.createElement("p");
    glassP.innerHTML = "Glass: " + drinkItem.strGlass;
    section.append(glassP);

    const instructionsP = document.createElement("p");
    instructionsP.innerHTML = "Instructions: " + drinkItem.strInstructions;
    section.append(instructionsP);

    for (let i = 1; i <= 15; i++) {
        const ingredient = drinkItem[`strIngredient${i}`];
        const measure = drinkItem[`strMeasure${i}`];

        if (ingredient) {
            const ingredientP = document.createElement("p");
            ingredientP.innerHTML = `${measure ? measure : ""} ${ingredient}`;
            section.append(ingredientP);
        }
    }

    return section;
};

showTequilaDrinks();

