import Synthesizer from '../audio/synthesizer';
import BGM from '../components/bgm';

AFRAME.registerSystem('audio', {
    schema: {},

    init: function() {
        THREE.AudioContext.setContext(new (window.AudioContext || window.webkitAudioContext)());
        this.audioCtx = THREE.AudioContext.getContext();

        this.synth1 = new Synthesizer(this.audioCtx);
        this.BGM = new BGM(this.synth1);
    },
    
    tick(time, dt) {
        
    }
})