class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
  
    create() {
        let menuConfig = {
            fontFamily : 'Courier',
            fontSize: '28px',
            backgroundColor: '#ffffff',
            color: '#000066',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Prince and Cinderella', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'USE [SPACEBAR] to start the game', menuConfig).setOrigin(0.5);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACEBAR);


    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
          
          this.scene.start("playScene1"); 
           
        }
      
      }
      

}