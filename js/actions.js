class Action {
    constructor(method,name){
      this.method = method
      this.name = name
    }
  }
  
  class ViewInventory extends Action {
    constructor(method,name){
      super(method=player.toggleInventoryTable,name="View Inventory")
    }
  }
  
  class MoveSouth extends Action {
    constructor(method,name){
      super(method=player.moveSouth,name="Move south")
    }
  }
  
  class MoveNorth extends Action {
    constructor(method,name){
      super(method=player.moveNorth,name="Move north")
    }
  }
  
  class MoveEast extends Action {
    constructor(method,name){
      super(method=player.moveEast,name="Move east")
    }
  }
  
  class MoveWest extends Action {
    constructor(method,name){
      super(method=player.moveWest,name="Move west")
    }
  }
  
  class Attack extends Action {
    constructor(method,name,enemy){
      super(method=player.attack,name="Attack")
      this.enemy = enemy
    }
  }  

  class Flee extends Action {
    constructor(method,name,tile){
      super(method=player.flee,name="Flee")
      this.tile = tile
    }
  }