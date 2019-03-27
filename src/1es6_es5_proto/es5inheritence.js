function Vehicle (name, type) {
    this.name = name;
    this.type = type;
  };
   
  Vehicle.prototype.getName = function() {
    return this.name;
  };
   
  Vehicle.prototype.getType = function() {
    return this.type;
  };

  function Car (name) {
    Vehicle.call(this, name, "car");
  }

  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  
  Car.prototype.getName = function () {
    return 'It is a car: '+ this.name;
  };
  var car = new Car('Tesla');
  console.log(car.getName()); // It is a car: Tesla
  console.log(car.getType()); // car