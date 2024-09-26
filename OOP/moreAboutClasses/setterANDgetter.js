class Student{
    #firstName;
    #lastName;
    #track;

    static counter =0;

    constructor(firstname, lastname, track){
        this.#firstName = firstname;
        this.#lastName = lastname;

        switch(track){
            case "Python":
            case "Ruby":
            case "JavaScript":
                this.#track = track;
                break;
            default:
                throw new Error(`Invalid track: ${track}`);

        }

        Student.counter++;
    }

    get name(){
        return [this.#firstName, this.#lastName]
    }

    get firstname(){
        return this.#firstName;
    }

    get lastname(){
        return this.#lastName;
    }

    get track(){
        return this.#track;
    }

    set track(newTrack){
        
        switch(newTrack){
            case "python":
            case "Ruby":
            case "JavaScript":
                this.#track = newTrack;
                break;
            default:
                throw new Error(`Invalid track: ${newTrack}`)
        }
    }
}

let student1 = new Student("Yared", "Mekonnen", "JavaScript");

console.log(student1.firstname)
console.log(student1.name.join(' '));
console.log(Student.counter);