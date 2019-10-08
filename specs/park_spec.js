const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dino1;
  let dino2;
  let jurassicPark;

  beforeEach(function () {
    dino1 = new Dinosaur('T-rex', 'carnivore', 100)
    dino2 = new Dinosaur('Triceratops', 'herbivore', 50);
    jurassicPark = new Park('Jurassic Park', 500);
  })

  it('should have a name', function () {
    const actual = jurassicPark.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function () {
    const actual = jurassicPark.price;
    assert.strictEqual(actual, 500)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = jurassicPark.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function () {
    jurassicPark.newDino(dino1);
    jurassicPark.newDino(dino2);
    const actual = jurassicPark.dinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    jurassicPark.newDino(dino1);
    jurassicPark.newDino(dino2);
    jurassicPark.removeDino(dino1);
    const actual = jurassicPark.dinosaurs;
    assert.deepStrictEqual(actual, [dino2])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    jurassicPark.newDino(dino1);
    jurassicPark.newDino(dino2);
    const actual = jurassicPark.greatestAttraction();
    assert.deepStrictEqual(actual, dino1)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    jurassicPark.newDino(dino1);
    jurassicPark.newDino(dino2);
    const actual = jurassicPark.findSpecies('carnivore');
    assert.strictEqual(actual, dino1)
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
