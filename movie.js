class Movie {
    constructor (title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        }
        getDetails(){
            return `The movie name is ${this.title}, the production studio is ${this.studio} and the rating is ${this.rating}`;
        }
        getPG(){
            if(this.rating == "PG")
                b.push(this.title);   
            return b; 
        }
}
const batman = new Movie("Batman", "Warner Bros",);
const johnwick = new Movie("Johnwick","summit Entertainment","R");
const spiderman = new Movie("Spider-Man", "Sony Pictures", "PG");
console.log(spiderman.getDetails());
let a = [johnwick,batman,spiderman];
let b = [];
for(let i in a)
    a[i].getPG();
console.log(b);