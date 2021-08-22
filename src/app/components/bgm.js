export default class BGM {
    constructor(synth) {
        this.scene = document.querySelector('a-scene');
        this.el = document.createElement('a-entity');

        this.audio = document.createElement('audio');

        // Do audio things
        synth.start();

        this.el.setAttribute('sound', {
            autoplay: true,
            loop: true,
            positional: false,
            src: null
        });

        this.scene.appendChild(this.el);
    }
}