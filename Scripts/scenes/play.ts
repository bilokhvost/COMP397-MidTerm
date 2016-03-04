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
        private _diceOneText: objects.Label ;
        private _diceTwoText: objects.Label;
        
         private _one = 0;
        private _two = 0;
        private _three = 0;
        private _four = 0;
        private _five = 0;
        private _six = 0;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {


         
            
            // add the Rolling button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            console.log("Add button");
            this.addChild(this._startOverButton);
            this._startOverButton.on("click", this._startOverButtonClick, this);
            
            /*  this._diceOneText = new objects.Label(
                "kfkf",
                "18px Consolas",
                "#ff0000",
                146,
                252
                );
        
            this.addChild(this._diceOneText);*/
            
         
            
            //Initialize Array of Bitmaps
            this._initializeBitmapArray();
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        //PRIVATE METHODS
        
        private _checkRange(value: number, lowerBounds: number, upperBounds: number) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }
        
        
        // initialize the array of dicers
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
        
        //rolling the dices 
        private _rollDice(): string[] {
            var betLine = [" ", " "];
            var outCome = [0, 0];
            for (var diceRoll = 0; diceRoll < 2; diceRoll++) {
                outCome[diceRoll] = Math.floor(Math.random() * 6) + 1;
                switch (outCome[diceRoll]) {
                    case 1:
                        betLine[diceRoll] = "DiceOne";
                        this._one++;
                        break;
                    case 2: 
                        betLine[diceRoll] = "DiceTwo";
                        this._two++;
                        break;
                    case 3:
                        betLine[diceRoll] = "DiceThree";
                        this._three++;
                        break;
                    case 4: // 12.3% probability
                        betLine[diceRoll] = "DiceFour";
                        this._four++;
                        break;
                    case 5: //  7.7% probability
                        betLine[diceRoll] = "DiceFive";
                        this._five++;
                        break;
                    case 6: //  4.6% probability
                        betLine[diceRoll] = "DiceSix";
                        this._six++;
                        break;
                }
            }
            return betLine;
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        //Rolling dices click event
        private _startOverButtonClick(event: createjs.MouseEvent): void {
            console.log("Roll Over Again");
            var bitmap: string[] = this._rollDice();
                for (var dice: number = 0; dice < 2; dice++) {                    
                    this._dices[dice].image = assets.getResult(bitmap[dice]);
                }
            //   this._diceOneText.text = "1";
             //   this._diceTwoText.text ="1";

        }
    }
}