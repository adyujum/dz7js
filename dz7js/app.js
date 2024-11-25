class Cars {
    constructor(options) {
        this.model = options.model;
        this.color = options.color;
        this.wheels = options.wheels;
    }

    start() {
        console.log(`Машина ${this.model} заведена.`);
    }
}

class Sedan extends Cars {
    constructor(options) {
        super(options);
        this.trunkVolume = options.trunkVolume;
    }
}

class SUV extends Cars {
    constructor(options) {
        super(options);
        this.driveType = options.driveType;
    }
}

class Pickup extends Cars {
    constructor(options) {
        super(options);
        this.bedLength = options.bedLength;
    }
}

const sedan = new Sedan({
    model: "Toyota Camry",
    color: "white",
    wheels: 4,
    trunkVolume: "500 liters",
});

const suv = new SUV({
    model: "Jeep Wrangler",
    color: "black",
    wheels: 4,
    driveType: "4WD",
});

const pickup = new Pickup({
    model: "Ford F-150",
    color: "red",
    wheels: 4,
    bedLength: "2 meters",
});

console.log(sedan);
sedan.start();

console.log(suv);
suv.start();

console.log(pickup);
pickup.start();




class Traffic {
    constructor() {
        this.red = document.querySelector("#red");
        this.yellow = document.querySelector("#yellow");
        this.green = document.querySelector("#green");
    }


    turnOn(color) {
        this.resetLights();
        if (color === 'красный') {
            this.red.classList.add('active');
            this.red.textContent = 'Стой';
        } else if (color === 'желтый') {
            this.yellow.classList.add('active');
            this.yellow.textContent = 'Жди';
        } else if (color === 'зеленый') {
            this.green.classList.add('active');
            this.green.textContent = 'Иди';
        } else {
            alert('красный, желтый , зеленый');
        }
    }


    resetLights() {
        this.red.classList.remove('active');
        this.red.innerHTML = '';
        this.yellow.classList.remove('active');
        this.yellow.innerHTML = '';
        this.green.classList.remove('active');
        this.green.innerHTML = '';
    }
}


const traffic = new Traffic();

const Color = prompt('Введите цвет светофора: красный, желтый или зеленый').toLowerCase().trim();


traffic.turnOn(Color);