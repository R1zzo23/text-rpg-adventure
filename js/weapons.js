class Weapon extends Item {
    constructor(name, description, value, damage){
  
      super(name, description,value)
  
      this.damage = damage
  
    }
  }

  class Rock extends Weapon {
    constructor(name, description, value, damage){
  
      super("Rock", "A fist-sized rock, suitable for smashing things.", 0, 5)
  
    }
  }
  
  
  class Dagger extends Weapon {
    constructor(name, description, value, damage){
  
      super("Dagger", "An old dagger with some rust on it.", 1, 10)
  
    }
  }