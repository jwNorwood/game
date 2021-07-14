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

  public updateLeftArm(left_arm: object) {
    this.left_arm = left_arm;
  }
  public getLeftArm(){
    return this.left_arm;
  }
  
  public updateRightArm(right_arm: object) {
    this.right_arm = right_arm;
  }
  public getRightArm(){
    return this.right_arm;
  }

  public updateTorso(torso: object) {
    this.torso = torso;
  }
  public getTorso(){
    return this.torso;
  }

  public updateHead(head: object) {
    this.head = head;
  }
  public getHead(){
    return this.head;
  }

  public updateLegs(legs: object) {
    this.legs = legs;
  }
  public getLegs(){
    return this.legs;
  }
}