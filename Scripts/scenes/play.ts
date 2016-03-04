 /*
 Kateryna Bilokhvost
 Last modified by:Kateryna Bilokhvost
 Last Modified date: March 4, 2016
 Description: Dice Rolling Game
 Revision History:
  Commit 1: Initial Commit
  Commit 2: added list of assets to the game.ts
  Commit 3: Added the initialized bitmap array
 
 */
// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        //   private _playLabel: objects.Label;
        private _startOverButton: objects.Button;
        private _dices: createjs.Bitmap[];
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {


            //Add Play Label
            /* this._playLabel = new objects.Label(
                 "PLAY SCENE","60px Consolas", 
                 "#000000", 
                 config.Screen.CENTER_X,config.Screen.CENTER_Y);
             this.addChild(this._playLabel);*/
            
            // add the Rolling button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            console.log("Add button");
            this.addChild(this._startOverButton);
            this._startOverButton.on("click", this._startOverButtonClick, this);
            
            //Initialize Array of Bitmaps
            this._initializeBitmapArray();
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        //PRIVATE METHODS
        
        private _initializeBitmapArray() {
            this._dices = new Array<createjs.Bitmap>();
            for (var dice: number = 0; dice < 2; dice++) {
                this._dices[dice] = new createjs.Bitmap(assets.getResult("DiceOne"));
                console.log(dice)
                this._dices[dice].x = 75 + (dice * 290);
                this._dices[dice].y = 60;
                this.addChild(this._dices[dice]);
                console.log(this._dices[dice]);
            }
        }

       
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        //Rolling dices click event
        private _startOverButtonClick(event: createjs.MouseEvent): void {
            console.log("Roll Over Again");

        }
    }
}