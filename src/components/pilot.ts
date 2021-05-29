
export default class Pilot {
  constructor(maxHealth: integer, currentHealth: integer) {
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
  }
  // specialization(s)
  // deficiencies(s)
  currentHealth: integer;
  maxHealth: integer;

  updateMaxHealth( maxHealth: integer ){
    this.maxHealth = maxHealth
  }

  updateCurrentHealth( currentHealth: integer ){
    this.currentHealth = currentHealth;
  }
}

// pilot progress?
// pilot survival?