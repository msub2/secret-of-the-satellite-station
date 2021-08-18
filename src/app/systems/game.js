import Starfield from "../components/starfield";
import Button from "../entities/Button";
import Player from "../entities/Player";
import Station from "../entities/Station";

AFRAME.registerSystem('game', {
    schema: {},

    init: function () {
        console.log('Game Initialized');

        this.starfield = new Starfield();
        this.station = new Station();

        // Example summon a custom entity
        this.button = new Button(0, 1, -.5, {
           width: .2,
           height: .2,
           depth: .2
        });

        this.player = new Player();
    },

    tick(time, timeDelta){
        // Your gameloop code
        this.starfield.spin();
    }
});
