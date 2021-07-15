class Play3 extends Phaser.Scene {
    constructor() {
        super("playScene3");
    }

    create() {
        let play3Config = {
            fontFamily : 'Courier',
            fontSize: '28px',
            backgroundColor: '#000066',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.text(game.config.width/2, game.config.height/2, 'Welcome to Prince\'s Adventure!').setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2+50, '[Spacebar to start]', play3Config).setOrigin(0.5);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }
}