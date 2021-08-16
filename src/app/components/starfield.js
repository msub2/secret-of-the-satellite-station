/**
 * Modified version of Dave Kerr's "Learn JavaScript: Part 1 - Create a Starfield" project licensed under the CPOL.
 * https://www.codeproject.com/info/cpol10.aspx
 */
export default class Starfield {
    constructor() {
        this.stars = Array(1000).fill(0);

        this.canvas = document.createElement('canvas');
        this.canvas.width = 3840;
        this.canvas.height = 2160;

        //	Create the stars.
        this.stars.forEach((star, i) => {
            this.stars[i] = new Star(
                Math.random() * this.canvas.width, 
                Math.random() * this.canvas.height, 
                Math.random() * 3 + 1
            );
        }, this);

        //	Get the drawing context.
        var ctx = this.canvas.getContext("2d");

        //	Draw the background.
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        //	Draw stars.
        ctx.fillStyle = '#ffffff';
        this.stars.forEach(star => {
            ctx.fillRect(star.x, star.y, star.size, star.size);
        })

        let img = document.createElement('img');
        img.src = this.canvas.toDataURL();

        this.starSky = document.createElement('a-sky');
        this.starSky.setAttribute('src', img.src);
        this.starSky.setAttribute('radius', 1000)
        document.querySelector('a-scene').appendChild(this.starSky);
    }

    spin() {
        this.starSky.object3D.rotateY(.0005);
    }
}

class Star {
	constructor(x, y, size) {
        this.x = x;
        this.y = y; 
        this.size = size;      
    }
}