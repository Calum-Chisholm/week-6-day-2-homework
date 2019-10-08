const Park = function (name, price, dinosaurs) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
}

Park.prototype.newDino = function (dino) {
  this.dinosaurs.push(dino)
}

Park.prototype.removeDino = function (dino) {
    const index = this.dinosaurs.indexOf(dino);
    if (index > -1) {
       this.dinosaurs.splice(index, 1);
     }
}

Park.prototype.greatestAttraction = function () {
  let dino;
  let dinos = this.dinosaurs
  for (dino of dinos) {
    if (dino.guestsAttractedPerDay > dino.guestsAttractedPerDay) {
    }
  }
  return dino
}

Park.prototype.findSpecies = function (species) {
  let dino;
  let dinos = this.dinosaurs
  for (dino of dinos) {
    if (dino.species === species) {
    }
  }
  return dino
}



module.exports = Park;
