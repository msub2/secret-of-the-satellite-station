export default class BGM {
    constructor() {
        this.scene = document.querySelector('a-scene');
        this.el = document.createElement('a-entity');

        this.audio = document.createElement('audio');

        // Do audio things

        this.el.setAttribute('sound', {
            autoplay: true,
            loop: true,
            positional: false,
            src: null
        });

        this.scene.appendChild(this.el);
    }
}