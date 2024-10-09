

document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};
document.getElementById('toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});

const getSpending = async() => {
    const url = "https://caelenw.github.io/csce242/project/part6/example.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error)
    }
};

const showSpending = async() => {
    const spending = await getSpending();
    
    spending.forEach((spendingItem) => {
        document.getElementById("spending-section").append(getSpendingSection(spendingItem));
    });
};

const getSpendingSection = (spendingItem) => {
    const section = document.createElement("section");

    const logo = document.createElement("img");
    logo.innerHTML = spendingItem.logo;
    section.append(logo);


    const h3 = document.createElement("h3");  
    h3.innerHTML = spendingItem.Item;  
    section.append(h3);

    const priceP = document.createElement("p"); 
    priceP.innerHTML = spendingItem.Price;
    section.append(priceP); 
    
    const accountP = document.createElement("p");
    accountP.innerHTML = spendingItem.Account;
    section.append(accountP);

    const dateP = document.createElement("p");
    dateP.innerHTML = spendingItem.Date;
    section.append(dateP);

    const catP = document.createElement("p");
    catP.innerHTML= spendingItem.Categorie;
    section.append(catP);

    const statusP = document.createElement("p");
    statusP.innerHTML = spendingItem.Status;
    section.append(statusP);

    const commentP = document.createElement("p");
    commentP.innerHTML= spendingItem.Comments;
    section.append(commentP);

    return section; 
};

showSpending();