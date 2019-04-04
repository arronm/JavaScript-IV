/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject (props) {
  this.createdAt = props.createdAt;
  this.name = props.name;
  this.dimensions = props.dimensions;
}

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats (props) {
  GameObject.call(this, props);
  this.healthPoints = props.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function (damage) {
  this.healthPoints = this.healthPoints - damage;
  return `${this.name} took damage.`;
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid (props) {
  CharacterStats.call(this, props);
  this.team = props.team;
  this.weapons = props.weapons;
  this.language = props.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`;
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage(3)); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  function Villain (props) {
    Humanoid.call(this, props);
  }
  Villain.prototype = Object.assign(Humanoid.prototype);
  
  function Hero (props) {
    Humanoid.call(this, props);
  }
  Hero.prototype = Object.assign(Humanoid.prototype);

  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // NOTE: Should probably create an 'Attack' constructor or object property and then assign new Attacks to the hero and villain, but pair programming has left me no time
  Villain.prototype.evilBeam = function (target) {
    this.target = target;
    this.damage = Math.floor(Math.random() * 10);
    target.takeDamage(this.damage);
    if (target.healthPoints <= 0) {
      target.destroy();
      return `${this.name} has won the battle!`;
    }
    return `${this.name} hit ${this.target.name} for ${this.damage}`;
  };

  Hero.prototype.acidBreath = function (target) {
    this.target = target;
    this.damage = Math.floor(Math.random() * 10);
    target.takeDamage(this.damage);
    if (target.healthPoints <= 0) {
      target.destroy();
      return `${this.name} has won the battle!`;
    }
    return `${this.name} hit ${this.target.name} for ${this.damage}`;
  };

  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  let Trok = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 7,
    },
    healthPoints: 20,
    name: 'Trok',
    team: 'Good Guys',
    weapons: [
      'Battleaxe',
      'Acid Breath',
    ],
    language: 'Draconic',
  });

  const Verc = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 5,
    },
    healthPoints: 20, /*?*/
    name: 'Verc',
    team: 'Bad Guys',
    weapons: [
      'Claws',
      'evilBeam'
    ],
    language: 'Common',
  });

  // TODO: implement while loop until there is a winner
  while (Trok.healthPoints > 0 && Verc.healthPoints > 0) {
    if (Trok.acidBreath(Verc).match('won the battle!')) {
      console.log('Trok has valiantly won the battle!');
    } else if (Verc.evilBeam(Trok).match('won the battle!')) {
      console.log('Oh no! Our hero, Trok, has been defeated by the evil villain Verc! Who will protect us now, take cover in your homes!');
    }
    console.log(`Trok's health: ${Trok.healthPoints}, Verc's health: ${Verc.healthPoints}`);
  }
