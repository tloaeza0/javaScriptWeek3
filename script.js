//EASY


function exerciseOption(x){
    console.log(`Todays exercise is: ${x}`);
    
}
const exercise1 = exerciseOption("swimming");
const exercise2 = exerciseOption("running");



//MEDIUM
function cutPizzaSlices (x){
    const pizza = 8 / (x);
    const total = function(){
        return `each person gets ${pizza} slices of pizza`;
    }
    return total();
}
console.log(cutPizzaSlices(2));
console.log(cutPizzaSlices(3));





//HARD
const data = (function(){
    const pii = {
        name:"Teresa",
        SSN: 289014424,
    };
    return {
        getName: function(){
            console.log(pii.name);
            console.log(this.SSN)
        },
    }
})();
data.getName();








//VERY HARD
class Person{
    constructor (name, job , age){
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise(x){
        console.log(`${(x)} is my favorite form of exercise`);
    }
    fetchJob(){
        console.log(`${this.name} is a ${this.job}`);
    }
}
// const tita = new Person ("Teresa", "full stack developer", 18);
// tita.exercise("weight lifting");

class Programmer{
    constructor(name, job, age, languages){
        this.name = name;
        this.job = job;
        this.age = age;
        this.languages = languages;
        this.busy = true;
    }
    completeTask(){
        this.busy = false;
    }
    acceptNewTask(){
        this.busy = true;
    }
    offerNewtask(){
        let task = this.busy ? `${this.name} can't accept any new tasks right now` : `${this.name} would love to take on a new task`;
        console.log(task);
    }
    learnLanguage(x){
        this.languages.push(x);
    }
    listLanguages(){
        console.log(this.languages);
    }
}
const teresa = new Programmer("Teresa", "full stack devloper", 18, ["css", "html", "python"]);
console.log(teresa);
teresa.offerNewtask();
teresa.learnLanguage("Javascript");
teresa.listLanguages();
console.log(teresa);

// const vane = new Programmer("vanessa", "front end dev", 24, ["css", "html", "javascript"]);
// console.log(vane);


