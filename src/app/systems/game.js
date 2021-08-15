import Button from "../entities/Button";

AFRAME.registerSystem('game', {
    schema: {},

    init: function () {
        console.log('Game Initialized');

        // Example summon a custom entity
        this.button = new Button(0, 2, -5, {
           width: 2,
           height: 2,
           depth: 2
        });
    },

    tick(time, timeDelta){
        // Your gameloop code
        
    }
});
