import Interactable from "./Interactable";

AFRAME.registerGeometry('button', {
    schema: {
        depth: {default: 1, min: 0},
        height: {default: 1, min: 0},
        width: {default: 1, min: 0},
    },

    init: function (data) {
        var geometry = new THREE.BoxGeometry(data.width, data.height, data.depth);
        geometry.computeBoundingBox();
        this.geometry = geometry;
    }
});

export default class Button extends Interactable {
    constructor(x, y, z, settings, callback) {
        super(x, y, z);

        this.el.setAttribute('geometry', {
            primitive: 'button',
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
        console.log(this.el.components.geometry?.geometry);
    }

    interact() {
        // Play a sound?
        this.callback();
    }

    checkCollisions(left, right) {
        if (left.bbox) {
            console.log(left.bbox.intersectsBox(this.el.components.geometry.geometry.boundingBox));
        }
    }
}