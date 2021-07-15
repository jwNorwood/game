export default class BodyPart {
    private health: number;
    private powered: boolean;
    private modifiers: any;

    constructor({health, powered, modifiers}) {
        this.health = health;
        this.powered = powered;
        this.modifiers = modifiers;
    }

    public update(delta) {
        this.health -= delta;
    }

    public reset() {
        this.health = 100;
        this.powered = true;
        this.modifiers = [];
    }

    public etModifiers() {
        return this.modifiers;
    }

    public getHealth() {
        return this.health;
    }

    public getPowered() {
        return this.powered;
    }

    public  getModifierValue(modifier) {
        return this.modifiers.indexOf(modifier) !== -1 ? this.modifiers[this.modifiers.indexOf(modifier)] : 0;
    }
}