class Level1 extends Phaser.Scene {
    constructor() {
        super("playScene3");
    }
    preload() {
        this.load.audio('bgm','./assets/maze_bgm.wav');
        this.load.image('choco','./assets/choco.png');
        this.load.image('card','./assets/card back.png');
        this.load.image('card2','./assets/card back2.png');
        this.load.image('pumpkin','./assets/pumpkin carriage.png');
        this.load.image('mouse','./assets/mouse.png');
        this.load.image('rabbit','./assets/rabbit.png');
        this.load.image('horse','./assets/horse.png');
        this.load.image('bird','./assets/bird.png');
        this.load.image('magic','./assets/magic stick.png');
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
        
        this.click = this.add.sprite(game.config.width/2, game.config.height/2,'pumpkin');
        /*this.cardA = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 - 157.5,'mouse').setInteractive();
        this.cardB = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 - 157.5,'rabbit').setInteractive();
        this.cardC = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 - 157.5,'horse').setInteractive();
        this.cardD = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 - 157.5,'mouse').setInteractive();
        this.cardE = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 - 52.5,'bird').setInteractive();
        this.cardF = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 - 52.5,'rabbit').setInteractive();
        this.cardG = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 - 52.5,'mouse').setInteractive();
        this.cardH = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 - 52.5,'horse').setInteractive();
        this.cardI = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 + 52.5,'rabbit').setInteractive();
        this.cardJ = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 + 52.5,'bird').setInteractive();
        this.cardK = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 + 52.5,'bird').setInteractive();
        this.cardL = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 + 52.5,'mouse').setInteractive();
        this.cardM = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 + 157.5,'horse').setInteractive();
        this.cardN = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 + 157.5,'rabbit').setInteractive();
        this.cardO = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 + 157.5,'bird').setInteractive();
        this.cardP = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 + 157.5,'horse').setInteractive();
        this.card = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 - 157.5,'card').setInteractive();
        this.card2 = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 - 157.5,'card').setInteractive();
        this.card3 = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 - 157.5,'card').setInteractive();
        this.card4 = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 - 157.5,'card').setInteractive();
        this.card5 = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 - 52.5,'card').setInteractive();
        this.card6 = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 - 52.5,'card').setInteractive();
        this.card7 = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 - 52.5,'card').setInteractive();
        this.card8 = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 - 52.5,'card').setInteractive();
        this.card9 = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 + 52.5,'card').setInteractive();
        this.card10 = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 + 52.5,'card').setInteractive();
        this.card11 = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 + 52.5,'card').setInteractive();
        this.card12 = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 + 52.5,'card').setInteractive();
        this.card13 = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 + 157.5,'card').setInteractive();
        this.card14 = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 + 157.5,'card').setInteractive();
        this.card15 = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 + 157.5,'card').setInteractive();
        this.card16 = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 + 157.5,'card').setInteractive();*/
        
        this.card01 = new Card(this, game.config.width/2 - 52.5, game.config.height/2 - 157.5,'mouse', 0, 1).setOrigin(0,0);
        this.card02 = new Card(this, game.config.width/2 + 52.5, game.config.height/2 - 157.5,'rabbit', 0, 1).setOrigin(0,0);
        this.card03 = new Card(this, game.config.width/2 - 157.5, game.config.height/2 - 157.5,'horse', 0, 1).setOrigin(0,0);
        this.card04 = new Card(this, game.config.width/2 + 157.5, game.config.height/2 - 157.5,'mouse', 0, 1).setOrigin(0,0);
        this.card05 = new Card(this, game.config.width/2 - 52.5, game.config.height/2 - 52.5,'bird', 0, 1).setOrigin(0,0);
        this.card06 = new Card(this, game.config.width/2 + 52.5, game.config.height/2 - 52.5,'rabbit', 0, 1).setOrigin(0,0);
        this.card07 = new Card(this, game.config.width/2 - 157.5, game.config.height/2 - 52.5,'mouse', 0, 1).setOrigin(0,0);
        this.card08 = new Card(this, game.config.width/2 + 157.5, game.config.height/2 - 52.5,'horse', 0, 1).setOrigin(0,0);
        this.card09 = new Card(this, game.config.width/2 - 52.5, game.config.height/2 + 52.5,'rabbit', 0, 1).setOrigin(0,0);
        this.card10 = new Card(this, game.config.width/2 + 52.5, game.config.height/2 + 52.5,'bird', 0, 1).setOrigin(0,0);
        this.card011 = new Card(this, game.config.width/2 - 157.5, game.config.height/2 + 52.5,'bird', 0, 1).setOrigin(0,0);
        this.card012 = new Card(this, game.config.width/2 + 157.5, game.config.height/2 + 52.5,'mouse', 0, 1).setOrigin(0,0);
        this.card013 = new Card(this, game.config.width/2 - 52.5, game.config.height/2 + 157.5,'horse', 0, 1).setOrigin(0,0);
        this.card014 = new Card(this, game.config.width/2 + 52.5, game.config.height/2 + 157.5,'rabbit', 0, 1).setOrigin(0,0);
        this.card015 = new Card(this, game.config.width/2 - 157.5, game.config.height/2 + 157.5,'bird', 0, 1).setOrigin(0,0);
        this.card016 = new Card(this, game.config.width/2 + 157.5, game.config.height/2 + 157.5,'horse', 0, 1).setOrigin(0,0);
        this.card1 = new Card(this, game.config.width/2 - 52.5, game.config.height/2 - 157.5,'card', 0, 1).setOrigin(0,0);
        this.card2 = new Card(this, game.config.width/2 + 52.5, game.config.height/2 - 157.5,'card', 0, 1).setOrigin(0,0);
        this.card3 = new Card(this, game.config.width/2 - 157.5, game.config.height/2 - 157.5,'card', 0, 1).setOrigin(0,0);
        this.card4 = new Card(this, game.config.width/2 + 157.5, game.config.height/2 - 157.5,'card', 0, 1).setOrigin(0,0);
        this.card5 = new Card(this, game.config.width/2 - 52.5, game.config.height/2 - 52.5,'card', 0, 1).setOrigin(0,0);
        this.card6 = new Card(this, game.config.width/2 + 52.5, game.config.height/2 - 52.5,'card', 0, 1).setOrigin(0,0);
        this.card7 = new Card(this, game.config.width/2 - 157.5, game.config.height/2 - 52.5,'card', 0, 1).setOrigin(0,0);
        this.card8 = new Card(this, game.config.width/2 + 157.5, game.config.height/2 - 52.5,'card', 0, 1).setOrigin(0,0);
        this.card9 = new Card(this, game.config.width/2 - 52.5, game.config.height/2 + 52.5,'card', 0, 1).setOrigin(0,0);
        this.card10 = new Card(this, game.config.width/2 + 52.5, game.config.height/2 + 52.5,'card', 0, 1).setOrigin(0,0);
        this.card11 = new Card(this, game.config.width/2 - 157.5, game.config.height/2 + 52.5,'card', 0, 1).setOrigin(0,0);
        this.card12 = new Card(this, game.config.width/2 + 157.5, game.config.height/2 + 52.5,'card', 0, 1).setOrigin(0,0);
        this.card13 = new Card(this, game.config.width/2 - 52.5, game.config.height/2 + 157.5,'card', 0, 1).setOrigin(0,0);
        this.card14 = new Card(this, game.config.width/2 + 52.5, game.config.height/2 + 157.5,'card', 0, 1).setOrigin(0,0);
        this.card15 = new Card(this, game.config.width/2 - 157.5, game.config.height/2 + 157.5,'card', 0, 1).setOrigin(0,0);
        this.card16 = new Card(this, game.config.width/2 + 157.5, game.config.height/2 + 157.5,'card', 0, 1).setOrigin(0,0);
        this.magic = this.add.sprite(game.config.width/2, game.config.height/2,'magic');
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
        gameObject.alpha=0;
    }
    update() {
        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            this.music.stop();
            this.scene.start("menuScene");
        }
        this.magic.x = game.input.mousePointer.x;
        this.magic.y = game.input.mousePointer.y;
        //if (this.pointer.isDown) {
            //this.score += 20;
        //}
        if(!this.gameOver) {
            if(game.input.mousePointer.buttons == 1) {
                if(this.checkCollision(this.magic, this.card1)) {
                    this.card1.update();
                }
                if(this.checkCollision(this.magic, this.card2)) {
                    this.card2.update();
                }
                if(this.checkCollision(this.magic, this.card3)) {
                    this.card3.update();
                }
                if(this.checkCollision(this.magic, this.card4)) {
                    this.card4.update();
                }
            }
            this.scoreLeft.text = this.score;
        }
    }
    checkCollision(rocket, ship) {
        // simple AABB checking
        
        if (rocket.x < ship.x + ship.width && 
            rocket.x + rocket.width > ship.x && 
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship.y) {
                return true;
        }
        else {
            return false;
        }
    }
}