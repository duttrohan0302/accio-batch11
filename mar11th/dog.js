class Dog{

    constructor(name,birthday){
        this.name = name;
        this.birthday = birthday;
    }

    //Protected variable
    _attendance = 0;

    // Private variable
    #vaccinationStatus = false

    calcAge(){
        return Date.now()-this.birthday
    }

    getAge(){
        return this.calcAge()
    }

    bark(){
        console.log("Woof!")
    }

    updateAttendance(){
        this._attendance++;
    }

    //Method Overloading
    updateAttendance(x){
        this._attendance = this._attendance+x;
    }

    getAttendance(){
        this._attendance;
        // console.log(this._attendance)
    }

}


const rufus = new Dog("Rufus","2/1/2017")
rufus.bark()
rufus.updateAttendance()
rufus.updateAttendance(5)


class HerdingDog extends Dog{
    constructor(name,birthday){
        super(name,birthday);
    }

    herd(){
        return console.log("Stay Together")
    }
}

class TrackingDog extends Dog{
    constructor(name,birthday){
        super(name,birthday);
    }

    track(){
        return console.log("Searching")
    }

    // Method Overriding
    bark(){
        // because we want this to be different that bark func of Dog
        console.log("Found it!")
    }
}

// const rufus = new Dog("Rufus","2/1/2017")

const fluffy = new HerdingDog("Fluffy","1/12/2020")
// fluffy.bark()
// fluffy.herd()

const coop = new TrackingDog("Cooper","7/20/2020")
// coop.track()
// coop.bark()
// const func1 = (a,b) => {
//     return a+b;
// }

// const func1 = (a,b,c) => {
//     return a+b+c;
// }
