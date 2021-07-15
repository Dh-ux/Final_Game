  

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 640,
    scene: [ Menu, Play1, Play2, Play3 ] 
}
let game = new Phaser.Game(config);
// reserve keyboard vars
let keyLEFT, keyRIGHT, keySPACE;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;