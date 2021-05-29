
export default class Pilot {
  private currentHealth: integer;
  private maxHealth: integer;

  constructor(maxHealth: integer, currentHealth: integer) {
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
  }
  // specialization(s)
  // deficiencies(s)

  updateMaxHealth( maxHealth: integer ){
    this.maxHealth = maxHealth
  }
  getMaxHealth(){
    return this.maxHealth
  }

  updateCurrentHealth( currentHealth: integer ){
    this.currentHealth = currentHealth;
  }
  
  getCurrentHealth(){
    return this.currentHealth;
  }
}

// pilot progress?
// pilot survival?