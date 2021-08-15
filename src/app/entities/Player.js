export default class Player {
    constructor() {
        this.scene = document.querySelector('a-scene');
        
        this.leftHand = document.createElement('a-entity');
        this.leftHand.setAttribute('hand-controls', {
            hand: 'left',
            handModelStyle: 'lowPoly',
        });
        this.leftHand.setAttribute('hand-tracking-controls', {
            hand: 'left'
        });

        this.rightHand = document.createElement('a-entity');
        this.rightHand.setAttribute('hand-controls', {
            hand: 'right',
            handModelStyle: 'lowPoly',
        });
        this.rightHand.setAttribute('hand-tracking-controls', {
            hand: 'right'
        });

        this.scene.appendChild(this.leftHand);
        this.scene.appendChild(this.rightHand);
    }
}