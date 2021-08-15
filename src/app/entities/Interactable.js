export default class Interactable {
    constructor(x, y, z) {
        this.scene = document.querySelector('a-scene');
        this.el = document.createElement('a-entity');

        this.el.setAttribute('position', {
            x: x || 0,
            y: y || 0,
            z: z || 0
        });
        
        this.state = null;
    }

    interact() {
        throw new Error(`Method 'interact()' must be implemented.`);
    }
}