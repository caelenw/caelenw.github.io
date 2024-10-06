const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalContent = document.getElementById('bird-details');

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

class Bird {
  constructor(title, size, food, habitat, lifespan, interestingFact, pic) {
    this.title = title;
    this.size = size;
    this.food = food;
    this.habitat = habitat;
    this.lifespan = lifespan;
    this.interestingFact = interestingFact;
    this.pic = pic;
  }

  get item() {
    const section = document.createElement("div");
    section.classList.add("bird");

    const h3 = document.createElement("h3");
    h3.innerHTML = this.title;
    section.append(h3);

    const birdImage = this.picture(this.pic);
    section.append(birdImage);

    section.onclick = () => {
      this.openModal();
    };

    return section;
  }

  picture(birdInfo) {
    const pic = document.createElement("img");
    pic.src = "images/" + birdInfo;
    pic.style.cursor = "pointer";
    return pic;
  }

  paragraph(title, birdInfo, birdmod) {
    const p = document.createElement("p");
  
    const strong = document.createElement("strong");
    strong.textContent = title; 
  
    p.appendChild(strong);
    p.append(` ${birdInfo}`); 
    p.classList.add(birdmod);
  
    return p;
  }
  

  openModal() {
    modalContent.innerHTML = "";

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");

    detailsDiv.append(this.paragraph(" ", this.title, "bird-title"));
    detailsDiv.append(this.paragraph("Size", this.size, "bird-size"));
    detailsDiv.append(this.paragraph("Food", this.food, "bird-food"));
    detailsDiv.append(this.paragraph("Habitat", this.habitat, "bird-habitat"));
    detailsDiv.append(this.paragraph("Lifespan", this.lifespan, "bird-lifespan"));
    detailsDiv.append(this.paragraph("Interesting Fact", this.interestingFact, "bird-fact"));

    modalContent.append(detailsDiv);

    const birdImage = this.picture(this.pic);
    birdImage.style.width = "100%";
    modalContent.append(birdImage);

    modal.style.display = 'flex';
  }
}

const birds = [];
 birds.push(new Bird("Hummingbird", "3-5 inches", "Spiders, small insects, and nectar from flower", "Tropical", "3-5 years", "The only bird that can fly backwards", "vertical-shot-hummingbird-perched-tree-branch.jpg"));
birds.push(new Bird("Blue Jay", "9-12 inches", "seeds, nuts, insects, and acorns", "Forests and Parks", "7 years", "Very intelligent and being able to mimic other birds calls", "bluejay.jpg"));
birds.push(new Bird("Cardinal", "8.5-9.5 inches", "Seeds, Fruits, and Insects", "gardens, and wooded areas", "3-5 years", "When a cardinal is seen it's commonly known that a passed loved one is watching over you", "cardnal.jpg"));
birds.push(new Bird("Robin", "9-11 inches", "insects, worms, and berries", "gardens, parks, forests", "2-6 years", "They are able to hear the sound of earthworms moving within the soil", "robin.jpeg"));

birds.forEach((bird) => {
  document.getElementById("bird-list").append(bird.item);
});
