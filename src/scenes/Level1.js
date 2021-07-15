class Level1 extends Phaser.Scene {
    constructor() {
        super("playScene3");
    }
    preload() {
        this.load.audio('bgm','./assets/maze_bgm.wav');
        this.load.image('choco','./assets/choco.png');
        this.load.image('straw','./assets/straw.png');
    }
    create() {
        this.add.rectangle(0, 0, game.config.width, game.config.height, 0x99ffcc).setOrigin(0, 0);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.music = this.sound.add('bgm', {
            volume: 0.5,
            loop: true
        });
        //this.music.play();
        this.score = 0;
        let scoreConfig = {
            fontFamily: 'Comic Sans MS',
            fontSize: '36px',
            backgroundColor: '#FFFFFF',
            color: '#D43F4D',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        //if (game.settings.players == 2) {
            //scoreConfig.color = '#7FA8CF';
        //}
        this.scoreLeft = this.add.text(game.config.width/20, game.config.height / 30, this.score, scoreConfig);
        scoreConfig.fixedWidth = 0;
        //this.text2 = this.add.text(game.config.width/20, game.config.height / 30, 'Left Button was released', scoreConfig);
        //this.input.mouse.disableContextMenu();
        //this.pointer = this.input.activePointer;
        /*this.input.on('pointerup', function (pointer) {
            if (pointer.leftButtonReleased()) {
                this.text2 = this.add.text(game.config.width/20, game.config.height / 30, 'Left Button was released', scoreConfig);
            }
        });*/
        //if (this.pointer.isDown) {
            //this.score += 20;
        //}
        this.click = this.add.sprite(game.config.width/2, game.config.height/2,'choco').setInteractive();
        //click.inputEnabled = true;
        //click.events.onInputDown.add(clicking,this);
        //this.click.on('pointerdown', function() {
            //this.score += 20;
        //});
        this.input.on('gameobjectdown',this.onObjectClicked);
        //this.score+=20;
        this.scoreLeft.text = this.score;
        this.gameOver = false;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart', scoreConfig).setOrigin(0.5);
            this.gameOver = true;
        }, null, this);
    }
    /*clicking(){
        this.score += 20;
    }*/
    onObjectClicked(pointer,gameObject) {
        gameObject.angle+=10;
    }
    update() {
        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            this.music.stop();
            this.scene.start("menuScene");
        }
        //if (this.pointer.isDown) {
            //this.score += 20;
        //}
        if(!this.gameOver) {
            this.click.on('pointerdown', function() {
                this.score += 20;
            });
            this.scoreLeft.text = this.score;
        }
    }
}