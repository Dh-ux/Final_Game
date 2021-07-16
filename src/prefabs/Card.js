class Card extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene. add.existing(this);
        this.points = pointValue;
        //this.moveSpeed = game.settings.spaceshipSpeed;
    }
    update() {
        this.alpha = 0;
    }
    reset() {
        this.x = game.config.width;
    }
}