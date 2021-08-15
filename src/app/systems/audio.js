import BGM from '../components/bgm';

AFRAME.registerSystem('audio', {
    schema: {},

    init: function() {
        this.BGM = new BGM();
    },
    
    tick(time, dt) {
        
    }
})