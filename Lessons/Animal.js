// # Design exercise

// ## Animal Simulation

// ### What we are looking for
// - Not implementing things there is no requirement for.
// - Minimally implementing features one at a time.
// - Being able to operate in red/green/refactor style.
// - Understanding of design principles.

// ### Testing in coderpad
// - Choose a [programming language](https://coderpad.io/languages) in coderpad
// - [testing in coderpad](https://github.com/cjdev/interview-preparation/blob/master/coderpad-testing.md)

// ### Problem statement
// You are tasked with writing the logic for our animal simulator application.
// Animals react to different situations by changing their state, making sounds, or both.
// Sounds made by an animal are sent to a sound emitter whose implementation is out of scope for this exercise.
// You will still have to test that the correct sounds are being sent, so use a fake, stub, or mock for the sound emitter.

// While it isn't necessarily wrong to constructor-inject the sound emitter,
// for the purposes of this exercise, assume the sound emitter will not be available until after animals are constructed,
// so send the sound emitter as a parameter to the function or method instead

// - Given a bunch of animals (for example, cats and dogs).
// - When something happens to those animals (for example, they see someone, someone annoys them, or someone pets them).
// - Then ensure that the sound emitter makes the appropriate sounds and each animal has its state updated.

// ### Requirements
// Release 1, how animals behave when they see someone
// - When a cat sees someone, it makes a "meow" sound
// - When a dog sees someone, it makes a "bark" sound
// - Multiple animals see someone
//     - Given several animals
//     - When they see someone
//     - Then the appropriate sounds are emitted

// Release 2, how animals behave when they are annoyed
// - When someone annoys a cat, its wagging tail state becomes true
// - When someone annoys a dog, it makes a "growl" sound
// - Multiple animals are annoyed
//     - Given several animals
//     - When they are annoyed
//     - Then the appropriate sounds are emitted and states are changed

// Release 3, how animals behave when someone pets them
// - When someone pets a cat, its purring state becomes true and it makes a "purr" sound
// - When someone pets a dog, it tail wagging state becomes true
// - Multiple animals are pet by someone
//     - Given several animals
//     - When they are pet by someone
//     - Then the appropriate sounds are emitted and states are changed

class soundEmitter {
  constuctor;
}

class Animal {
  constructor(name) {
    this.name = name;
  }

  seeSomeone() {
    throw new Error("see someone must be implemented in subclass");
  }
}

class Cat extends Animal {
  seeSomeone() {}
}

class Dog extends Animal {}
