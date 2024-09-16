const doStuff = () => {
    alert("hello world");
};

const myButton = document.getElementById("btn-click");
//myButton.onclick = doStuff;

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hellow Everyone!";
    document.getElementById("stuff").classList.add("special");
};

//Add a second button, called "say goodbye"
//when clicked chenge the text  to goodbye everyone, and remove the special styles 
//

const secButton = document.getElementById("btn-bye");
 
secButton.onclick = () => {
    document.getElementById("message").innerHTML = "goodbye yall";
    document.getElementById("stuff").classList.remove("special");
}

const thirdButton = document.getElementById("third-btn");

thirdButton.onclick = ()=> {
    document.getElementById("sec-3").classList.add("remove");
}

//showing data from a input feild //
document.getElementById("txt-first-name").onkeyup = (event) => {
    const textBox = document.getElementById("txt-first-name");
    document.getElementById("result").innerHTML = textBox.value;
    console.log(textBox.value);
}