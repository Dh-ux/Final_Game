// Group Name: Seg Fault
// Group Member: Julianne He, Lexin Xiong, Qiuting Zhao
// `We have build some basic scene, for level 2 and 3, they will be same with level 1. And we have implemented the switch between scenes.
// `Our game will be a game based on players' click through mouse, since we don't have enough artwork and animation now,
// we only implemented the basic click. Object will react based on players' clicking.
// `We have finished some visual assets, but the final size haven't decided yet, so they may be a little bit too large now.
// `The background music has been finished, but BE CAREFUL, we can't stop it right now,
// it will be disgusting when you play for a second time.

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 640,
    scene: [ Menu, Play1, Play2, Level1 ] 
}
let game = new Phaser.Game(config);
// reserve keyboard vars
let keyLEFT, keyRIGHT, keySPACE, keyR;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;