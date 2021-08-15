import Interactable from "./Interactable";

export default class Button extends Interactable {
    constructor(x, y, z, settings, callback) {
        super(x, y, z);

        this.el.setAttribute('geometry', {
            primitive: 'box',
            width: settings.width || 1,
            height: settings.height || 1,
            depth: settings.depth || 1
        });

        this.el.setAttribute('material', {
            opacity: 1,
            shader: 'standard'
        });

        this.callback = callback || function() {};

        this.el.className = 'button';

        this.scene.appendChild(this.el);
    }

    interact() {
        // Play a sound?
        this.callback();
    }
}