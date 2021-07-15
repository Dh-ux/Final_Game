class Play2 extends Phaser.Scene {
    constructor() {
        super("playScene2");
    }

    create() {
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.text(game.config.width/2, game.config.height/2, 'Welcome to Cinderella\'s Adventure!').setOrigin(0.5);

    }
}