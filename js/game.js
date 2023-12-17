let storyText = document.getElementById('story-text')
let gameBtns = document.getElementById('game-btns')
let heroStrength = document.getElementById('heroStrength')
let heroMagic = document.getElementById('heroMagic')
let heroHP = document.getElementById('heroHP')
let currentEquipment = document.getElementById('current-equipment')
let weaponName = document.getElementById('weaponName')
let weaponDamage = document.getElementById('weaponDamage')
let armorName = document.getElementById('armorName')
let enemyTable = document.getElementById('enemyTable')
let enemyName = document.getElementById('enemyName')
let enemyArmor = document.getElementById('enemyArmor')
let enemyStrength = document.getElementById('enemyStrength')
let enemyHP = document.getElementById('enemyHP')
let inventoryBody = document.getElementById('inventoryBody')
let availableActions
var room
var busy = false
var isGameStarted = false

function play(){
  room = world[[player.location_x,player.location_y]]

  let text = room.introText()

  if (player.isAlive() && !player.victory){
      text += "<p>Choose an action</p>"

      availableActions = room.availableActions()

      let innerHTML = ""

      availableActions.forEach(action => {
        innerHTML += `
        <button type="button" name="button" onClick="clickGameBtn('${action.name}')">${action.name}</button>
        <br>`
      });

      gameBtns.innerHTML = innerHTML
  }

  if (room instanceof EnemyRoom) {
      console.log("player is in battle")
      if (room.enemy.hp > 0)
        displayEnemyInfo(room.enemy)
  }
  else
    enemyTable.setAttribute("hidden", "hidden");

  room.modifyPlayer(player)

  if (player.victory){
    alert("You Win!");
    gameBtns.innerHTML = ""
  }

  if (!busy){
      render(text)
  }

  if (!isGameStarted) {
    displayHeroStats(player.strength, player.magic, player.hp, player.equippedWeapon, player.equippedArmor)
    isGameStarted = true
  }
}

function displayEnemyInfo(enemy) {
    if (enemy.hp > 0) {
      player.inBattle = true
      enemyTable.removeAttribute('hidden')
      enemyName.innerHTML = enemy.name
      enemyArmor.innerHTML = enemy.armor
      enemyStrength.innerHTML = enemy.damage
      enemyHP.innerHTML = enemy.hp
    }
}

function clickGameBtn(val){

  busy=false

  if (val === "Move east"){
    player.moveEast()
  } 
  else if (val === "Move west"){
    player.moveWest()
  }
  else if (val === "Move north"){
    player.moveNorth()
  } 
  else if (val === "Move south"){
    player.moveSouth()
  } 
  else if(val === "View Inventory"){
    player.printInventory()
    busy = true
  } 
  else if (val === "Attack"){
    player.attack(room.enemy)
    busy = true
  } 
  else if (val === "Flee"){
    player.flee()
  }
  console.log("play() function about to run!")
  play()
}

function render(text){
  storyText.innerHTML = text
}

function addStoryText(text) {
  storyText.innerHTML += text
}

function displayHeroStats(strength, magic, hp, weapon, armor){
  heroStrength.innerHTML = strength
  heroMagic.innerHTML = magic
  heroHP.innerHTML = hp
  weaponName.innerHTML = weapon.name
  weaponDamage.innerHTML = "+ " + weapon.damage + " dmg"
  armorName.innerHTML = armor.name
  armorAdded.innerHTML = "+ " + armor.armorAdded + " armor"
}

play()