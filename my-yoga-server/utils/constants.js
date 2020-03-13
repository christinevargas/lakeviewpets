const Chance = require('chance')

function createPets(num) {
    const names = []
    const chance = new Chance()
    for (let i = 0; i < num; ++i) {
      const name = chance.first()
      names.push(name)
    }
    return names
  }

  