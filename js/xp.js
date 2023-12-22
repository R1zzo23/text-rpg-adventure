function levelPlayerUp (player) {
    player.level++
    player.xp -= player.nextLevelXP
    player.attributeUpgradesAvailable = 3
    console.log('upgradesAvailable = ' + player.attributeUpgradesAvailable)
}

function calculateXpForNextLevel (player) {
    let level = player.level
    console.log("level = " + player.level)
    player.nextLevelXP = Math.round(50 * Math.pow(1.2, player.level))
    console.log("nextLevelXp = " + player.nextLevelXP)
}

function allowAttributeUpgrades (player) {
    document.querySelectorAll('button.attributeUpgradeBtn').forEach(elem => {
        elem.disabled = false;
    });
}

function upgradeBtnPushed (num) {
    if (num == 1) {
        player.strength++
        player.attributeUpgradesAvailable--
    }
    else if (num == 2) {
        player.magic++
        player.attributeUpgradesAvailable--
    }
    console.log('upgrade points remaining = ' + player.attributeUpgradesAvailable)

    if (player.attributeUpgradesAvailable == 0) {
        document.querySelectorAll('button.attributeUpgradeBtn').forEach(elem => {
            elem.disabled = true;
        });
    }
    displayHeroStats(player)
}