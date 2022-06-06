class Circle {
    constructor (radius = 1.0, color = "black" ){
        this.radius = radius;
        this.color = color;
    }
circlea(a){
   this.radius = a;
}
circleb(b,c){
    this.radius = b;
    this.color = c;
}
getRadius(){
    return this.radius;
}
getcolor(){
    return this.color;
}
setColor(colr){
    this.color = colr;
}
getArea(){
    let d = 3.14*this.radius*this.radius;
    return d;
}
getCircumc(){
    let e = 2*3.14*this.radius;
    return e;
}
}
console.log(aa.circlea(5));
console.log(aa.circleb(6,"Maybach"));
let aa = new Circle(2,3);
console.log(aa.getRadius());