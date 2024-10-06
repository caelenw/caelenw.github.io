/*
class Dog{
    constructor(title, breed, color, age, size, pic){
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }
    
    get item(){
        const section = document.createElement("section");
        section.classList.add("dog");
        section.classList.add("columns");
        const imagediv = document.createElement("div");
        const image = document.createElement("img");
        const h1 = document.createElement("h1");
        h1.innerHTML = this.title;
        imagediv.append(h1);
        section.append(imagediv);
        image.src = this.pic;
        imagediv.append(image);
    
        const datadiv = document.createElement("div");
        const breed = document.createElement("h2");
        const color = document.createElement("h2");
        const age = document.createElement("h2");
        const size = document.createElement("h2");

        breed.innerHTML = "breed: " + this.breed;
        color.innerHTML = "color: " + this.color;
        age.innerHTML = "age: " + this.age;
        size.innerHTML = "size: " + this.size;
        
        datadiv.append(breed);
        datadiv.append(color);
        datadiv.append(age);
        datadiv.append(size);

        section.append(datadiv)
        
        return section;
    }
}

const dogs = [];
//const  myDog = new Dog("molly", "pit bull", "brown", 4 , "xs", "images/molly.jpeg");
dogs.push(new Dog("coco", "morkie", "Black", 5, "small", "/Users/caelen/Desktop/CSCE-242/caelenw.github.io/csce242/exercises/10__classes/images/yorkie.jpg"));
dogs.push(new Dog("Lexie", "golden dodle", "black", 7, "large", "/Users/caelen/Desktop/CSCE-242/caelenw.github.io/csce242/exercises/10__classes/images/pitt-bull.jpg"));
dogs.push(new Dog("Gerald","pit Bull", "white", 3, "lg", "/Users/caelen/Desktop/CSCE-242/caelenw.github.io/csce242/exercises/10__classes/images/golden-retriever.jpg"));

dogs.forEach((dog)=>{
    document.getElementById("dog-list").append(dog.item);
});
*/
class Dog {
    constructor(title, breed, color, age, size, pic){
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("dog");

        //create a header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        //create my columns
        const columnsDiv = document.createElement("div");
        columnsDiv.classList.add("columns");
        section.append(columnsDiv);
        const firstColumn = document.createElement("div");
        columnsDiv.append(firstColumn);
        const secondColumn = document.createElement("div");
        columnsDiv.append(secondColumn);

        //create image and add to first column
        firstColumn.append(this.picture(this.pic));

        //create info data and add to second column
        secondColumn.classList.add("hidden");
        secondColumn.append(this.paragraph("Breed", this.breed));
        secondColumn.append(this.paragraph("Age", this.age));

        //create expand / contract arrow
        const expCon = document.createElement("a");
        expCon.href="#";
        expCon.innerHTML = "&#x2964;";
        h3.append(expCon);

        expCon.onclick = () => {
            secondColumn.classList.toggle("hidden");
        };
        

        return section;
    }

    picture(info){
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    paragraph(title, info){
        const p =document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

const dogs = [];
//const myDoc = new Dog("molly", "pit bull", "brown", 4, "xs", "images/molly.jpg");
dogs.push(new Dog("Coco", "Morkie", "Black", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald","Pit Bull", "White", 3, "lg", "pitt-bull.jpg"));

dogs.forEach((dog)=>{
    document.getElementById("dog-list").append(dog.item);
});




/*
Homework: classes 
*/