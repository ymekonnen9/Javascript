class Person {
    #name;
    #age;
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
  
    showAge() {
      console.log(this.#age);
    }

    set age(value){
        if(value<0){
            throw new Error();
        }
        this.#age = value;
    }
  }
  
  let person = new Person('John', 30);
  person.showAge(); 
  person.age = 31;
  person.showAge(); 
  
  try {
    person.age = -5;
    person.showAge(); 
  } catch (e) {
    console.log('RangeError: Age must be positive');
  }