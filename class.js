

class Instructor {

    name;
    degignation = 'web development programming hero';
    team = 'web-programming';

    constructor(p, q) {
        this.name = p;
        this.location = q;
    }

    arrangeSupportSystem(time) {
        console.log(`start the support session at ${time}`);
    }

    setQuizAtModule(module) {
        console.log(`please create module for ${module}`);
    }
    location;
}

const object = new Instructor('jhankar', 'online');
console.log(object);
object.arrangeSupportSystem('5:00 PM');
object.setQuizAtModule(10);