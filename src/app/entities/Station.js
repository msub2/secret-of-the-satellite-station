export default class Station {
    constructor() {
        this.scene = document.querySelector('a-scene');

        this.windowMaterial = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0x333333),
            opacity: 0.5
        });
        
        const rightWall = document.createElement('a-plane');
        const leftWall = document.createElement('a-plane');
        const backWall = document.createElement('a-plane');
        const frontWall = document.createElement('a-plane');

        rightWall.setAttribute('position', { x: 1, y: 4, z: 0 });
        rightWall.setAttribute('rotation', { x: -180, y: 90, z: 0 });
        rightWall.setAttribute('scale', { x: 2, y: 8, z: 2 });

        leftWall.setAttribute('position', { x: -1, y: 4, z: 0 });
        leftWall.setAttribute('rotation', { x: 180, y: -90, z: 0 });
        leftWall.setAttribute('scale', { x: 2, y: 8, z: 2 });

        backWall.setAttribute('position', { x: 0, y: 4, z: 1 });
        backWall.setAttribute('rotation', { x: -180, y: 0, z: 90 });
        backWall.setAttribute('scale', { x: 8, y: 2, z: 2 });

        frontWall.setAttribute('position', { x: 0, y: 4, z: -1 });
        frontWall.setAttribute('rotation', { x: -180, y: -180, z: 0 });
        frontWall.setAttribute('scale', { x: 2, y: 8, z: 2 });
        frontWall.setAttribute('material', this.windowMaterial);

        const floor = document.createElement('a-plane');
        floor.setAttribute('rotation', { x: -90, y: 0, z: 0 });
        floor.setAttribute('scale', { x: 2, y: 2, z: 2 });

        this.scene.appendChild(rightWall);
        this.scene.appendChild(leftWall);
        this.scene.appendChild(backWall);
        this.scene.appendChild(frontWall);
        this.scene.appendChild(floor);
    }
}