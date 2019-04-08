/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
  constructor (props) {
    this.createdAt = props.createdAt;
    this.name = props.name;
    this.dimensions = props.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game`;
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
  constructor (props) {
    super(props);
    this.healthPoints = props.healthPoints;
  }

  takeDamage(damage) {
    this.healthPoints = this.healthPoints - damage;
    return `${this.name} took ${damage} damage`;
  }
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

class Humanoid extends CharacterStats {
  constructor (props) {
    super(props);
    this.team = props.team;
    this.weapons = props.weapons;
    this.language = props.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
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

  class Antagonist extends Humanoid {
    constructor (props) {
      super(props);
    }

    attack(target) {
      const damage = Math.floor(Math.random() * 10);
      target.takeDamage(damage);
      if (target.healthPoints <= 0) {
        target.destroy();
        return `${this.name} has won the battle!`;
      }
      return `${this.name} hit ${target.name} for ${damage}`
    }
  }

  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  let Trok = new Antagonist({
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

  const Verc = new Antagonist({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 5,
    },
    healthPoints: 20,
    name: 'Verc',
    team: 'Bad Guys',
    weapons: [
      'Claws',
      'evilBeam'
    ],
    language: 'Common',
  });

  while (Trok.healthPoints > 0 && Verc.healthPoints > 0) {
    if (Trok.attack(Verc).match('won')) {
      console.log('Trok has valiantly won the battle!');
    } else if (Verc.attack(Trok).match('won')) {
      console.log('Oh no! Our hero, Trok, has been defeated by the evil villain Verc! Who will protect us now, take cover in your homes!');
    }
    console.log(`Trok's health: ${Trok.healthPoints}, Verc's health: ${Verc.healthPoints}`);
  }
