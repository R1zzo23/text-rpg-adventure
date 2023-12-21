class Player {

    constructor(inventory,hp,xp,strength,armor,magic,location_x,location_y,victory){
      this.inventory = [new Gold(),new Rock(),new Cloak()]
      this.equippedWeapon = null
      this.equippedArmor = null
      this.hp = 100
      this.xp = 0
      this.nextLevelXP = 25
      this.strength = 7
      this.magic = 5
      this.location_x = startPosition[0]
      this.location_y = startPosition[1]
      this.victory = false
      this.lastMove = null
      this.inBattle = false
      this.hasRock = true

      this.equipBestArmor()
      this.equipBestWeapon()
    }
  
    isAlive(){
      return this.hp > 0
    }
  
    do_action(action, ...others){
    }

    addGold(num) {
      this.inventory.find((element) => element.name == "Gold").amt += num
    }

    toggleInventoryTable() {
      console.log(player.inventory)
      if (inventoryTable.hasAttribute('hidden')) {
        inventoryTable.removeAttribute('hidden')
        player.printInventory()
      }
      else {
        inventoryTable.setAttribute('hidden', 'hidden')
      }
    }

    printInventory(){
      this.equipBestArmor();
      this.equipBestWeapon();
      //let text = "Inventory:"
      let tableWeaponText = "<tr><td id='weaponsHeader' colspan='3'>Weapons</td></tr>"
      let tableArmorText = "<tr><td id='armorHeader' colspan='3'>Armors</td></tr>"
      let tableMiscellaneousText = "<tr><td id='miscHeader' colspan='3'>Miscellaneous</td></tr>"
      /*this.inventory.forEach(item =>{
        text += `<p>${item.description}</p>`
        console.log(item.description)
      });*/

      player.inventory.forEach(function (item) {
        if (item instanceof Weapon) {
          tableWeaponText += `<tr><td colspan="2">${item.name}</td><td>+${item.damage} dmg</td></tr>`
        }
        else if (item instanceof Armor) {
          tableArmorText += `<tr><td colspan="2">${item.name}</td><td>+${item.armorAdded} armor</td>`
        }
        else if (item instanceof Gold) {
          tableMiscellaneousText += `<tr><td>${item.amt} ${item.name}</td><td colspan=2>${item.description}</td>`
        }
        else {
          tableMiscellaneousText += `<tr><td>${item.name}</td><td colspan=2>${item.description}</td>`
        }
      })

      tableWeaponText += "</tr>"
      tableArmorText += "</tr>"
      tableMiscellaneousText += "</tr>"

      inventoryBody.innerHTML = tableWeaponText + tableArmorText + tableMiscellaneousText

      displayHeroStats(this)
      //render(text)
    }
  
    move(dx,dy){
      this.inBattle = false
      this.location_x += dx
      this.location_y += dy
      console.log(tileExists(this.location_x,this.location_y))
      console.log("in room (" + player.location_x + ", " + player.location_y + ")")
      enemyTable.setAttribute("hidden", "hidden");

    }
  
    moveNorth(){
      this.move(0,-1)
      this.lastMove = "Move north"
      console.log("last move = " + this.lastMove) 
    }
  
    moveSouth(){
      this.move(0,1)
      this.lastMove = "Move south"
      console.log("last move = " + this.lastMove) 
    }
  
    moveEast(){
      this.move(1,0)
      this.lastMove = "Move east"
      console.log("last move = " + this.lastMove) 
    }
  
    moveWest(){
      this.move(-1,0)
      this.lastMove = "Move west"
      console.log("last move = " + this.lastMove) 
    }
  
  //fleeing always sends you back in the direction you came from, if possible
  flee(){
      this.inBattle = false
      if (this.lastMove == "Move south") {
        console.log("Fleeing north!")
        this.moveNorth()
      }
      else if (this.lastMove == "Move north") {
        console.log("Fleeing south!")
        this.moveSouth()
      }
      else if (this.lastMove == "Move east") {
        console.log("Fleeing west!")
        this.moveWest()
      }
      else if (this.lastMove == "Move west") {
        console.log("Fleeing east!")
        this.moveEast()
      }
    }
  
    equipBestWeapon() {
      let bestWeapon = null
      let maxDmg = 0
  
      this.inventory.forEach(item =>{
        if (item instanceof Weapon ){
          if (item.damage > maxDmg) {
            if (item.magicReq > this.magic)
              console.log("You do not have the magic needed to use the " + item.name)
            else if (item.strengthReq > this.strength)
              console.log("You do not have the strength needed to use the " + item.name)
            else {
              maxDmg = item.damage
              bestWeapon = item
            }
          }
        }
      });
      this.equippedWeapon = bestWeapon
    }

    equipBestArmor() {
      let bestArmor = null
      let maxAddedArmor = 0
  
      this.inventory.forEach(item =>{
        if (item instanceof Armor ){
          if (item.armorAdded > maxAddedArmor) {
            if (item.magicReq > this.magic)
              console.log("You do not have the magic needed to use the " + item.name)
            else if (item.strengthReq > this.strength)
              console.log("You do not have the strength needed to use the " + item.name)
            else {
              maxAddedArmor = item.armorAdded
              bestArmor = item
            }
          }
        }
      });
      this.equippedArmor = bestArmor
    }

    attack(enemy){
      let text = ""
      let damageDealt = 0
      let maxDamage = player.equippedWeapon.damage
      let minDamage = player.equippedWeapon.damage / 2

      console.log(`You use ${player.equippedWeapon.name} against ${enemy.name}!`)
      text += `<p>You use a ${player.equippedWeapon.name} against the ${enemy.name}!</p>`

      
      //determine damage that could be dealt to enemy
      damageDealt = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage)
      console.log("damageDealt = " + damageDealt)
      
      //check if enemy blocks hit
      if (enemy.armor > damageDealt || damageDealt == 0) {
        console.log(`${enemy.name} took the hit without flinching.`)
        text += `<p>${enemy.name} took the hit without flinching.</p>`
      }

      else {
        enemy.hp -= damageDealt
  
        if (!enemy.isAlive()) {
          console.log(`You killed the ${enemy.name}!`)
          text += `<p>You killed the ${enemy.name}!</p>`
          enemyTable.setAttribute("hidden", "hidden");
          calculateXP(enemy)
        } 
        else {
          console.log(`${enemy.name} has ${enemy.hp} HP left.`)
          text += `<p>${enemy.name} has ${enemy.hp} HP left.</p>`
        }
      }
      
      render(text)
    }
  }
  
  player = new Player()