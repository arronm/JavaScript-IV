/*

  * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
  * Lambda personnel can be broken down into three different types of `people`.
    * **Instructors** - extensions of Person
    * **Students** - extensions of Person
    * **Project Managers** - extensions of Instructors
  * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:
  * 
  * #### Person

  * First we need a Person class. This will be our `base-class`
  * Person receives `name` `age` `location` `gender` all as props
  * Person receives `speak` as a method.
  * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

  #### Instructor

  * Now that we have a Person as our base class, we'll build our Instructor class.
  * Instructor uses the same attributes that have been set up by Person
  * Instructor has the following unique props:
    * `specialty` what the Instructor is good at i.e. 'redux'
    * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
    * `catchPhrase` i.e. `Don't forget the homies`
  * Instructor has the following methods:
    * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
    * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

  #### Student

  * Now we need some students!
  * Student uses the same attributes that have been set up by Person
  * Student has the following unique props:
    * `previousBackground` i.e. what the Student used to do before Lambda School
    * `className` i.e. CS132
    * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
  * Student has the following methods:
    * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
    * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
    * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

  #### Project Manager

  * Now that we have instructors and students, we'd be nowhere without our PM's
  * ProjectManagers are extensions of Instructors
  * ProjectManagers have the following unique props:
    * `gradClassName`: i.e. CS1
    * `favInstructor`: i.e. Sean
  * ProjectManagers have the following Methods:
    * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
    * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

*/

// CODE here for your Lambda Classes

/**
 * Class representing a person.
 */
class Person {
  /**
   * Create a person
   * @param {object} props - Properties to initialize the class with.
   * @param {string} props.name - The person's name.
   * @param {number} props.age - The person's age.
   * @param {string} props.location - The person's location.
   * @param {string} props.gender - The person's gender.
   */
  constructor (props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }

  /**
   * Log a cordial greeting based on instance properties.
   * @return {undefined}
   */
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

/**
 * Class representing an instructor.
 * @extends Person
 */
class Instructor extends Person {
  /**
   * Create an instructor.
   * @param {object} props - Properties to initialize the class with.
   * @param {string} props.specialty - What the Instructor is good at e.g. 'redux'.
   * @param {string} props.favLanguage - Instructor's favorite language e.g. 'Javascript'.
   * @param {string} props.catchPhrase - Instructor's catch phrase e.g. 'This is super powerful'.
   */
  constructor (props) {
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

   /**
    * Creates and logs a demo string.
    * @param {string} subject - Subject for the demo being given e.g. 'Javascript III'.
    * @return {undefined}
    */
   demo(subject) {
     console.log(`Today we are learning about ${subject}`);
   }

   /**
    * Logs out a student's grade on a specific subject.
    * @param {string} student - Name of the student being graded.
    * @param {string} subject - Subject the student is being graded on.
    * @return {undefined}
    */
   grade() {
     return `${student} receives a perfect score on ${subject}`
   }
}

/**
 * Class representing a project manager.
 * @extends Instructor
 */
class ProjectManager extends Instructor {
  /**
   * Creates an instructor.
   * @param {object} props - Properties to initialize the class with.
   * @param {string} props.gradClassName - Class the project manager was in e.g. CS1.
   * @param {string} props.favInstructor - Project manager's favorite instructor e.g. Josh Knell.
   */
  constructor (props) {
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  /**
   * Method that takes a slack channel and logs a channel message.
   * @param {string} channel - Slack channel to message.
   * @return {undefined}
   */
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standup time!`);
  }

  /**
   * Method that takes a student object and a subject and logs debugging message.
   * @param {object} student - Student instance that requires assistance debugging code.
   * @param {string} subject - Name of the subject that the student is learning.
   * @return {undefined}
   */
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

/**
 * Class representing a student.
 * @extends Person
 */
class Student extends Person {
  /**
   * Creates a student.
   * @param {object} props - Properties to initialize the class with.
   * @param {string} props.previousBackground - What the student used to do before Lambda School.
   * @param {string} props.className - Class the student is enrolled in i.g. Web19.
   * @param {string[]} props.favSubjects - An array of the student's favorite subjects e.g. ['Html', 'CSS', 'JavaScript'].
   */
  constructor (props) {
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
  }

  /**
   * Method that iterates over a student's favorite subjects and logs them out.
   * @return {undefined}
   */
  listsSubjects() {
    this.favSubjects.forEach((subject) => {
      console.log(subject);
    });
  }

  /**
   * Method which will log out that a student has submitted a pull request for the subject they're studying.
   * @param {string} subject - Subject the student is submitting a pull request for.
   * @return {undefined}
   */
  prAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  /**
   * Method which will log out that a student has started a sprint challenge for the subject they're studying.
   * @param {string} subject - Subject the student is starting their sprint challenge for.
   * @return {undefined}
   */
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}
