// 咖啡机
// oo 面向对象 属性和方法
var Coffee = function() {

}
Coffee.prototype.boilWater = function() {
    console.log('lalala1');
}
Coffee.prototype.brewCoffeeGriends = function() {
    console.log('lalala2');
}
Coffee.prototype.pourInCup = function() {
    console.log('lalala3');
}
Coffee.prototype.addSugarAndMilk = function() {
    console.log('lalala4');
}
Coffee.prototype.cook = function() {
    this.boilWater;
    this.brewCoffeeGriends;
    this.pourInCup;
    this.addSugarAndMilk;
}
new coffee = new Coffee();
coffee.cook();