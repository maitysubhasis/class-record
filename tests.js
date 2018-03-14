const Record = require('.')

const DEFAULTS = Record({
  name: '',
	color: '',
	defaults: {
		legs: 2,
		eys: 2,
		color: 'red'
	}
})

class Parrot extends DEFAULTS() {}

const parrot1 = new Parrot({
  name: 'jo',
  color: 'blue'
})

const parrot2 = new Parrot({
  name: 'ro'
})

console.log(parrot1.name, parrot1.color, parrot1.legs)
console.log(parrot2.name, parrot2.color, parrot2.legs)
