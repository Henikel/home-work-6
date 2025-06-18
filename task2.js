let car1 = {
  model: "Toyota",
  speed: 120,
  run: function () {
    console.log(this.model + " їде зі швидкістю " + this.speed);
  },
  stop: function () {
    console.log(this.model + " зупинилася");
  }
};

let car2 = {};
car2["model"] = "BMW";
car2["speed"] = 150;
car2["run"] = function () {
  console.log(this.model + " їде зі швидкістю " + this.speed);
};
car2["stop"] = function () {
  console.log(this.model + " зупинилася");
};

let model = "Audi";
let speed = 180;
let car3 = {
  model,
  speed,
  run() {
    console.log(this.model + " їде зі швидкістю " + this.speed);
  },
  stop() {
    console.log(this.model + " зупинилася");
  }
};