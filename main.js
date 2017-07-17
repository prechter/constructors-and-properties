'use strict';

// Dog Constructor & Prototype
function Dog (status, color, hungry, owner) {
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog ('normal', 'black', false, 'Mason');
let moonshine = new Dog (null, null, true, undefined);
let atticus = new Dog (undefined, undefined, undefined, undefined);



// Human Constructor & Prototype
function Human (cool) {
  this.pet = function (dog) {
    dog.status = 'happy';
  }
  this.feed =  function (dog) {
    dog.hungry = false;
  }
  this.cool = cool;
}

// Instances of Human
// Needed: mason, julia

let mason = new Human (false);
let julia = new Human (true);
