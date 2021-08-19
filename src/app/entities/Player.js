export default class Player {
    constructor() {
        this.scene = document.querySelector('a-scene');

        this.leftHand = document.createElement('a-entity');
        this.rightHand = document.createElement('a-entity');

        this.vec3zero = new THREE.Vector3();
        this.tempPos = new THREE.Vector3();

        [this.leftHand, this.rightHand].forEach((hand, i) => {
            var handedness = i == 0 ? 'left' : 'right'
            hand.setAttribute('oculus-touch-controls', { hand: handedness });
            hand.setAttribute('vive-controls', { hand: handedness });
            hand.setAttribute('windows-motion-controls', { hand: handedness });
            hand.setAttribute('daydream-controls', { hand: handedness });
            hand.setAttribute('hand-tracking-controls', { hand: handedness });
            this.scene.appendChild(hand);            

            hand['prevPos'] = new THREE.Vector3();

            document.addEventListener('model-loaded', () => {
                if (!hand.getObject3D('mesh')) return;
                hand['bbox'] = new THREE.Box3().setFromObject(hand.getObject3D('mesh'));
                this.scene.object3D.add(new THREE.BoxHelper(hand.getObject3D('mesh')));
                console.log(hand.components);
            });
        });
    }

    update() {
        this.updateHandBBoxes();
    }

    updateHandBBoxes() {
        [this.leftHand, this.rightHand].forEach(hand => {
            var wrist, referenceSpace, position;
            if (hand.bbox) {
                wrist = hand.components['tracked-controls-webxr'].controller.hand.get('index-finger-tip');
                referenceSpace = hand.components['hand-tracking-controls'].referenceSpace;
                position = this.scene.frame.getJointPose(wrist, referenceSpace)?.transform.position;
                
                if (!position) {
                    return;
                }

                if (hand.prevPos.equals(this.vec3zero)) 
                    hand.prevPos.set(position.x, position.y, position.z);
                
                this.tempPos.set(position.x, position.y, position.z);
                this.tempPos.sub(hand.prevPos);
                hand.bbox.translate(this.tempPos);
                hand.prevPos.set(position.x, position.y, position.z);
            }            
        });
    }
}