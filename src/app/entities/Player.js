export default class Player {
    constructor() {
        this.scene = document.querySelector('a-scene');

        this.leftHand = document.createElement('a-entity');
        this.rightHand = document.createElement('a-entity');

        [this.leftHand, this.rightHand].forEach((hand, i) => {
            var handedness = i == 0 ? 'left' : 'right'
            hand.setAttribute('oculus-touch-controls', { hand: handedness });
            hand.setAttribute('vive-controls', { hand: handedness });
            hand.setAttribute('windows-motion-controls', { hand: handedness });
            hand.setAttribute('daydream-controls', { hand: handedness });
            hand.setAttribute('hand-tracking-controls', { hand: handedness });
            this.scene.appendChild(hand);

            document.addEventListener('model-loaded', () => {
                if (!hand.getObject3D('mesh')) return;
                hand['bbox'] = new THREE.Box3().setFromObject(hand.getObject3D('mesh'));
                hand.object3D.add(new THREE.BoxHelper(hand.getObject3D('mesh')));
            });
        });
    }

    updateHandBBoxes() {
        if (!this.leftHand.bbox || !this.rightHand.bbox) return;
        
        this.leftHand.bbox.setFromObject(this.leftHand.getObject3D('mesh'));
        this.rightHand.bbox.setFromObject(this.rightHand.getObject3D('mesh'));
    }
}