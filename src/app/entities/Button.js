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

        this.dimensions = {x: x, y: y, z: z};
        this.tempPos = new THREE.Vector3();
        this.bboxAdjusted = false;
        
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
    }

    interact() {
        // Play a sound?
        this.callback();
    }

    checkCollisions(left, right) {
        [left, right].forEach(hand => {
            if (!hand.bbox || !this.el.components.geometry?.geometry) return;
    
            var bbox = this.el.components.geometry.geometry.boundingBox;

            var goodX = hand.bbox.max.x > bbox.min.x && hand.bbox.min.x < bbox.max.x;
            var goodY = hand.bbox.max.y > bbox.min.y && hand.bbox.min.y < bbox.max.y;
            var goodZ = hand.bbox.max.z > bbox.min.z && hand.bbox.min.z < bbox.max.z;
            
            if (!this.bboxAdjusted) {
                this.tempPos.copy(this.el.object3D.position);
                this.tempPos.y += this.dimensions.y;
                this.tempPos.z -= this.dimensions.z;
                this.bboxAdjusted = true;
                bbox.min.add(this.tempPos);
                bbox.max.add(this.tempPos);
            }
    
            if (hand.bbox.intersectsBox(bbox)) {
                hand.components['hand-tracking-controls'].mesh.children[30].material.color = new THREE.Color('green')
            }
            else if (goodX && goodY) {
                hand.components['hand-tracking-controls'].mesh.children[30].material.color = new THREE.Color('orange');
            }
            else if (goodX && goodZ) {
                hand.components['hand-tracking-controls'].mesh.children[30].material.color = new THREE.Color('purple');
            }
            else if (goodY && goodZ) {
                hand.components['hand-tracking-controls'].mesh.children[30].material.color = new THREE.Color('pink');
            }
            else if (goodX) {
                hand.components['hand-tracking-controls'].mesh.children[30].material.color = new THREE.Color('red');
            }
            else if (goodY) {
                hand.components['hand-tracking-controls'].mesh.children[30].material.color = new THREE.Color('yellow');
            }
            else if (goodZ) {
                hand.components['hand-tracking-controls'].mesh.children[30].material.color = new THREE.Color('blue');
            }
            else {
                hand.components['hand-tracking-controls'].mesh.children[30].material.color = new THREE.Color('white');
            }
        });
    }
}