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
  let highestGuestDino
  let dino;
  let sortedGuest = [];
  let dinos = this.dinosaurs
  for (dino of dinos) {
    sortedGuest.push(dino.guestsAttractedPerDay)
  }
  sortedGuest.sort(function(a, b){return b-a});
  for (dino of dinos) {
    if (dino.guestsAttractedPerDay === sortedGuest[0]) {
      highestGuestDino = dino
    }
  }
  return highestGuestDino
}

Park.prototype.findDiet = function (diet) {
  let dietDino = [];
  let dino;
  let dinos = this.dinosaurs
  for (dino of dinos) {
    if (dino.diet === diet) {
      dietDino.push(dino)
    }
  }
  return dietDino
}

Park.prototype.dailyVisitors = function () {
  let total = 0;
  let dino;
  let dinos = this.dinosaurs;
  for ( dino of dinos) {
    total += dino.guestsAttractedPerDay
  }
  return total
}

module.exports = Park;
