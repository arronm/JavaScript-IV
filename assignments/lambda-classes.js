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
   * @param {name} name - The person's name.
   * @param {age} age - The person's age.
   * @param {location} location - The person's location.
   * @param {gender} gender - The person's gender.
   */
  constructor (props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }

  /**
   * Get a cordial greeting based on instance properties
   * @return {string} A cordial greeting with name and location.
   */
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor {

}

class ProjectManager {

}

class Student {

}
