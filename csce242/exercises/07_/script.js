/* when the hamburger is clicked, toggle between showing 
and hiding the nav items */
const navHidden = document.getElementById("toggle-nav");
navHidden.onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
}
/*
**Same thing as above but in a different way**

document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
}
*/
/* Dont go to link destination when clicked */
document.getElementById("click-link").onclick = (event) => {
    event.preventDefault(); //dont go to the links destination
    console.log("you clicked a link");
}

/*change the ball color */
document.getElementById("txt-color").onchange = (e) => {
    document.getElementById("ball").style.setProperty("background-color", e.target.value);   
}

/* move the ball down when the button is clicked */
let pos = 0;
document.getElementById("move-down").onclick = () => {
    pos++;
    document.getElementById("ball").style.setProperty("top", pos + "px");
}

/* show color message*/
document.getElementById("btn-show-color").onclick = () => {
    const color = document.getElementById("txt-enter-color").value.toLowerCase().trim();
    const messageP = document.getElementById("color-message");
    let mood = "";

    if(color == "red"){
        mood = "angy";
    }
    else if(color == "blue"){
        mood = "moody";
    }
    else {
        mood = "undefined";
    }

    messageP.innerHTML = `you chose ${color} so you are ${mood}`;
}

/*donations */
/* Get the number 
- if it is not a number or it is negative show an error in the error 
Otherwise First show the % out of 10,000 towards goal
Next show a visual representation with a box and a gradient */

document.getElementById("btn-donate").onclick = () => {
    const goal = 10000;
    const donation = document.getElementById("txt-donations").value;
    const error = document.getElementById("error-donation");
    error.innerHTML = "";

    if(isNaN(donation) || (donation < 0)){
        error.innerHTML = "*Invalid*";
        return;
    }
    const percentGoal = donation / goal * 100;
    console.log(percentGoal + "%");
    document.querySelector(":root").style.setProperty("--funds", percentGoal + "%");

}
 
