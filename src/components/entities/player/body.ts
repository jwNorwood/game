interface BodyInterface { 
  left_arm: object;
  right_arm: object;
  torso: object;
  head: object;
  legs: object;
}

export default class Body { 
  private left_arm: object;
  private right_arm: object;
  private torso: object;
  private head: object;
  private legs: object;

  constructor({ left_arm, right_arm, torso, head, legs }: BodyInterface) {
    this.left_arm = left_arm;
    this.right_arm = right_arm;
    this.torso = torso;
    this.head = head;
    this.legs = legs;
  }

  updateLeftArm(left_arm: object) {
    this.left_arm = left_arm;
  }
  getLeftArm(){
    return this.left_arm;
  }
  
  updateRightArm(right_arm: object) {
    this.right_arm = right_arm;
  }
  getRightArm(){
    return this.right_arm;
  }

  updateTorso(torso: object) {
    this.torso = torso;
  }
  getTorso(){
    return this.torso;
  }

  updateHead(head: object) {
    this.head = head;
  }
  getHead(){
    return this.head;
  }

  updateLegs(legs: object) {
    this.legs = legs;
  }
  geLegs(){
    return this.legs;
  }
}