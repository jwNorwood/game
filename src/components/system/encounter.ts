//if player or enemies have health

export default function encounter(player, enemies) {
    while (player.health > 0 && enemies.alive.length > 0) {
      //players turn
      if (player.active){
        if (player.avalibleActions) {
          // need players turn in another function
        }
        else {
          player.active = false;
        }
      }
      else
        enemies.active = true;

      //enemy turn
      if (enemies.active){
        for(var i = 0; i < enemies.alive.lenght; i++){
          enemies.units[i].action();
        }
        enemies.active = false;
      }
    }
    if (player.health <= 0) {
      // you died screen
      console.log('You died');
      return "encounter_failed"
    }
    else {
      // generate rewards
      console.log('You won');
      return "encounter_success"
    }
    
}