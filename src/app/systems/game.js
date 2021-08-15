import Button from "../entities/Button";
import Player from "../entities/Player";

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

        this.player = new Player();
    },

    tick(time, timeDelta){
        // Your gameloop code
        
    }
});
