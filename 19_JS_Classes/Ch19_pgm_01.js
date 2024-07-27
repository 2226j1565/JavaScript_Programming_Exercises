class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    describe() {
        return `${this.name} is a ${this.age} years old ${this.color} animal with ${this.legs} legs.`;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}
class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs);
        this.breed = breed;
    }

    describe() {
        return `${this.name} is a ${this.age} years old ${this.color} ${this.breed} with ${this.legs} legs.`;
    }

    speak() {
        return `${this.name} barks.`;
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs);
        this.breed = breed;
    }

    describe() {
        return `${this.name} is a ${this.age} years old ${this.color} ${this.breed} with ${this.legs} legs.`;
    }

    speak() {
        return `${this.name} meows.`;
    }
}
class Statistics {
    constructor(data) {
        this.data = data;
    }

    count() {
        return this.data.length;
    }

    sum() {
        return this.data.reduce((acc, val) => acc + val, 0);
    }

    min() {
        return Math.min(...this.data);
    }

    max() {
        return Math.max(...this.data);
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return this.sum() / this.count();
    }

    median() {
        const sorted = [...this.data].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        if (sorted.length % 2 === 0) {
            return (sorted[mid - 1] + sorted[mid]) / 2;
        } else {
            return sorted[mid];
        }
    }

    mode() {
        const frequency = {};
        let maxFreq = 0;
        let mode = null;

        this.data.forEach(value => {
            frequency[value] = (frequency[value] || 0) + 1;
            if (frequency[value] > maxFreq) {
                maxFreq = frequency[value];
                mode = value;
            }
        });

        return { mode, count: maxFreq };
    }

    var() {
        const mean = this.mean();
        const squaredDiffs = this.data.map(value => Math.pow(value - mean, 2));
        return squaredDiffs.reduce((acc, val) => acc + val, 0) / this.count();
    }

    std() {
        return Math.sqrt(this.var());
    }

    freqDist() {
        const frequency = {};
        this.data.forEach(value => {
            frequency[value] = (frequency[value] || 0) + 1;
        });

        return Object.entries(frequency).map(([key, value]) => [parseFloat(key), value]);
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);

console.log('Count:', statistics.count()); 
console.log('Sum:', statistics.sum()); 
console.log('Min:', statistics.min()); 
console.log('Max:', statistics.max()); 
console.log('Range:', statistics.range()); 
console.log('Mean:', statistics.mean()); 
console.log('Median:', statistics.median());
console.log('Mode:', statistics.mode());
console.log('Variance:', statistics.var());
console.log('Standard Deviation:', statistics.std()); 
console.log('Frequency Distribution:', statistics.freqDist());
