class Item { 
    constructor(name, description, value){
       this.name = name
       this.description = description
       this.value = value
       this.pickedUp = false
     }
   }

   class Gold extends Item {
    constructor(name, description, amt){
      super("Gold", "Gold currency stamped with the seal of the kingdom.",amt)
      this.amt = amt
    }
  }


  
  // ****** ARMOR **********
  class Armor extends Item {
    constructor(name, description, value, armorAdded, strengthReq, magicReq){
      super(name, description,value)
      this.armorAdded = armorAdded
      this.strengthReq = strengthReq
      this.magicReq = magicReq
    }
  }

  class Cloak extends Armor {
    constructor(name, description, value, armorAdded, strengthReq, magicReq){
      super("Cloak", "A thin cloak to prevent just the most minor scratches.", 0, 1, 0, 0)
    }
  }

  class LightArmor extends Armor {
    constructor(name, description, value, armorAdded, strengthReq, magicReq){
      super("Light Armor", "A thin chest plate to provide minor protection.", 7, 2, 7, 0)
    }
  }

  class DivineArmor extends Armor {
    constructor(name, description, value, armorAdded, strengthReq, magicReq){
      super("Divine Armor", "A magical armor with divine powers to help protect one's self.", 18, 5, 3, 20)
    }
  }

  // ****** WEAPONS **********
  class Weapon extends Item {
    constructor(name, description, value, damage, strengthReq, magicReq){
      super(name, description,value)
      this.damage = damage
      this.strengthReq = strengthReq
      this.magicReq = magicReq
    }
  }

  class Rock extends Weapon {
    constructor(name, description, value, damage, strengthReq, magicReq){
      super("Rock", "A fist-sized rock, suitable for smashing things.", 0, 1, 0, 0)
    }
  }
  
  class Dagger extends Weapon {
    constructor(name, description, value, damage, strengthReq, magicReq){
      super("Dagger", "An old dagger with some rust on it.", 1, 3, 1, 0)
    }
  }

  class SmallSword extends Weapon {
    constructor(name, description, value, damage, strengthReq, magicReq){
      super("Small Sword", "An old dagger with some rust on it.", 4, 6, 5, 0)
    }
  }

  class TwoHandedBattleAxe extends Weapon {
    constructor(name, description, value, damage, strengthReq, magicReq){
      super("Two-Handed Battle Axe", "A mammoth axe only capable of being dual-wielded.", 100, 50, 10, 0)
    }
  }

  class MagicScepter extends Weapon {
    constructor(name, description, value, damage, strengthReq, magicReq){
      super("Magic Scepter", "A scepter flush with magic powers.", 75, 75, 3, 10)
    }
  }