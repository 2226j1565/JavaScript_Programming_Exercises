class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }

  describe() {
    return `${this.name} is a ${this.age}-year-old ${this.color} animal with ${this.legs} legs.`;
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }

  makeSound() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }

  makeSound() {
    console.log(`${this.name} meows.`);
  }
}
const dog = new Dog('Rex', 5, 'brown', 4, 'Labrador');
const cat = new Cat('Whiskers', 3, 'black', 4, 'Siamese');

console.log(dog.describe());
dog.makeSound();

console.log(cat.describe());
cat.makeSound();

class Statistics {
  constructor(data) {
    this.data = data;
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((acc, num) => acc + num, 0);
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
    }
    return sorted[mid];
  }

  mode() {
    const frequency = {};
    let maxFreq = 0;
    let mode = [];

    for (const num of this.data) {
      frequency[num] = (frequency[num] || 0) + 1;
      if (frequency[num] > maxFreq) {
        maxFreq = frequency[num];
        mode = [num];
      } else if (frequency[num] === maxFreq) {
        mode.push(num);
      }
    }

    return { mode, count: maxFreq };
  }

  variance() {
    const mean = this.mean();
    const squaredDiffs = this.data.map(num => (num - mean) ** 2);
    return squaredDiffs.reduce((acc, val) => acc + val, 0) / this.count();
  }

  std() {
    return Math.sqrt(this.variance());
  }

  percentile(p) {
    const sorted = [...this.data].sort((a, b) => a - b);
    const index = Math.ceil((p / 100) * sorted.length) - 1;
    return sorted[index];
  }

  freqDist() {
    const frequency = {};
    for (const num of this.data) {
      frequency[num] = (frequency[num] || 0) + 1;
    }
    return Object.entries(frequency).map(([key, value]) => [parseFloat(key), value]);
  }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);

console.log('Count:', statistics.count()); 
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min()); 
console.log('Max: ', statistics.max()); 
console.log('Range: ', statistics.range()); 
console.log('Mean: ', statistics.mean());
console.log('Median: ', statistics.median());
console.log('Mode: ', statistics.mode()); 
console.log('Variance: ', statistics.variance()); 
console.log('Standard Deviation: ', statistics.std());
console.log('Percentile 90: ', statistics.percentile(90));
console.log('Frequency Distribution: ', statistics.freqDist());

