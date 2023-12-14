class Enemy {
    constructor(name, hp, damage, armor, xp) {
      this.name = name
      this.hp = hp
      this.damage = damage
      this.armor = armor
      this.xp = xp
    }
  
    isAlive(){
      return this.hp > 0
    }
  }
  
  class GiantSpider extends Enemy {
    constructor(name, hp, damage, armor, xp){
      super(name="Giant Spider", hp=15, armor=2, damage=5, xp=7)
    }
  }

  class Rats extends Enemy {
    constructor(name, hp, damage, armor, xp){
      super(name="Rats", hp=4, damage=1, armor=0 ,xp=1)
    }
  }

  class Undead extends Enemy {
    constructor(name, hp, damage, armor, xp){
      super(name="Undead", hp=8, damage=3, armor=1, xp=2)
    }
  }